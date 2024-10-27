import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/iris2664.com',
  plugins: [
    vue(),
  ],
  // ...その他記述
  build: {
    outDir: 'docs',
  },
})