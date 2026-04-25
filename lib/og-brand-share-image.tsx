import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_ALT =
  "Doku — your personal brain for documents";

const ICON_PATH = join(process.cwd(), "public/app-screenshots/icon.png");

export async function createBrandOgImage(): Promise<ImageResponse> {
  const logoData = await readFile(ICON_PATH, "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

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
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Doku
        </div>
      </div>
    ),
    {
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
    },
  );
}
