import type { Metadata } from "next";
import ParticipaClient from "@/components/ParticipaClient";

export const metadata: Metadata = {
  title: "Participa",
  description:
    "Súmate a la conservación del bosque de niebla de Coatepec: voluntariado, visitas guiadas y donativos para el Cerro de las Culebras.",
  alternates: { canonical: "/participa" },
  openGraph: {
    title: "Participa — Senderito del Bosque de Niebla",
    description: "Voluntariado, visitas guiadas y donativos para el Cerro de las Culebras.",
    url: "/participa",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <ParticipaClient />;
}
