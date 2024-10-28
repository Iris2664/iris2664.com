import { defineConfig } from 'astro/config';
import compress from "astro-compress";

export default defineConfig({
  integrations: [compress()],
  vite: {
    build: {
      minify: false,
    },
  },
  site: 'https://iris2664.github.io',
})