import React from "react";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",   
});

export const metadata = {
  title: "Waddai - Wholesale & Distribution",
  description: "Your business description here",
  icons: {
    icon: "/favicon.ico.ico",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body className={`${josefin.variable} antialiased`} style={{ fontFamily: 'var(--font-josefin)' }}>
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}