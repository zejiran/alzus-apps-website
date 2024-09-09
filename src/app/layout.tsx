import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alzus Apps | Crafted with Passion, Built for Performance",
  description:
    "At Alzus Apps, we build creative, user-centric mobile apps that blend cutting-edge technology with seamless performance. Every app is meticulously crafted to deliver innovation and simplicity, keeping users at the core of the experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
