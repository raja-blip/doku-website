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
  "doku is a private, local-first document vault. Securely encrypt, classify, and manage your sensitive records on-device with zero-cloud access.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellodoku.com"),
  title: "doku | Your Personal Brain For Documents",
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "doku",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
