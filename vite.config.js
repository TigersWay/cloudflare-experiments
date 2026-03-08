import { svelte } from '@sveltejs/vite-plugin-svelte';
import { cloudflare } from '@cloudflare/vite-plugin';

import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), cloudflare()],

  publicDir: 'static',
  build: { outDir: 'public', emptyOutDir: true }
});
