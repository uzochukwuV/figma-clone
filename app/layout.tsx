import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Room } from "./Room";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextjs Figma Clone",
  description: "Created with Love",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-grey-200`}
      >
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
