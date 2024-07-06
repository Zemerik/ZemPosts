import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async (ctx) =>
  rss({
    title: "ZemPosts - Blogs",
    description: "Post & Connect with Developers",
    site: ctx.site,
    items: await pagesGlobToRssItems(
      import.meta.glob("./blog/**/*.{md,mdx}"),
    ),
    stylesheet: "/rss/styles.xsl",
  });

