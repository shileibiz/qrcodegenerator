// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';

function sourceLastmod(url) {
  const pathname = new URL(url).pathname;
  const route = pathname === '/' ? 'index' : pathname.replace(/^\//, '').replace(/\/$/, '');
  const source = `src/pages/${route}.astro`;
  if (!existsSync(source)) return undefined;

  try {
    const dirty = execFileSync('git', ['status', '--porcelain', '--', source], { encoding: 'utf8' }).trim();
    if (!dirty) {
      const committed = execFileSync('git', ['log', '-1', '--format=%cI', '--', source], { encoding: 'utf8' }).trim();
      if (committed) return committed;
    }
  } catch {
    // Source modification time is available even when the build has no Git metadata.
  }
  return statSync(source).mtime.toISOString();
}

// https://astro.build/config
export default defineConfig({
  site: 'https://qrcodegenerator.pages.dev',
  output: 'static',
  integrations: [tailwind(), sitemap({
    filter: (url) => new URL(url).pathname !== '/robots.txt',
    serialize: (item) => ({ ...item, lastmod: sourceLastmod(item.url) }),
  })],
});
