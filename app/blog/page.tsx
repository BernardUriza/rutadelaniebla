import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog del Senderito",
  description:
    "Historias del Senderito del Bosque de Niebla, Coatepec: la voz propia del colectivo Ruta de la Niebla sobre reforestación, comunidad y el Cerro de las Culebras.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog del Senderito — Bosque de Niebla",
    description: "Historias propias del Senderito del Bosque de Niebla, Coatepec.",
    url: "/blog",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <NieblaNav />
      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": "url('/galeria/comunidad-2.jpg')" } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>Nuestra voz</span>
          <h1>Blog del Senderito</h1>
          <p>Historias del bosque contadas por quienes lo cuidan: reforestación, comunidad y la vida del Cerro de las Culebras.</p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          <div className="nb-doc-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <article className="nb-doc">
                  <span className="nb-tag">{p.tag} · {p.date}</span>
                  <h3>{p.title}</h3>
                  <p className="nb-doc-meta">{p.author}</p>
                  <p className="nb-doc-abstract">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="nb-doc-dl">
                    Leer la historia <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
