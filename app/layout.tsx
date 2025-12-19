import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Statically - A free CDN for Git repositories, npm, and open source projects",
  description:
    "A free CDN for GitHub, GitLab, Bitbucket, and npm packages. Convert your repository URLs to CDN links instantly.",
  icons: {
    icon: [
      {
        url: "/images/branding/statically-mark.png",
      },
      {
        url: "/images/branding/statically-mark.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/branding/statically-mark-lg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://api-scout.reflexapi.net/app"
          data-website-id="7a69a807-fbe1-4c25-84a1-97248db7bb45"
        ></script>
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
