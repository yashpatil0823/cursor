import type { Metadata } from "next";
import "./globals.css";
import VideoPopup from "./components/VideoPopup";

export const metadata: Metadata = {
  title: "Export Trade Mart | Global Trade Solutions",
  description: "Connecting businesses worldwide through excellence in export & import. Your trusted global trade partner.",
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
