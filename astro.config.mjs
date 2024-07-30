import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://enzodp123.github.io',
  base: 'Landing-V1',
  integrations: [tailwind()]
});