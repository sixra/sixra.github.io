import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/blog';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

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
      link: `/blog/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'video']),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
          a: ['href', 'name', 'target', 'rel'],
        },
      }),
      categories: post.data.tags || [],
      author: 'comm.sr@tuta.com (Ratko Simidzija)',
    })),
    customData: '<language>en-us</language>',
  });
}
