"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { galleryCategories, galleryItems } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";

export default function GaleriaClient() {
  const [cat, setCat] = useState("todas");
  const visible = cat === "todas" ? galleryItems : galleryItems.filter((g) => g.category === cat);

  return (
    <>
      <NieblaNav />
      <header className="nb-hero nb-hero-sm has-photo" style={{ "--hero-img": "url('/galeria/bosque-1.jpg')" } as CSSProperties}>
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>El bosque, en imágenes</span>
          <h1>Galería Fotográfica</h1>
          <p>Fotografías del Cerro de las Culebras tomadas por la comunidad. Cada una es un testimonio de lo que todavía está aquí.</p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <button
              onClick={() => setCat("todas")}
              className={`nb-btn ${cat === "todas" ? "nb-btn-primary" : "nb-btn-ghost"}`}
              style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
            >
              Todas
            </button>
            {galleryCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`nb-btn ${cat === c.id ? "nb-btn-primary" : "nb-btn-ghost"}`}
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="nb-gallery-grid">
            {visible.map((g, i) => (
              <div
                key={g.id}
                className={`nb-tile ${g.cls} ${i % 7 === 0 ? "tall" : ""}`}
                style={{ backgroundImage: `url('${g.src}')` }}
              >
                <span>{g.caption}</span>
              </div>
            ))}
          </div>

          <p className="nb-placeholder-note">
            📷 Fotografías del Cerro de las Culebras del propio colectivo Ruta de la
            Niebla A.C. Créditos completos en <code>/CREDITS.md</code>.
          </p>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
