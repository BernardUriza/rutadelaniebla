"use client";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ExternalLink, Award } from "lucide-react";
import { press, pressDateKey } from "@/lib/data";
import type { PressItem } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";
import CounterStat from "@/components/CounterStat";
import InstagramEmbed from "@/components/InstagramEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";

type TypeFilter = "Todo" | "Escrito" | "Video";
const FILTERS: { key: TypeFilter; label: string }[] = [
  { key: "Todo", label: "Todo" },
  { key: "Escrito", label: "Lo escrito" },
  { key: "Video", label: "En video" },
];

function matchesType(p: PressItem, f: TypeFilter) {
  if (f === "Todo") return true;
  if (f === "Video") return p.kind === "Video";
  return p.kind !== "Video";
}

function PressRow({ item }: { item: PressItem }) {
  const isHito = item.kind === "Oficial";
  const isVideo = item.kind === "Video";
  return (
    <article className={`nb-press-item${isHito ? " is-hito" : ""}${isVideo ? " is-video" : ""}`}>
      {isVideo && (
        <div className="nb-press-media">
          {item.outlet === "Instagram" ? (
            <InstagramEmbed url={item.url} height={520} />
          ) : (
            <YouTubeEmbed url={item.url} title={item.title} />
          )}
        </div>
      )}
      <div className="nb-press-body">
        <span className={`nb-tag${isHito ? " is-hito" : ""}`}>
          {isHito ? (
            <>
              <Award size={12} /> Hito oficial
            </>
          ) : (
            item.kind
          )}{" "}
          · {item.outlet}
        </span>
        <h3>{item.title}</h3>
        <p className="nb-press-date">{item.date}</p>
        <p className="nb-doc-abstract nb-clamp">{item.summary}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="nb-doc-dl">
          <ExternalLink size={16} /> {isVideo ? "Ver" : "Leer"} en {item.outlet}
        </a>
      </div>
    </article>
  );
}

export default function PrensaClient() {
  const [filter, setFilter] = useState<TypeFilter>("Todo");

  const founding = useMemo(() => press.find((p) => p.featured), []);

  const scale = useMemo(() => {
    const notas = press.filter((p) => p.kind !== "Video").length;
    const videos = press.filter((p) => p.kind === "Video").length;
    const medios = new Set(press.map((p) => p.outlet)).size;
    const desde = Math.min(...press.map((p) => p.year).filter(Boolean));
    return { notas, videos, medios, desde };
  }, []);

  const years = useMemo(() => {
    const rest = press
      .filter((p) => !p.featured && matchesType(p, filter))
      .sort((a, b) => pressDateKey(b) - pressDateKey(a));
    const byYear = new Map<number, PressItem[]>();
    for (const p of rest) {
      byYear.set(p.year, [...(byYear.get(p.year) ?? []), p]);
    }
    return [...byYear.entries()].sort((a, b) => b[0] - a[0]);
  }, [filter]);

  const showFounding = !!founding && matchesType(founding, filter);

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
            inauguración hasta sus festivales, jornadas y visitas. Una hemeroteca
            recopilada por la comunidad, en orden, año con año.
          </p>
        </div>
      </header>

      <section className="nb-press-scale">
        <div className="nb-wrap">
          <div className="nb-stats-grid">
            <CounterStat value={scale.notas} label="Notas y reportajes" />
            <CounterStat value={scale.videos} label="Coberturas en video" />
            <CounterStat value={scale.medios} label="Medios distintos" />
            <div>
              <div className="nb-stat-value">{scale.desde}</div>
              <div className="nb-stat-label">Cubriendo desde</div>
            </div>
          </div>
        </div>
      </section>

      <section className="nb-section">
        <div className="nb-wrap">
          {showFounding && founding && (
            <Reveal>
              <a
                href={founding.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-feature"
              >
                <span className="nb-label" style={{ color: "var(--acento)" }}>
                  Donde empezó todo · {founding.year}
                </span>
                <h2>{founding.title}</h2>
                <p className="nb-feature-meta">
                  {founding.outlet} · {founding.date}
                </p>
                <p className="nb-feature-text">{founding.summary}</p>
                <span className="nb-doc-dl">
                  <ExternalLink size={16} /> Leer en {founding.outlet}
                </span>
              </a>
            </Reveal>
          )}

          <div className="nb-press-filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`nb-btn ${filter === f.key ? "nb-btn-primary" : "nb-btn-ghost"}`}
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="nb-timeline">
            {years.map(([year, items]) => (
              <div key={year} className="nb-year-group">
                <div className="nb-year">
                  <span className="nb-year-num">{year}</span>
                  <span className="nb-year-rule" />
                </div>
                <div className="nb-press-list">
                  {items.map((p, i) => (
                    <Reveal key={p.id} delay={(i % 2) * 0.08}>
                      <PressRow item={p} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {years.length === 0 && !showFounding && (
            <p className="nb-placeholder-note">
              Aún no hay coberturas de este tipo en la hemeroteca.
            </p>
          )}

          <p className="nb-placeholder-note">
            📰 ¿Tienes una nota o reportaje sobre el Senderito que falte aquí? Compártela
            con Ruta de la Niebla A.C. y la sumamos a esta hemeroteca.
          </p>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
