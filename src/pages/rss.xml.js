import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Développeur Web Blog | RICCA Jordan | oODjoOo',
    description: 'Welcome to my blog, where I share my passion for frontend development, web design, and the latest technology trends.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr</language>`,
  });
}