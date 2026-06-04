import type { Metadata } from "next";
import BibliotecaClient from "@/components/BibliotecaClient";

export const metadata: Metadata = {
  title: "Biblioteca Digital",
  description:
    "Documentos, guías e investigación sobre el bosque de niebla del Cerro de las Culebras, Coatepec. Conocimiento abierto y descargable.",
  alternates: { canonical: "/biblioteca" },
  openGraph: {
    title: "Biblioteca Digital — Senderito del Bosque de Niebla",
    description: "Investigación y guías sobre el bosque de niebla de Coatepec.",
    url: "/biblioteca",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <BibliotecaClient />;
}
