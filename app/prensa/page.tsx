import type { Metadata } from "next";
import PrensaClient from "@/components/PrensaClient";

export const metadata: Metadata = {
  title: "El Senderito en la prensa",
  description:
    "Hemeroteca del Senderito del Bosque de Niebla, Coatepec: notas, reportajes y cobertura oficial sobre el parque temático del Cerro de las Culebras.",
  alternates: { canonical: "/prensa" },
  openGraph: {
    title: "El Senderito en la prensa — Senderito del Bosque de Niebla",
    description: "Cobertura en medios sobre el bosque de niebla de Coatepec.",
    url: "/prensa",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <PrensaClient />;
}
