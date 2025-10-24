const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');

const routes = ['/', '/company', '/consultants', '/privacy', '/accessibility', '/trust'];
const publicDir = resolve('public');
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

(async () => {
  const smStream = new SitemapStream({ hostname: 'https://nimara.ca' });
  const out = createWriteStream(resolve(publicDir, 'sitemap.xml'));
  smStream.pipe(out);
  routes.forEach(url => smStream.write({ url, changefreq: 'weekly', priority: url === '/' ? 1.0 : 0.7 }));
  smStream.end();
  await streamToPromise(smStream);
  console.log('✅ sitemap.xml generated in public/');
})();
