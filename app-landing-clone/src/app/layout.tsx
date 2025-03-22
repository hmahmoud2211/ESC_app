import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from '@/context/AnimationContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESC Fit Club - Modest Sports Clothing",
  description: "ESC Fit Club - Reset Run Rule! Modest sportswear designed for confidence, comfort, and style",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <AnimationProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Newsletter />
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
