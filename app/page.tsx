import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { stats, documents, galleryItems, events, recurringVisits, contacto } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";
import CounterStat from "@/components/CounterStat";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="nb-label">{children}</span>
);

export default function Home() {
  const featuredDocs = documents.slice(0, 3);
  const today = new Date().toISOString().slice(0, 10);
  const upcomingEvents = [...events].sort((a, b) => a.isoDate.localeCompare(b.isoDate));
  const nextEvent =
    upcomingEvents.find((e) => e.isoDate >= today) ?? upcomingEvents[upcomingEvents.length - 1];
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

      {/* ── PRÓXIMA ACTIVIDAD ── */}
      {nextEvent && (
        <section className="nb-section" style={{ background: "rgba(90,110,79,0.08)" }}>
          <div className="nb-wrap">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
                <SectionLabel>Próxima actividad</SectionLabel>
                <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginTop: "0.6rem" }}>
                  {nextEvent.title}
                </h2>
                {nextEvent.occasion && (
                  <p style={{ color: "var(--bosque)", fontWeight: 600, marginTop: "0.5rem" }}>
                    {nextEvent.occasion}
                  </p>
                )}
              </div>
            </Reveal>

            <div className="nb-two-col">
              <Reveal>
                <a
                  href={nextEvent.flyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver el cartel completo"
                  className="nb-flyer-link"
                >
                  <img
                    src={nextEvent.flyer}
                    alt={`Cartel · ${nextEvent.title}`}
                    className="nb-flyer"
                  />
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--bosque)" }}>
                  📅 {nextEvent.date}
                </p>
                <p style={{ color: "var(--corteza)", marginTop: "0.4rem" }}>
                  📍 {nextEvent.place}
                </p>

                {nextEvent.schedule && nextEvent.schedule.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "1.8rem 0", display: "grid", gap: "1rem" }}>
                    {nextEvent.schedule.map((s) => (
                      <li key={s.time} style={{ display: "flex", gap: "1.1rem", alignItems: "baseline" }}>
                        <span style={{ fontWeight: 700, color: "var(--bosque)", minWidth: "6.5rem", whiteSpace: "nowrap" }}>
                          {s.time}
                        </span>
                        <span style={{ color: "var(--corteza)" }}>{s.activity}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {nextEvent.topics && nextEvent.topics.length > 0 && (
                  <>
                    <p style={{ fontWeight: 700, color: "var(--bosque)", margin: "1.8rem 0 0.8rem" }}>
                      Temas que abordaremos
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.4rem", display: "grid", gap: "0.7rem" }}>
                      {nextEvent.topics.map((t) => (
                        <li key={t} style={{ display: "flex", gap: "0.8rem", alignItems: "baseline", color: "var(--corteza)" }}>
                          <span style={{ color: "var(--acento)", fontWeight: 700 }}>·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <p style={{ fontStyle: "italic", color: "var(--corteza)", marginTop: "1.4rem" }}>{nextEvent.note}</p>

                <a
                  href={`${contacto.whatsapp}&text=${encodeURIComponent(
                    `Hola, quiero asistir a ${nextEvent.title} (${nextEvent.date}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn nb-btn-acento"
                  style={{ marginTop: "1.8rem" }}
                >
                  Quiero asistir
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── VISITAS GUIADAS ── */}
      <section className="nb-section" style={{ background: "var(--bosque)", color: "#f4f1ea" }}>
        <div className="nb-wrap">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: "44rem", margin: "0 auto" }}>
              <SectionLabel>{recurringVisits.title}</SectionLabel>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: "0.6rem", color: "#f4f1ea" }}>
                {recurringVisits.days}
              </h2>
              <p style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "0.8rem", color: "#f4f1ea" }}>
                🕗 {recurringVisits.time}
              </p>
              <p style={{ marginTop: "0.6rem", color: "rgba(244,241,234,0.82)" }}>
                📍 {recurringVisits.place}
              </p>
              <div className="nb-actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
                <a
                  href={`${contacto.whatsapp}&text=${encodeURIComponent(
                    "Hola, me gustaría visitar el Senderito en una de las visitas guiadas de martes o jueves."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn nb-btn-acento"
                >
                  Quiero visitar
                </a>
                <a
                  href={recurringVisits.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn nb-btn-ghost"
                  style={{ color: "#f4f1ea", borderColor: "rgba(244,241,234,0.5)" }}
                >
                  Ver en Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
