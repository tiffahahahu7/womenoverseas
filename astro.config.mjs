import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: "zh",
      locales: ["zh", "en"],
    },

  output: "server",
  adapter: netlify()
});