#!/usr/bin/env bash
set -euo pipefail

# Run from project root: bash scripts/setup-and-build.sh
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
INSTALL="$ROOT_DIR/scripts/install-chromium.sh"
RUNNER="$ROOT_DIR/scripts/run-react-snap.cjs"

echo "Making helper scripts executable..."
[ -f "$INSTALL" ] && chmod +x "$INSTALL" || echo "No install-chromium.sh found"
[ -f "$RUNNER" ] && chmod +x "$RUNNER" || echo "No run-react-snap.cjs found (that's fine)"

echo
echo "Running Chromium installer script (requires sudo)..."
if [ -f "$INSTALL" ]; then
  sudo bash "$INSTALL"
else
  echo "Installer script not found at $INSTALL — skipping installation step."
fi

# Detect common Chromium/Chrome binary locations
CHROMEBIN=""
if [ -x "/usr/bin/chromium" ]; then
  CHROMEBIN="/usr/bin/chromium"
elif [ -x "/usr/bin/chromium-browser" ]; then
  CHROMEBIN="/usr/bin/chromium-browser"
elif [ -x "/usr/bin/google-chrome-stable" ]; then
  CHROMEBIN="/usr/bin/google-chrome-stable"
elif [ -x "/usr/bin/google-chrome" ]; then
  CHROMEBIN="/usr/bin/google-chrome"
fi

if [ -n "$CHROMEBIN" ]; then
  export PUPPETEER_EXECUTABLE_PATH="$CHROMEBIN"
  echo "Set PUPPETEER_EXECUTABLE_PATH to $CHROMEBIN"
else
  echo "No system Chrome/Chromium binary detected. react-snap may be skipped (that's okay if you prefer skipping)."
fi

echo
echo "Running production build (this will run react-snap if Chromium is available)..."
npm run build

echo
echo "If build succeeded, you can preview the site with:"
echo "  npm run preview"
