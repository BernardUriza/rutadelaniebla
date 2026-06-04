import type { Metadata } from "next";
import GaleriaClient from "@/components/GaleriaClient";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotografías del Cerro de las Culebras: bosque de niebla, fauna, flora, senderos, comunidad y conservación.",
  alternates: { canonical: "/galeria" },
  openGraph: {
    title: "Galería — Ruta de la Niebla",
    description: "El Cerro de las Culebras en imágenes.",
    url: "/galeria",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <GaleriaClient />;
}
