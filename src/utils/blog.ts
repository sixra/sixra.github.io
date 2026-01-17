import { getCollection, type CollectionEntry } from 'astro:content';

const READING_SPEED_WPM = 200;
const MAX_RELATED_POSTS = 3;

/**
 * Get all published blog posts sorted by date (newest first)
 */
export async function getPublishedPosts() {
  try {
    return (await getCollection('blog'))
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  } catch (error) {
    console.error('Failed to fetch published posts:', error);
    return [];
  }
}

/**
 * Calculate reading time in minutes
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / READING_SPEED_WPM);
}

/**
 * Get all unique tags from published posts with counts
 * Returns tags sorted by count (most popular first)
 * Useful for tag clouds or "all tags" pages
 * @returns Array of {tag: string, count: number}
 */
export async function getAllTags() {
  try {
    const posts = await getPublishedPosts();
    const tagCounts = new Map<string, number>();

    posts.forEach((post) => {
      post.data.tags?.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    return Array.from(tagCounts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Failed to get all tags:', error);
    return [];
  }
}

/**
 * Filter posts by tag
 * @param tag - Tag to filter by (case-sensitive)
 * @returns Array of posts containing the specified tag
 */
export async function getPostsByTag(tag: string) {
  try {
    const posts = await getPublishedPosts();
    return posts.filter((post) => post.data.tags?.includes(tag));
  } catch (error) {
    console.error(`Failed to get posts by tag "${tag}":`, error);
    return [];
  }
}

/**
 * Get related posts based on shared tags
 * Uses tag matching to find similar content
 * @param currentId - ID of current post to exclude from results
 * @param tags - Tags of current post to match against
 * @returns Up to 3 posts sorted by number of matching tags (most relevant first)
 */
export async function getRelatedPosts(
  currentId: string,
  tags?: string[]
): Promise<CollectionEntry<'blog'>[]> {
  try {
    if (!tags || tags.length === 0) return [];

    const allPosts = await getPublishedPosts();

    const postsWithScore = allPosts
      .filter((post) => post.id !== currentId)
      .map((post) => {
        const matchingTags = post.data.tags?.filter((tag) => tags.includes(tag)).length || 0;
        return { post, score: matchingTags };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RELATED_POSTS);

    return postsWithScore.map((item) => item.post);
  } catch (error) {
    console.error(`Failed to get related posts for "${currentId}":`, error);
    return [];
  }
}
