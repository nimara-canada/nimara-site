const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function ensureChrome() {
  // Try current puppeteer path
  let execPath = '';
  try {
    execPath = require('puppeteer').executablePath();
  } catch (_) {}

  const badSystemPath = execPath && execPath.includes('/usr/bin/chromium-browser');
  const missingFile = !execPath || (execPath && !fs.existsSync(execPath));

  if (badSystemPath || missingFile) {
    console.log('⬇️  Installing Chrome for Testing via Puppeteer…');
    const res = spawnSync('npx', ['puppeteer', 'browsers', 'install', 'chrome@stable'], { stdio: 'inherit' });
    try {
      execPath = require('puppeteer').executablePath();
    } catch (_) {}
  }

  if (!execPath || !fs.existsSync(execPath)) {
    console.warn('⚠️  Skipping react-snap: no Chrome binary found.');
    process.exit(0);
  }
  return execPath;
}

const execPath = ensureChrome();
process.env.PUPPETEER_EXECUTABLE_PATH = execPath;
process.env.PUPPETEER_CACHE_DIR = path.resolve('.cache', 'puppeteer');
process.env.PUPPETEER_PRODUCT = 'chrome'; // be explicit

// Pass through the env and run react-snap
const result = spawnSync('npx', ['react-snap'], { stdio: 'inherit', env: process.env });
process.exit(result.status ?? 0);
