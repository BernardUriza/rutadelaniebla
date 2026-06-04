"use client";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Download } from "lucide-react";
import { documents, type Doc } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

export default function BibliotecaClient() {
  const [filter, setFilter] = useState("Todos");
  const tags = useMemo(() => ["Todos", ...Array.from(new Set(documents.map((d) => d.tag)))], []);
  const visible = filter === "Todos" ? documents : documents.filter((d) => d.tag === filter);

  const handleDownload = (doc: Doc) => {
    alert(
      `"${doc.title}"\n\nDocumento real del proyecto, aún por digitalizar/compartir.\n` +
        `Cuando llegue el archivo, colócalo en public${doc.pdf} y se descargará directo.`
    );
  };

  return (
    <>
      <NieblaNav />
      <header className="nb-hero nb-hero-sm has-photo" style={{ "--hero-img": "url('/figura.jpg')" } as CSSProperties}>
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>Conocimiento abierto</span>
          <h1>Biblioteca Digital</h1>
          <p>Once años de investigación ciudadana y científica sobre el corredor. Todo libre, todo descargable.</p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`nb-btn ${filter === t ? "nb-btn-primary" : "nb-btn-ghost"}`}
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="nb-doc-grid">
            {visible.map((d, i) => (
              <Reveal key={d.id} delay={(i % 3) * 0.08}>
                <article className="nb-doc">
                  <span className="nb-tag">{d.tag} · {d.year}</span>
                  <h3>{d.title}</h3>
                  <p className="nb-doc-meta">{d.author}</p>
                  <p className="nb-doc-abstract">{d.abstract}</p>
                  {d.available ? (
                    <a href={d.pdf} target="_blank" rel="noopener noreferrer" className="nb-doc-dl">
                      <Download size={16} /> Descargar PDF
                    </a>
                  ) : (
                    <button
                      onClick={() => handleDownload(d)}
                      className="nb-doc-dl"
                      style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", opacity: 0.7 }}
                    >
                      <Download size={16} /> Próximamente
                    </button>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <p className="nb-placeholder-note">
            📄 La <strong>Presentación del Senderito</strong> ya es descargable (material
            real de Ruta de la Niebla A.C.). Los demás documentos están listados pero su
            archivo aún está por compartir.
          </p>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
