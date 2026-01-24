import { PERSON } from '@config/site';

interface WebPageSchema {
  '@type': 'WebPage';
  '@id': string;
}

interface PersonProfileSchema {
  '@context': string;
  '@type': 'Person';
  '@id': string;
  identifier: string;
  name: string;
  givenName: string;
  familyName: string;
  jobTitle: string;
  description: string;
  worksFor: {
    '@type': 'Organization';
    name: string;
    url?: string;
    logo?: string;
  };
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressCountry: string;
  };
  hasOccupation: {
    '@type': 'Occupation';
    name: string;
    occupationalCategory: string;
  };
  knowsAbout: string[];
  alumniOf: Array<{
    '@type': 'EducationalOrganization';
    name: string;
    url?: string;
  }>;
  url: string;
  sameAs: string[];
  mainEntityOfPage: WebPageSchema;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchema {
  '@context': string;
  '@type': 'FAQPage';
  '@id': string;
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export function generatePersonSchema(site: URL): PersonProfileSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site}#person`,
    identifier: PERSON.identifier,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    worksFor: {
      '@type': 'Organization',
      name: PERSON.worksFor.name,
      ...(PERSON.worksFor.url && { url: PERSON.worksFor.url }),
      ...(PERSON.worksFor.logo && { logo: PERSON.worksFor.logo }),
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.address.locality,
      addressCountry: PERSON.address.country,
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: PERSON.occupation.name,
      occupationalCategory: PERSON.occupation.category,
    },
    knowsAbout: PERSON.skills,
    alumniOf: PERSON.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.name,
      ...(edu.url && { url: edu.url }),
    })),
    url: site.toString(),
    sameAs: PERSON.socialProfiles,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': site.toString(),
    },
    ...(PERSON.image && { image: new URL(PERSON.image, site).toString() }),
  };
}

export function generateFAQPageSchema(faqs: FAQItem[], url: string): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': url,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbListSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateBreadcrumbListSchema(breadcrumbs: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

interface OrganizationSchema {
  '@context': string;
  '@type': 'Organization';
  '@id': string;
  name: string;
  url: string;
  logo?: string;
  employee: {
    '@type': 'Person';
    '@id': string;
  };
}

export function generateOrganizationSchema(site: URL): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${PERSON.worksFor.url}#organization`,
    name: PERSON.worksFor.name,
    url: PERSON.worksFor.url!,
    ...(PERSON.worksFor.logo && { logo: PERSON.worksFor.logo }),
    employee: {
      '@type': 'Person',
      '@id': `${site}#person`,
    },
  };
}
