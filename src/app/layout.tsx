import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Sidebar } from "@/ui/sidebar/sidebar";
import { Header } from "@/ui/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serhii Smilianets | Portfolio",
  description: "Serhii Smilianets portfolio website",
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
      >
        <main className="main">
          <Header/>
          <div className="container">
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
