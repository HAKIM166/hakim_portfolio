import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://hakim-portfolio-bice.vercel.app"),

  title: "Hakim Portfolio",

  description: "My Next.js Portfolio Website",

  openGraph: {
    title: "Hakim Portfolio",
    description: "Modern Front-End Portfolio built with Next.js and React.",
    url: "https://hakim-portfolio-bice.vercel.app",
    siteName: "Hakim Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hakim Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hakim Portfolio",
    description: "Modern Front-End Portfolio built with Next.js and React.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}