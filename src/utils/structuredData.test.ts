import { describe, it, expect } from 'vitest';
import {
  generatePersonSchema,
  generateFAQPageSchema,
  generateBreadcrumbListSchema,
  generateOrganizationSchema,
  type FAQItem,
  type BreadcrumbItem,
} from './structuredData';

describe('structuredData', () => {
  const mockSite = new URL('https://example.com');

  describe('generatePersonSchema', () => {
    it('should generate correct Person schema structure', () => {
      const schema = generatePersonSchema(mockSite);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Person');
      expect(schema['@id']).toBe('https://example.com/#person');
    });

    it('should include personal info (name, jobTitle)', () => {
      const schema = generatePersonSchema(mockSite);

      expect(schema.name).toBe('Ratko Simidzija');
      expect(schema.jobTitle).toBe('JavaScript Developer');
      expect(schema.givenName).toBe('Ratko');
      expect(schema.familyName).toBe('Simidzija');
    });

    it('should include worksFor organization and address', () => {
      const schema = generatePersonSchema(mockSite);

      expect(schema.worksFor['@type']).toBe('Organization');
      expect(schema.worksFor.name).toBe('ePages');

      expect(schema.address).toEqual({
        '@type': 'PostalAddress',
        addressLocality: 'Limassol',
        addressCountry: 'CY',
      });
    });

    it('should include all knowsAbout skills (19 items)', () => {
      const schema = generatePersonSchema(mockSite);
      const skills = schema.knowsAbout;

      expect(Array.isArray(skills)).toBe(true);
      expect(skills).toHaveLength(19);
      expect(skills).toContain('React');
      expect(skills).toContain('TypeScript');
      expect(skills).toContain('Astro');
    });

    it('should include alumniOf education (2 institutions)', () => {
      const schema = generatePersonSchema(mockSite);
      const education = schema.alumniOf;

      expect(Array.isArray(education)).toBe(true);
      expect(education).toHaveLength(2);
      expect(education[0]['@type']).toBe('EducationalOrganization');
      expect(education[0].name).toBe('DCI Digital Career Institute');
      expect(education[1]['@type']).toBe('EducationalOrganization');
      expect(education[1].name).toBe('MBS Business School');
    });

    it('should include image property', () => {
      const schema = generatePersonSchema(mockSite);

      expect(schema.image).toBeDefined();
      expect(schema.image).toBe('https://example.com/apple-touch-icon.png');
    });

    it('should include worksFor organization url and logo', () => {
      const schema = generatePersonSchema(mockSite);

      expect(schema.worksFor.url).toBeDefined();
      expect(schema.worksFor.url).toMatch(/^https?:\/\//);
      expect(schema.worksFor.logo).toBeDefined();
      expect(schema.worksFor.logo).toMatch(/^https?:\/\//);
    });

    it('should include education institution urls', () => {
      const schema = generatePersonSchema(mockSite);
      const education = schema.alumniOf;

      expect(education).toHaveLength(2);
      education.forEach((edu) => {
        expect(edu.url).toBeDefined();
        expect(edu.url).toMatch(/^https?:\/\//);
      });
    });

    it('should include sameAs social media URLs (3 URLs)', () => {
      const schema = generatePersonSchema(mockSite);
      const socialUrls = schema.sameAs;

      expect(Array.isArray(socialUrls)).toBe(true);
      expect(socialUrls).toHaveLength(3);
      expect(socialUrls).toContain('https://github.com/sixra');
      expect(socialUrls).toContain('https://www.linkedin.com/in/ratkosimidzija');
      expect(socialUrls).toContain('https://x.com/sixra01');
    });
  });

  describe('generateFAQPageSchema', () => {
    const mockUrl = 'https://example.com/faq';
    const mockFAQs: FAQItem[] = [
      {
        question: 'What is your favorite programming language?',
        answer: 'TypeScript is my go-to language for web development.',
      },
      {
        question: 'How many years of experience do you have?',
        answer: 'I have over 5 years of professional experience.',
      },
    ];

    it('should generate correct FAQPage schema structure', () => {
      const schema = generateFAQPageSchema(mockFAQs, mockUrl);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('FAQPage');
      expect(schema['@id']).toBe(mockUrl);
    });

    it('should include all FAQ questions in mainEntity array', () => {
      const schema = generateFAQPageSchema(mockFAQs, mockUrl);

      expect(Array.isArray(schema.mainEntity)).toBe(true);
      expect(schema.mainEntity).toHaveLength(2);
    });

    it('should format each FAQ item correctly with Question and Answer types', () => {
      const schema = generateFAQPageSchema(mockFAQs, mockUrl);

      const firstQuestion = schema.mainEntity[0];
      expect(firstQuestion['@type']).toBe('Question');
      expect(firstQuestion.name).toBe('What is your favorite programming language?');
      expect(firstQuestion.acceptedAnswer['@type']).toBe('Answer');
      expect(firstQuestion.acceptedAnswer.text).toBe(
        'TypeScript is my go-to language for web development.'
      );

      const secondQuestion = schema.mainEntity[1];
      expect(secondQuestion['@type']).toBe('Question');
      expect(secondQuestion.name).toBe('How many years of experience do you have?');
      expect(secondQuestion.acceptedAnswer['@type']).toBe('Answer');
      expect(secondQuestion.acceptedAnswer.text).toBe(
        'I have over 5 years of professional experience.'
      );
    });

    it('should handle empty FAQ array', () => {
      const schema = generateFAQPageSchema([], mockUrl);

      expect(schema.mainEntity).toHaveLength(0);
      expect(schema['@type']).toBe('FAQPage');
    });

    it('should handle single FAQ item', () => {
      const singleFAQ: FAQItem[] = [
        {
          question: 'What is Astro?',
          answer: 'Astro is a modern static site generator.',
        },
      ];

      const schema = generateFAQPageSchema(singleFAQ, mockUrl);

      expect(schema.mainEntity).toHaveLength(1);
      expect(schema.mainEntity[0].name).toBe('What is Astro?');
      expect(schema.mainEntity[0].acceptedAnswer.text).toBe(
        'Astro is a modern static site generator.'
      );
    });
  });

  describe('generateBreadcrumbListSchema', () => {
    it('should generate correct schema with multiple breadcrumbs', () => {
      const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: 'https://example.com' },
        { name: 'About', url: 'https://example.com/about' },
        { name: 'Team', url: 'https://example.com/about/team' },
      ];

      const schema = generateBreadcrumbListSchema(breadcrumbs);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement).toHaveLength(3);
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[0].name).toBe('Home');
      expect(schema.itemListElement[0].item).toBe('https://example.com');
      expect(schema.itemListElement[1].position).toBe(2);
      expect(schema.itemListElement[2].position).toBe(3);
    });

    it('should handle single breadcrumb', () => {
      const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', url: 'https://example.com' }];

      const schema = generateBreadcrumbListSchema(breadcrumbs);

      expect(schema.itemListElement).toHaveLength(1);
      expect(schema.itemListElement[0].position).toBe(1);
    });

    it('should handle empty breadcrumbs array', () => {
      const breadcrumbs: BreadcrumbItem[] = [];

      const schema = generateBreadcrumbListSchema(breadcrumbs);

      expect(schema.itemListElement).toHaveLength(0);
      expect(schema['@type']).toBe('BreadcrumbList');
    });

    it('should assign correct @type to all items', () => {
      const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: 'https://example.com' },
        { name: 'Blog', url: 'https://example.com/blog' },
      ];

      const schema = generateBreadcrumbListSchema(breadcrumbs);

      schema.itemListElement.forEach((item) => {
        expect(item['@type']).toBe('ListItem');
      });
    });
  });

  describe('generateOrganizationSchema', () => {
    const mockSite = new URL('https://example.com');

    it('should generate correct Organization schema structure', () => {
      const schema = generateOrganizationSchema(mockSite);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Organization');
      expect(schema['@id']).toBe('https://www.epages.com#organization');
    });

    it('should include organization details from PERSON config', () => {
      const schema = generateOrganizationSchema(mockSite);

      expect(schema.name).toBe('ePages');
      expect(schema.url).toBe('https://www.epages.com');
    });

    it('should include employee reference with correct @id', () => {
      const schema = generateOrganizationSchema(mockSite);

      expect(schema.employee['@type']).toBe('Person');
      expect(schema.employee['@id']).toBe('https://example.com/#person');
    });

    it('should include logo when present in PERSON config', () => {
      const schema = generateOrganizationSchema(mockSite);

      expect(schema.logo).toBeDefined();
      expect(schema.logo).toBe(
        'https://www.epages.com/en-us/wp-content/uploads/sites/2/2023/03/epages-logo.svg'
      );
    });

    it('should update employee @id based on site parameter', () => {
      const differentSite = new URL('https://different.com');
      const schema = generateOrganizationSchema(differentSite);

      expect(schema.employee['@id']).toBe('https://different.com/#person');
    });
  });
});
