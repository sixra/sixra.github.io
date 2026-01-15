import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/blog';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Ratko Simidzija',
    description: 'forever curious',
    site: context.site!,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: '<language>en-us</language>',
  });
}
