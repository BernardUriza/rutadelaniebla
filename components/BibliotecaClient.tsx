"use client";
import { useMemo } from "react";
import type { CSSProperties } from "react";
import { Download, Clock } from "lucide-react";
import { documents, type Doc } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

function DocCard({ doc }: { doc: Doc }) {
  const ready = !!doc.available;
  return (
    <article className={`nb-doc${ready ? "" : " is-pending"}`}>
      <span className={`nb-tag${ready ? "" : " is-pending"}`}>
        {doc.tag} · {doc.year}
      </span>
      <h3>{doc.title}</h3>
      <p className="nb-doc-meta">{doc.author}</p>
      <p className="nb-doc-abstract">{doc.abstract}</p>
      {ready ? (
        <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="nb-doc-dl">
          <Download size={16} /> Descargar PDF
        </a>
      ) : (
        <span className="nb-doc-pending">
          <Clock size={14} /> En digitalización
        </span>
      )}
    </article>
  );
}

export default function BibliotecaClient() {
  const featured = useMemo(() => documents.find((d) => d.available), []);
  const ready = useMemo(
    () => documents.filter((d) => d.available && d.id !== featured?.id),
    [featured]
  );
  const pending = useMemo(() => documents.filter((d) => !d.available), []);

  return (
    <>
      <NieblaNav />
      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": "url('/figura.jpg')" } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>
            Conocimiento abierto
          </span>
          <h1>Biblioteca Digital</h1>
          <p>
            Once años de investigación ciudadana y científica sobre el corredor. La vamos
            abriendo documento por documento, conforme Ruta de la Niebla A.C. los comparte.
          </p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          {featured && (
            <Reveal>
              <a
                href={featured.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-feature"
              >
                <span className="nb-label" style={{ color: "var(--acento)" }}>
                  Descárgalo ahora · {featured.year}
                </span>
                <h2>{featured.title}</h2>
                <p className="nb-feature-meta">{featured.author}</p>
                <p className="nb-feature-text">{featured.abstract}</p>
                <span className="nb-doc-dl">
                  <Download size={16} /> Descargar PDF
                </span>
              </a>
            </Reveal>
          )}

          {ready.length > 0 && (
            <div className="nb-doc-grid" style={{ marginBottom: "1rem" }}>
              {ready.map((d, i) => (
                <Reveal key={d.id} delay={(i % 3) * 0.08}>
                  <DocCard doc={d} />
                </Reveal>
              ))}
            </div>
          )}

          {pending.length > 0 && (
            <>
              <div style={{ margin: "3.5rem 0 1.8rem" }}>
                <span className="nb-label">En digitalización</span>
                <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: "0.3rem 0 0" }}>
                  Documentos por compartir
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--musgo)", marginTop: "0.4rem" }}>
                  Ya catalogados; Ruta de la Niebla A.C. los irá subiendo uno a uno.
                </p>
              </div>
              <div className="nb-doc-grid">
                {pending.map((d, i) => (
                  <Reveal key={d.id} delay={(i % 3) * 0.08}>
                    <DocCard doc={d} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          <p className="nb-placeholder-note">
            📄 ¿Tienes investigación, guías o material sobre el bosque de niebla del Cerro de
            las Culebras? Compártelo con Ruta de la Niebla A.C. y lo sumamos a esta biblioteca.
          </p>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
