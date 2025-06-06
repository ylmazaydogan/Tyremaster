import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoBlock from "@/components/InfoBlock";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";

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
        <Providers>
          <main>
            <Toaster />
            <Header />
            {children}
            <InfoBlock />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
