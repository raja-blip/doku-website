import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Doku is a private, local-first document vault. Securely encrypt, classify, and manage your sensitive records on-device with zero-cloud access.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellodoku.com"),
  title: "Doku | Your Private On-Device Document Vault",
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "doku",
    description: siteDescription,
    images: [
      {
        url: "https://www.hellodoku.com/og-preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
    images: ["https://www.hellodoku.com/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta property="og:type" content="website" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
