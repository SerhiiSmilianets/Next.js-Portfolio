import type { Metadata } from "next";
import type { Viewport } from 'next'
 
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export const metadata: Metadata = {
  title: {
    template: "%s | Salesforce Commerce Cloud Developer | Web Developer",
    default: "Serhii Smilianets | Salesforce Commerce Cloud Developer | Web Developer",
  },
  description: "Serhii Smilianets Portfolio",
  keywords: [
    "Salesforce Commerce Cloud Developer",
    "Web Developer",
    "Portfolio",
    "Serhii Smilianets",
    "SFCC",
    "JavaScript",
    "React",
    "Next.js",
  ],
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Serhii Smilianets Portfolio",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="body"
      >
        <main className="main">
          <Header/>
          <div className="layout-container">
            <Sidebar/>
            <div className="layout-content">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
