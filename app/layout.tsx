import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import PuertaFalsa from "@/components/PuertaFalsa";
import "./globals.css";

const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE = "https://senderitodebosquedeniebla.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Senderito del Bosque de Niebla — Cerro de las Culebras, Coatepec",
    template: "%s — Senderito del Bosque de Niebla",
  },
  description:
    "Donde la niebla todavía recuerda. Parque temático y sendero interpretativo del bosque de niebla en el ANP Cerro de las Culebras, Coatepec, Veracruz. Un proyecto de Ruta de la Niebla A.C.",
  applicationName: "Senderito del Bosque de Niebla",
  authors: [{ name: "Ruta de la Niebla A.C." }],
  keywords: [
    "Senderito del Bosque de Niebla",
    "bosque de niebla",
    "Cerro de las Culebras",
    "Coatepec",
    "Veracruz",
    "bosque mesófilo de montaña",
    "conservación",
    "senderismo interpretativo",
    "Ruta de la Niebla A.C.",
  ],
  openGraph: {
    type: "website",
    siteName: "Senderito del Bosque de Niebla",
    locale: "es_MX",
    url: SITE,
    title: "Senderito del Bosque de Niebla — Cerro de las Culebras, Coatepec",
    description:
      "Donde la niebla todavía recuerda. Parque temático y sendero interpretativo del bosque de niebla en el Cerro de las Culebras, Coatepec.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Senderito del Bosque de Niebla — Cerro de las Culebras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senderito del Bosque de Niebla — Cerro de las Culebras, Coatepec",
    description:
      "Donde la niebla todavía recuerda. Sendero interpretativo del bosque de niebla en Coatepec.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="niebla">
        {children}
        <PuertaFalsa />
        {CF_BEACON_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
