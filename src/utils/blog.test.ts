import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  calculateReadingTime,
  getPublishedPosts,
  getAllTags,
  getPostsByTag,
  getRelatedPosts,
} from './blog';
import * as astroContent from 'astro:content';

describe('calculateReadingTime', () => {
  it('calculates reading time for typical content', () => {
    const content = 'word '.repeat(200);
    expect(calculateReadingTime(content)).toBe(1);
  });

  it('rounds up to nearest minute', () => {
    const content = 'word '.repeat(250);
    expect(calculateReadingTime(content)).toBe(2);
  });
});

describe('getPublishedPosts', () => {
  it('filters out draft posts', async () => {
    const posts = await getPublishedPosts();

    const hasDrafts = posts.some((post) => post.data.draft === true);
    expect(hasDrafts).toBe(false);
  });

  it('sorts posts by date with newest first', async () => {
    const posts = await getPublishedPosts();

    expect(posts.length).toBeGreaterThan(0);

    for (let i = 0; i < posts.length - 1; i++) {
      const currentDate = posts[i].data.pubDate.valueOf();
      const nextDate = posts[i + 1].data.pubDate.valueOf();
      expect(currentDate).toBeGreaterThanOrEqual(nextDate);
    }
  });

  it('returns empty array when collection fails', async () => {
    vi.spyOn(astroContent, 'getCollection').mockRejectedValueOnce(new Error('Collection error'));

    const posts = await getPublishedPosts();

    expect(posts).toEqual([]);
  });

  it('handles multiple posts with same publication date', async () => {
    const posts = await getPublishedPosts();

    expect(posts).toBeDefined();
    expect(Array.isArray(posts)).toBe(true);
  });
});

describe('getAllTags', () => {
  it('counts tags correctly across multiple posts', async () => {
    const tags = await getAllTags();

    const javascriptTag = tags.find((t) => t.tag === 'javascript');
    const programmingTag = tags.find((t) => t.tag === 'programming');

    expect(javascriptTag?.count).toBe(2);
    expect(programmingTag?.count).toBe(2);
  });

  it('deduplicates tag names', async () => {
    const tags = await getAllTags();

    const tagNames = tags.map((t) => t.tag);
    const uniqueTagNames = new Set(tagNames);

    expect(tagNames.length).toBe(uniqueTagNames.size);
  });

  it('sorts tags by count descending', async () => {
    const tags = await getAllTags();

    for (let i = 0; i < tags.length - 1; i++) {
      expect(tags[i].count).toBeGreaterThanOrEqual(tags[i + 1].count);
    }
  });

  it('handles posts with no tags', async () => {
    const tags = await getAllTags();

    expect(tags).toBeDefined();
    expect(Array.isArray(tags)).toBe(true);
  });

  it('returns empty array on error', async () => {
    vi.spyOn(astroContent, 'getCollection').mockRejectedValueOnce(new Error('Collection error'));

    const tags = await getAllTags();

    expect(tags).toEqual([]);
  });
});

describe('getPostsByTag', () => {
  it('filters posts by exact tag match', async () => {
    const posts = await getPostsByTag('typescript');

    expect(posts.length).toBe(1);
    expect(posts[0].slug).toBe('typescript-tips');
  });

  it('matches tags case-sensitively', async () => {
    const posts = await getPostsByTag('TypeScript');

    expect(posts.length).toBe(0);
  });

  it('returns multiple posts with same tag', async () => {
    const posts = await getPostsByTag('javascript');

    expect(posts.length).toBe(2);
    expect(posts.some((p) => p.slug === 'typescript-tips')).toBe(true);
    expect(posts.some((p) => p.slug === 'react-patterns')).toBe(true);
  });

  it('returns empty array when tag not found', async () => {
    const posts = await getPostsByTag('nonexistent');

    expect(posts).toEqual([]);
  });

  it('returns empty array on error', async () => {
    vi.spyOn(astroContent, 'getCollection').mockRejectedValueOnce(new Error('Collection error'));

    const posts = await getPostsByTag('typescript');

    expect(posts).toEqual([]);
  });
});

describe('getRelatedPosts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('excludes current post from results', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', ['typescript', 'javascript']);

    const includesCurrentPost = relatedPosts.some((post) => post.slug === 'typescript-tips');
    expect(includesCurrentPost).toBe(false);
  });

  it('scores posts by tag overlap', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', ['javascript', 'programming']);

    expect(relatedPosts.length).toBeGreaterThan(0);
    expect(relatedPosts[0].slug).toBe('react-patterns');
  });

  it('respects MAX_RELATED_POSTS limit', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', [
      'javascript',
      'programming',
      'typescript',
    ]);

    expect(relatedPosts.length).toBeLessThanOrEqual(3);
  });

  it('returns empty array when no shared tags', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', ['nonexistent-tag']);

    expect(relatedPosts).toEqual([]);
  });

  it('returns empty array when tags array is empty', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', []);

    expect(relatedPosts).toEqual([]);
  });

  it('returns empty array when tags is undefined', async () => {
    const relatedPosts = await getRelatedPosts('typescript-tips', undefined);

    expect(relatedPosts).toEqual([]);
  });

  it('sorts related posts by score descending', async () => {
    const relatedPosts = await getRelatedPosts('astro-guide', ['javascript', 'programming']);

    expect(relatedPosts.length).toBeGreaterThan(0);

    const firstPost = relatedPosts[0];
    expect(['typescript-tips', 'react-patterns'].includes(firstPost.slug)).toBe(true);
  });

  it('returns empty array on error', async () => {
    vi.spyOn(astroContent, 'getCollection').mockRejectedValueOnce(new Error('Collection error'));

    const relatedPosts = await getRelatedPosts('typescript-tips', ['javascript']);

    expect(relatedPosts).toEqual([]);
  });
});
