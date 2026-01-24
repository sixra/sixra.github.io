/**
 * FAQ Configuration
 * Single source of truth for FAQ identifiers across all locales
 */

export const faqIds = [
  'react-experience',
  'typescript',
  'testing',
  'remote-work',
  'availability',
  'project-examples',
  'location',
  'languages',
  'learning',
] as const;

export type FaqId = (typeof faqIds)[number];
