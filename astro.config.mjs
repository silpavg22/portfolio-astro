import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image";
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [image(),tailwind(), robotsTxt()],
  site: 'https://silpavg22.github.io',
  base: '/portfolio-astro'
})
