import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  adapter: cloudflare(),
  server: {
    port: 2222,
    host: true
  },
});