import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { inter } from "./fonts";

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
        className={`${inter.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
