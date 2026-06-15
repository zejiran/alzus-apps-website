import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.CF_PAGES_URL ??
  "http://localhost:3000";

const title = "Alzus Apps | Crafted with Passion, Built for Performance";
const description =
  "At Alzus Apps, we build creative, user-centric mobile apps that blend cutting-edge technology with seamless performance. Every app is meticulously crafted to deliver innovation and simplicity, keeping users at the core of the experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alzus Apps",
  },
  description,
  keywords: ["Alzus Apps", "mobile apps", "games", "Android", "app developer"],
  openGraph: {
    title,
    description,
    siteName: "Alzus Apps",
    type: "website",
    images: ["/rounded-logo.webp"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/rounded-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
