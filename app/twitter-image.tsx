import {
  createBrandOgImage,
  OG_IMAGE_ALT,
  OG_IMAGE_SIZE,
} from "@/lib/og-brand-share-image";

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  return createBrandOgImage();
}
