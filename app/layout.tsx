import type { Metadata } from "next";
import "./globals.css";
import VideoPopup from "./components/VideoPopup";

export const metadata: Metadata = {
  title: "Export Trade Mart | Global Trade Solutions",
  description: "Connecting businesses worldwide through excellence in export & import. Your trusted global trade partner.",
  icons: {
    icon: [
      { url: '/images/globe.png', type: 'image/png' },
      { url: '/images/globe.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/globe.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/globe.png',
    apple: '/images/globe.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <VideoPopup />
      </body>
    </html>
  );
}
