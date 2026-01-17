export type CollectionEntry<T extends string = string> = {
  id: string;
  slug: string;
  body: string;
  collection: T;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    draft?: boolean;
    tags?: string[];
    image?: string;
    [key: string]: unknown;
  };
};

const mockBlogPosts: CollectionEntry<'blog'>[] = [
  {
    id: 'typescript-tips',
    slug: 'typescript-tips',
    body: 'Content about TypeScript',
    collection: 'blog',
    data: {
      title: 'TypeScript Tips',
      description: 'Useful TypeScript tips',
      pubDate: new Date('2026-01-15'),
      draft: false,
      tags: ['typescript', 'javascript', 'programming'],
    },
  },
  {
    id: 'react-patterns',
    slug: 'react-patterns',
    body: 'Content about React',
    collection: 'blog',
    data: {
      title: 'React Patterns',
      description: 'Common React patterns',
      pubDate: new Date('2026-01-10'),
      draft: false,
      tags: ['react', 'javascript', 'programming'],
    },
  },
  {
    id: 'astro-guide',
    slug: 'astro-guide',
    body: 'Content about Astro',
    collection: 'blog',
    data: {
      title: 'Astro Guide',
      description: 'Getting started with Astro',
      pubDate: new Date('2026-01-05'),
      draft: false,
      tags: ['astro', 'web'],
    },
  },
  {
    id: 'draft-post',
    slug: 'draft-post',
    body: 'Draft content',
    collection: 'blog',
    data: {
      title: 'Draft Post',
      description: 'This is a draft',
      pubDate: new Date('2026-01-20'),
      draft: true,
      tags: ['draft'],
    },
  },
  {
    id: 'no-tags-post',
    slug: 'no-tags-post',
    body: 'Content without tags',
    collection: 'blog',
    data: {
      title: 'Post Without Tags',
      description: 'No tags here',
      pubDate: new Date('2026-01-08'),
      draft: false,
    },
  },
];

export const getCollection = (collection: string): Promise<CollectionEntry[]> => {
  if (collection === 'blog') {
    return Promise.resolve(mockBlogPosts);
  }
  return Promise.resolve([]);
};
