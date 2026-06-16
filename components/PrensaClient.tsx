"use client";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ExternalLink } from "lucide-react";
import { press } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function PrensaClient() {
  const [filter, setFilter] = useState("Todos");
  const reel = useMemo(() => press.find((p) => p.kind === "Video"), []);
  const notas = useMemo(() => press.filter((p) => p.kind !== "Video"), []);
  const outlets = useMemo(
    () => ["Todos", ...Array.from(new Set(notas.map((p) => p.outlet)))],
    [notas]
  );
  const visible = filter === "Todos" ? notas : notas.filter((p) => p.outlet === filter);

  return (
    <>
      <NieblaNav />
      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": "url('/figura.jpg')" } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>
            En los medios
          </span>
          <h1>El Senderito en la prensa</h1>
          <p>
            Lo que han escrito sobre el Senderito del Bosque de Niebla: desde su
            inauguración hasta sus festivales, jornadas y visitas. Cobertura recopilada
            por la comunidad.
          </p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {outlets.map((o) => (
              <button
                key={o}
                onClick={() => setFilter(o)}
                className={`nb-btn ${filter === o ? "nb-btn-primary" : "nb-btn-ghost"}`}
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
              >
                {o}
              </button>
            ))}
          </div>

          <div className="nb-doc-grid">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <article className="nb-doc">
                  <span className="nb-tag">{p.kind} · {p.date}</span>
                  <h3>{p.title}</h3>
                  <p className="nb-doc-meta">{p.outlet}</p>
                  <p className="nb-doc-abstract">{p.summary}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="nb-doc-dl">
                    <ExternalLink size={16} /> Leer en {p.outlet}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="nb-placeholder-note">
            📰 ¿Tienes una nota o reportaje sobre el Senderito que falte aquí? Compártela
            con Ruta de la Niebla A.C. y la sumamos a esta hemeroteca.
          </p>
        </div>
      </section>

      {reel && (
        <section className="nb-section" style={{ background: "var(--hueso)" }}>
          <div className="nb-wrap" style={{ textAlign: "center" }}>
            <span className="nb-label">Míralo en video</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", margin: "0.4rem 0 2.2rem" }}>
              El Senderito en Instagram
            </h2>
            <Reveal>
              <InstagramEmbed url={reel.url} />
            </Reveal>
            <p style={{ marginTop: "1.6rem" }}>
              <a href={reel.url} target="_blank" rel="noopener noreferrer" className="nb-doc-dl">
                <ExternalLink size={16} /> Ver en Instagram
              </a>
            </p>
          </div>
        </section>
      )}

      <NieblaFooter />
    </>
  );
}
