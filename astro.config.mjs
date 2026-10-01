import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joseph-capener.github.io',
  // Dev server is reachable from the LAN (viewed from another machine's browser).
  server: { host: true, port: 4321 },
  vite: { server: { allowedHosts: true } },
});
