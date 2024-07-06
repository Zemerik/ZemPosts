import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import unocss from "unocss/astro";
import react from "@astrojs/react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/util/readingTime.mjs";
import theme from './public/syntax-theme.json';

export default defineConfig({
  site: "https://zemposts.vercel.app",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: { theme }
  },
  integrations: [unocss({ injectReset: true }), mdx(), sitemap(), prefetch(), react()]
});
