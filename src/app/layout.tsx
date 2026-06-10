import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Southern Morocco",
    default: "Southern Morocco – Your local guide to Laayoune, Dakhla & the Sahara",
  },
  description: "Authentic travel guides for southern Morocco – Laayoune, Dakhla, the Sahara desert and the Atlantic coast.",
  metadataBase: new URL("https://moufidab2026-eng.github.io/southernmorocco"),
  openGraph: {
    siteName: "Southern Morocco",
    images: ["/southernmorocco/og-default.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/southernmorocco/manifest.json" />
        <meta name="theme-color" content="#1A6FA5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
