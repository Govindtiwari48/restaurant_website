import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tandoorigrillsandpoint.com"),
  title: {
    default: "Tandoori Grill & Bar - Sandpoint",
    template: "%s | Tandoori Grill & Bar - Sandpoint",
  },
  description:
    "Experience authentic Indian cuisine reimagined. Sophisticated dining, handcrafted cocktails, and warm hospitality in Sandpoint.",
  openGraph: {
    title: "Tandoori Grill & Bar - Sandpoint",
    description:
      "Experience authentic Indian cuisine reimagined. Sophisticated dining, handcrafted cocktails, and warm hospitality in Sandpoint.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
};

export const viewport = {
  themeColor: "#121314",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans min-h-dvh bg-charcoal text-cream">{children}</body>
    </html>
  );
}
