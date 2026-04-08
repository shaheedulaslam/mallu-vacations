import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mallu Vacations | Premium Andaman Travel Experience",
  description: "Explore the heart of Andaman with Mallu Vacations. Discover untouched islands, luxury stays, and thrilling adventures.",
  keywords: "Andaman travel, Mallu Vacations, Havelock Island, Scuba Diving Andaman, luxury travel Andaman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased selection:bg-primary selection:text-white`}>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
