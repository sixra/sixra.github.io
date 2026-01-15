import { getCollection } from 'astro:content';

/**
 * Get all published blog posts sorted by date (newest first)
 */
export async function getPublishedPosts() {
  return (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
