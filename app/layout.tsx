import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'], // wajib isi
  preload: true,      // boleh default
})

export const metadata: Metadata = {
  title: "Sena Ramadhan Portfolio",
  description: "Portfolio of Sena Ramadhan, a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
