#!/bin/zsh

# Make Better. - macOS local HTTP server

set -e

PORT=8080
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
URL="http://localhost:${PORT}/"

cd "$ROOT_DIR"

echo ""
echo "  ==============================================="
echo "   MAKE BETTER. local server"
echo "  ==============================================="
echo "   Serving : $ROOT_DIR"
echo "   URL     : $URL"
echo "   Stop    : Ctrl+C"
echo ""

open "$URL"

exec /usr/bin/python3 -m http.server "$PORT" --bind 127.0.0.1
