import type { Metadata } from "next";
import type { Viewport } from 'next'
import { getExpYears } from '@/lib/dateHelper'
 
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

const years = getExpYears();
const description = `I’m a Salesforce Commerce Cloud Fullstack Developer with ${years}+ years of experience building scalable e-commerce solutions for global brands.`;

export const metadata: Metadata = {
  title: {
    template: "%s | Salesforce Commerce Cloud Developer | Web Developer",
    default: "Serhii Smilianets | Salesforce Commerce Cloud Developer | Web Developer",
  },
  description: description,
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  authors: [{ name: "Serhii Smilianets", url: process.env.BASE_URL || 'http://localhost:3000' }],
  creator: "Serhii Smilianets",
  applicationName: "Serhii Smilianets Portfolio",
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
    url: process.env.BASE_URL || 'http://localhost:3000',
    type: "website",
    description: description,
    images: [
      {
        url: `${process.env.BASE_URL || 'http://localhost:3000'}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Serhii Smilianets Portfolio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Serhii Smilianets | Salesforce Commerce Cloud Developer | Web Developer",
    description,
    images: `${process.env.BASE_URL || 'http://localhost:3000'}/opengraph-image.png`,
  },
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
