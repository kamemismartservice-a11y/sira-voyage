import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omrahajjabidjan.com"),
  title: "Sira Voyage — Omra, Hajj et voyages depuis Abidjan",
  description:
    "Sira Voyage, votre partenaire de confiance pour la Omra, le Hajj, la billetterie et vos voyages depuis Abidjan.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sira Voyages",
    title: "Sira Voyage — Omra, Hajj et voyages depuis Abidjan",
    description: "Votre partenaire de confiance pour la Omra, le Hajj, la billetterie et vos voyages depuis Abidjan.",
    images: [{ url: "/images/hero-mecque.png", width: 1920, height: 1080, alt: "Sira Voyages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sira Voyage — Omra, Hajj et voyages depuis Abidjan",
    description: "Votre partenaire de confiance pour la Omra, le Hajj, la billetterie et vos voyages depuis Abidjan.",
    images: ["/images/hero-mecque.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}