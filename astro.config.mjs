import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })],
  site: 'https://silpavg22.github.io',
  base: '/portfolio-astro'
});