import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SanShin",
  description: "Minimal pieces. Premium quality. Limited drop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" data-mode="dark" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto  lg:px-8 `} //px-6
      >
        {children}
      </body>
    </html>
  );
}
