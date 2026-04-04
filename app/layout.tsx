import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "The Good Cake Express | 100% Eggless Bakery Chandigarh",
  description: "Chandigarh's favourite women-owned, 100% eggless bakery. Custom cakes, bento cakes, and snacks delivered in 15 minutes to PU Campus.",
  keywords: "eggless cake, Chandigarh bakery, custom cakes, PU Chandigarh, The Good Cake Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${dancing.variable} font-sans bg-bg text-text antialiased flex flex-col min-h-screen`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
