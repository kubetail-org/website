#!/usr/bin/env bash

set -e

REPO_URL="https://github.com/kubetail-org/kubetail"
EXECUTABLE_NAME="kubetail"

# Detect OS and architecture

OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

case "$OS" in
  mingw*|cygwin*) OS="windows" ;;
  linux) OS="linux" ;;
  darwin) OS="darwin" ;;
esac

case "$ARCH" in
  x86_64) ARCH="amd64" ;;
  arm64) ARCH="arm64" ;;
  aarch64) ARCH="arm64" ;;
esac

# Check supported pairs

echo "linux_amd64 linux_arm64 darwin_amd64 darwin_arm64 windows_amd64" | grep -w -q "${OS}_${ARCH}"

if [ $? != 0 ] ; then
	echo "Unsupported OS (\"$OS\") or architecture (\"$ARCH\")."
  echo "Please report to $REPO_URL/issues"
	exit 1
fi

# Download

BINARY_NAME="kubetail-$OS-$ARCH"
BINARY_URL="$REPO_URL/releases/latest/download/$BINARY_NAME"
SHA256_URL="$BINARY_URL.sha256"

printf "⬇️  Downloading kubetail for $OS/$ARCH... "

curl -s -S -L -o "/tmp/$BINARY_NAME" "$BINARY_URL"

echo "✅ success"

# Verify checksum

printf "🔍 Verifying checksum... "

curl -s -S -L -o "/tmp/$BINARY_NAME.sha256" "$SHA256_URL"

CHECKSUM_EXPECTED=$(cat "/tmp/$BINARY_NAME.sha256")
CHECKSUM_ACTUAL=$(sha256sum "/tmp/$BINARY_NAME" | awk '{print $1}')

if [ "$CHECKSUM_EXPECTED" != "$CHECKSUM_ACTUAL" ]; then
  echo "failed! Exiting."
  exit 1
fi

echo "✅ success"

# Install

chmod +x "/tmp/$BINARY_NAME"

if [ "$OS" = "windows" ]; then
  INSTALL_DIR="$HOME/bin"
  DEST="$INSTALL_DIR/$EXECUTABLE_NAME.exe"
  printf "➡️  Moving to $DEST... "
  mv "/tmp/$BINARY_NAME" "$DEST"
  echo "✅ success"
  echo "🎉 Installation complete. Please add $INSTALL_DIR to your PATH if necessary."
else
  DEST="/usr/local/bin/$EXECUTABLE_NAME"
  printf "➡️  Moving to $DEST... "

  # Check if user is root
  if [ "$(id -u)" -ne 0 ]; then
    sudo mv "/tmp/$BINARY_NAME" "$DEST"
  else
    mv "/tmp/$BINARY_NAME" "$DEST"
    echo "✅ success"
  fi

  echo "🎉 Installation complete"
fi

echo "🚀 Have fun tailing your Kubernetes logs!"
