import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/blog';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  if (!context.site) {
    throw new Error('Site URL is not configured in astro.config.mjs');
  }

  return rss({
    title: 'Ratko Simidzija',
    description: 'Writing about JavaScript, React, TypeScript, and web development',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
