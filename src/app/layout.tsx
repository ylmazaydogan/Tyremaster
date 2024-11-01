import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import InfoBlock from "@/components/InfoBlock";




export const metadata: Metadata = {
  title: "TyreMaster",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="w-full mx-auto px-8 py-3">
        <Header/>
        
        {children}
        <InfoBlock/>
        <Footer/>
        </main>
      </body>
    </html>
  );
}
