// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'

import icon from 'astro-icon'

export default defineConfig({
  site: 'https://sonnystark.dev',
  integrations: [
    mdx({
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
    }),
    sitemap(),
    icon(),
  ],
})
