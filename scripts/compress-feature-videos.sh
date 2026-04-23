#!/usr/bin/env bash
# Re-encode Doku Method feature clips for smaller deploy size (requires ffmpeg).
# Outputs *_web.mp4 next to originals; swap names or paths after you verify quality.
set -euo pipefail
cd "$(dirname "$0")/.."
DIR="public/feature-videos"
for base in final_people_assets final_file_name final_life_tracking final_share; do
  in="${DIR}/${base}.mp4"
  out="${DIR}/${base}_web.mp4"
  if [[ ! -f "$in" ]]; then
    echo "skip (missing): $in"
    continue
  fi
  echo "encoding $base ..."
  ffmpeg -y -i "$in" \
    -c:v libx264 -crf 28 -preset medium \
    -c:a aac -b:a 96k \
    -movflags +faststart \
    "$out"
  ls -lh "$in" "$out" || true
done
echo "Done. Review *_web.mp4 quality, then replace originals if desired (same filenames keep site URLs unchanged)."
