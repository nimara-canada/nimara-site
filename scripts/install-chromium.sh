#!/usr/bin/env bash
set -euo pipefail

# Update and install Chromium/Chrome + common dependencies Puppeteer needs on Ubuntu
# Run: sudo bash scripts/install-chromium.sh

apt update

# Install common libraries Puppeteer/Chromium needs
apt install -y --no-install-recommends \
  libx11-xcb1 \
  libx11-6 \
  libxss1 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libnspr4 \
  libnss3 \
  libgbm1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libxi6 \
  libxtst6 \
  fonts-liberation \
  libgtk-3-0 \
  ca-certificates \
  wget \
  apt-transport-https \
  gnupg

# Detect and install an available libasound package
ASOUND_CANDIDATES=(libasound2t64 libasound2 liboss4-salsa-asound2)
ASOUND_PKG=""
for p in "${ASOUND_CANDIDATES[@]}"; do
  if apt-cache show "$p" >/dev/null 2>&1; then
    ASOUND_PKG="$p"
    break
  fi
done

if [ -n "$ASOUND_PKG" ]; then
  apt install -y --no-install-recommends "$ASOUND_PKG"
  echo "Installed audio package: $ASOUND_PKG"
else
  echo "⚠️  No libasound candidate found (tried: ${ASOUND_CANDIDATES[*]}). Puppeteer/Chromium may require an audio library; install one manually if needed."
fi

# Try snap first (preferred on some Ubuntu setups)
echo
echo "Attempting to install Chromium via snap..."
if ! command -v snap >/dev/null 2>&1; then
  echo "snap not found — attempting to install snapd..."
  apt install -y snapd || true
fi

SNAP_OK=0
if command -v snap >/dev/null 2>&1; then
  # ensure snapd service is settled
  systemctl enable --now snapd.socket >/dev/null 2>&1 || true
  if snap list chromium >/dev/null 2>&1; then
    echo "chromium snap already installed"
    SNAP_OK=1
  else
    if snap install chromium; then
      echo "Installed chromium via snap"
      SNAP_OK=1
    else
      echo "snap install chromium failed, will try alternate install"
    fi
  fi
else
  echo "snap not available on system — will try alternate install"
fi

# If snap failed, try installing Google Chrome (deb) from Google's repo
DEB_OK=0
if [ "$SNAP_OK" -ne 1 ]; then
  echo
  echo "Attempting to install Google Chrome (deb) as fallback..."
  # import Google signing key
  wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor >/usr/share/keyrings/google-chrome.gpg || {
    echo "Failed to add Google key; aborting chrome deb install."
  }

  # add apt source
  echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >/etc/apt/sources.list.d/google-chrome.list

  apt update
  if apt install -y --no-install-recommends google-chrome-stable; then
    echo "Installed google-chrome-stable"
    DEB_OK=1
  else
    echo "Failed to install google-chrome-stable via apt"
  fi
fi

# Place a helpful message about what got installed / where chrome is
CANDIDATES=("/usr/bin/chromium" "/snap/bin/chromium" "/usr/bin/chromium-browser" "/usr/bin/google-chrome" "/usr/bin/google-chrome-stable")
FOUND=""
for p in "${CANDIDATES[@]}"; do
  if [ -x "$p" ]; then
    FOUND="$p"
    break
  fi
done

if [ -n "$FOUND" ]; then
  echo "Browser binary detected at: $FOUND"
  echo "You can set PUPPETEER_EXECUTABLE_PATH to this path if needed:"
  echo "  export PUPPETEER_EXECUTABLE_PATH=$FOUND"
else
  echo "⚠️  No Chromium/Chrome binary detected in common locations."
  echo "react-snap / Puppeteer may still work if you run this on a host with Chrome, or by setting PUPPETEER_EXECUTABLE_PATH."
fi

echo
echo "Done. Now run: npm run build"
