import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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

const SITE = "https://rutadelaniebla.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Ruta de la Niebla — Bosque de Niebla y Cerro de las Culebras",
    template: "%s — Ruta de la Niebla",
  },
  description:
    "Donde la niebla todavía recuerda. Iniciativa ciudadana de conservación del bosque de niebla de Coatepec y el Cerro de las Culebras: senderismo interpretativo, biblioteca digital y memoria comunitaria.",
  applicationName: "Ruta de la Niebla",
  authors: [{ name: "Ruta de la Niebla A.C." }],
  keywords: [
    "bosque de niebla",
    "Cerro de las Culebras",
    "Coatepec",
    "Veracruz",
    "bosque mesófilo de montaña",
    "conservación",
    "senderismo",
    "Ruta de la Niebla",
  ],
  openGraph: {
    type: "website",
    siteName: "Ruta de la Niebla",
    locale: "es_MX",
    url: SITE,
    title: "Ruta de la Niebla — Bosque de Niebla y Cerro de las Culebras",
    description:
      "Donde la niebla todavía recuerda. Conservación del bosque de niebla de Coatepec y el Cerro de las Culebras.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ruta de la Niebla — Cerro de las Culebras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruta de la Niebla — Bosque de Niebla y Cerro de las Culebras",
    description:
      "Donde la niebla todavía recuerda. Conservación del bosque de niebla de Coatepec.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="niebla">{children}</body>
    </html>
  );
}
