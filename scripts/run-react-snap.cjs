const { spawnSync } = require("child_process");
const { existsSync } = require("fs");

const candidates = [
  process.env.CHROME_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
  "/usr/bin/chrome",
  "/usr/bin/chromium",
  "/snap/bin/chromium",
].filter(Boolean);

const found = candidates.find(p => existsSync(p));

if (!found) {
  console.warn(
    "⚠️  Skipping react-snap: no Chrome/Chromium binary found in common locations.\n" +
    "If you want full static snapshotting, install Chrome/Chromium and required libs, or set PUPPETEER_EXECUTABLE_PATH.\n" +
    "See: https://github.com/GoogleChrome/puppeteer/blob/main/docs/troubleshooting.md"
  );
  process.exit(0);
}

process.env.PUPPETEER_EXECUTABLE_PATH = found;
console.log("Using Chrome executable:", found);

const result = spawnSync("npx", ["react-snap"], { stdio: "inherit", env: process.env });
if (result.error) {
  console.error("react-snap failed to start:", result.error);
  process.exit(result.status || 1);
}
process.exit(result.status || 0);
