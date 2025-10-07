import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Access Houses and Condos - Premium Pre-Construction Projects in Southern Ontario",
  description: "Discover beautiful pre-construction condos, single family houses, and townhouses in Southern Ontario. Your trusted partner for premium real estate investments.",
  keywords: "pre-construction, condos, houses, townhouses, Southern Ontario, real estate, investment",
  authors: [{ name: "Access Houses and Condos" }],
  creator: "Access Houses and Condos",
  publisher: "Access Houses and Condos",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://accesshousesandcondos.com",
    title: "Access Houses and Condos - Premium Pre-Construction Projects",
    description: "Discover beautiful pre-construction condos, single family houses, and townhouses in Southern Ontario.",
    siteName: "Access Houses and Condos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Access Houses and Condos - Premium Pre-Construction Projects",
    description: "Discover beautiful pre-construction condos, single family houses, and townhouses in Southern Ontario.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
