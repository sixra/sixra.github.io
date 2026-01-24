/**
 * Social Media Links Configuration
 * Single source of truth for all social media links across the site
 */

export const socialLinks = {
  github: {
    url: 'https://github.com/sixra',
    icon: 'tabler:brand-github',
    label: 'GitHub',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/ratkosimidzija',
    icon: 'tabler:brand-linkedin',
    label: 'LinkedIn',
  },
  twitter: {
    url: 'https://x.com/sixra01',
    icon: 'tabler:brand-x',
    label: 'X (Twitter)',
  },
  email: {
    url: 'mailto:comm.sr@tuta.com',
    icon: 'tabler:mail',
    label: 'Email',
  },
} as const;

export type SocialLink = keyof typeof socialLinks;
