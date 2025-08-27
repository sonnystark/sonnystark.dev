// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://sonnystark.dev',
  integrations: [mdx(), sitemap(), icon()],
})
