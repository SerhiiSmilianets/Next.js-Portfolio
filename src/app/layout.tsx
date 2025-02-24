import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/root_layout.css";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Row } from "@/components/Row";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serhii Smilianets",
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
          <Row>
            <Sidebar/>
            {children}
          </Row>
        </main>
      </body>
    </html>
  );
}
