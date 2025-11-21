import type { Metadata } from "next";
import { Sora, Inter, Inter_Tight, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Attercop | Knowledge-Backed, Agentic AI",
  description: "Knowledge-Backed, Agentic AI for PE-Backed Mid-Market Firms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} ${interTight.variable} ${sourceSans.variable} antialiased bg-pearl text-midnight font-body`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
