import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "M/S Deepak Goel | Premier Construction Company in Kanpur, UP",
    template: "%s | M/S Deepak Goel",
  },
  description:
    "M/S Deepak Goel is Kanpur's most trusted construction company with 20+ years of experience in residential, commercial, turnkey, and renovation projects across Uttar Pradesh. Get a free consultation today.",
  keywords: [
    "construction company Kanpur",
    "builder Kanpur UP",
    "residential construction Kanpur",
    "commercial construction Kanpur",
    "turnkey projects Uttar Pradesh",
    "renovation Kanpur",
    "M/S Deepak Goel",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://msdeepakgoel.com",
    siteName: "M/S Deepak Goel",
    title: "M/S Deepak Goel | Premier Construction Company in Kanpur, UP",
    description:
      "20+ years of delivering excellence in residential, commercial, and turnkey construction across Kanpur and Uttar Pradesh.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "M/S Deepak Goel Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M/S Deepak Goel | Premier Construction Company in Kanpur",
    description: "Built on Trust. Delivered with Excellence. 20+ years. 500+ projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
