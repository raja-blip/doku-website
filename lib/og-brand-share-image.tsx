import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/**
 * Poppins Bold (700) — closest “vibes” to the custom icon per brand notes; shipped as TTF
 * because `next/og` / Satori does not accept WOFF2. Alternatives: Nunito ExtraBold (rounder),
 * Circular Std Bold (commercial, not bundled).
 */
const WORDMARK_FONT_FAMILY = "Poppins";
const POPPINS_BOLD_TTF = join(
  process.cwd(),
  "public/fonts/Poppins-Bold.ttf",
);

export const OG_IMAGE_ALT =
  "doku — your personal brain for documents";

const ICON_PATH = join(process.cwd(), "public/app-screenshots/icon.png");

async function loadWordmarkFont(): Promise<ArrayBuffer | null> {
  try {
    const buf = await readFile(POPPINS_BOLD_TTF);
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  } catch {
    return null;
  }
}

export async function createBrandOgImage(): Promise<ImageResponse> {
  const logoData = await readFile(ICON_PATH, "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  const wordmarkFont = await loadWordmarkFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          gap: 72,
          padding: 80,
        }}
      >
        <img
          alt=""
          src={logoSrc}
          width={300}
          height={300}
          style={{ objectFit: "contain", flexShrink: 0 }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            fontSize: 200,
            fontWeight: 700,
            fontFamily: wordmarkFont
              ? `${WORDMARK_FONT_FAMILY}, system-ui, sans-serif`
              : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          doku
        </div>
      </div>
    ),
    {
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      ...(wordmarkFont
        ? {
            fonts: [
              {
                name: WORDMARK_FONT_FAMILY,
                data: wordmarkFont,
                style: "normal" as const,
                weight: 700,
              },
            ],
          }
        : {}),
    },
  );
}
