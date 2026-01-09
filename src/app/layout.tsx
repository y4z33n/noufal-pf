import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOUFAL SALIH",
  description: "Portfolio - Films, 35mm, Designs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black" style={{ backgroundColor: '#F6F7F1', color: '#000' }}>{children}</body>
    </html>
  );
}
