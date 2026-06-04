import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { stats, documents, galleryItems } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";
import CounterStat from "@/components/CounterStat";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="nb-label">{children}</span>
);

export default function Home() {
  const featuredDocs = documents.slice(0, 3);
  const homeGallery = [
    galleryItems[0], galleryItems[2], galleryItems[4], galleryItems[6],
    galleryItems[8], galleryItems[10], galleryItems[1], galleryItems[5],
  ];

  return (
    <>
      <NieblaNav />

      {/* ── HERO ── */}
      <header className="nb-hero nb-hero-has-video">
        <video
          className="nb-hero-video"
          src="/coatepec-atardecer.mp4"
          poster="/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="nb-hero-overlay" />
        <div className="nb-hero-inner">
          <h1>Donde la niebla todavía recuerda</h1>
          <p>Un corredor vivo de biodiversidad, historia y memoria en el corazón de Coatepec.</p>
          <div className="nb-actions">
            <Link href="/cerro-de-las-culebras" className="nb-btn nb-btn-light">
              Explorar el bosque
            </Link>
            <Link href="/biblioteca" className="nb-btn nb-btn-ghost" style={{ color: "#f4f1ea", borderColor: "rgba(244,241,234,0.5)" }}>
              Biblioteca digital
            </Link>
          </div>
        </div>
        <div className="nb-scroll-cue">↓</div>
      </header>

      {/* ── SECCIÓN 2: ¿Por qué importa? ── */}
      <section className="nb-section">
        <div className="nb-wrap">
          <div className="nb-two-col">
            <Reveal>
              <SectionLabel>¿Por qué este lugar importa?</SectionLabel>
              <h2>Hay bosques que se ven y bosques que se respiran.</h2>
              <p>
                A más de mil trescientos metros, donde el aire del Golfo choca con
                la sierra y se vuelve agua sin necesidad de lluvia, vive uno de los
                ecosistemas más raros del planeta. Los árboles aquí <em>peinan la
                niebla</em> y la convierten en gotas que alimentan los manantiales
                de Coatepec.
              </p>
              <p>
                El bosque mesófilo de montaña cubre menos del <strong>1% del
                territorio nacional</strong>, pero alberga cerca del <strong>10%
                de las especies de plantas</strong> de México. Es el ecosistema
                más biodiverso del país. Y el más amenazado: hemos perdido más de
                la mitad.
              </p>
              <p className="nb-quote-inline">
                El Cerro de las Culebras no es un parque. Es un sobreviviente.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="nb-figure" style={{ backgroundImage: "url('/figura.jpg')" }} data-caption="El cerro y sus epífitas, con Xalapa al fondo · Ruta de la Niebla A.C." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: Cifras ── */}
      <section className="nb-section nb-stats">
        <div className="nb-wrap">
          <div className="nb-stats-grid">
            {stats.map((s) => (
              <CounterStat key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: Galería ── */}
      <section className="nb-section">
        <div className="nb-wrap">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionLabel>El bosque, en imágenes</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginTop: "0.6rem" }}>
                Una década de testimonios
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="nb-gallery-grid">
              {homeGallery.map((g, i) => (
                <div
                  key={g.id}
                  className={`nb-tile ${g.cls} ${i % 5 === 0 ? "tall" : ""}`}
                  style={{ backgroundImage: `url('${g.src}')` }}
                >
                  <span>{g.caption}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/galeria" className="nb-btn nb-btn-ghost">Entrar a la galería</Link>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: Biblioteca ── */}
      <section className="nb-section" style={{ background: "rgba(215,219,213,0.35)" }}>
        <div className="nb-wrap">
          <Reveal>
            <SectionLabel>Conocimiento abierto</SectionLabel>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginTop: "0.6rem", maxWidth: "32rem" }}>
              Conservar es también documentar
            </h2>
          </Reveal>
          <div className="nb-doc-grid" style={{ marginTop: "3rem" }}>
            {featuredDocs.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.1}>
                <article className="nb-doc">
                  <span className="nb-tag">{d.tag} · {d.year}</span>
                  <h3>{d.title}</h3>
                  <p className="nb-doc-meta">{d.author}</p>
                  <p className="nb-doc-abstract">{d.abstract}</p>
                  <Link href="/biblioteca" className="nb-doc-dl">
                    <Download size={16} /> Ver en la biblioteca
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/biblioteca" style={{ color: "var(--bosque)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              Explorar la biblioteca completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: CTA ── */}
      <section className="nb-cta">
        <h2>El bosque necesita testigos</h2>
        <p>
          No te pedimos que lo salves solo. Te pedimos que lo mires, que lo
          camines, que cuentes lo que viste. Un ecosistema que la gente conoce es
          un ecosistema que la gente defiende.
        </p>
        <div className="nb-actions">
          <Link href="/participa" className="nb-btn nb-btn-acento">Conviértete en testigo</Link>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
