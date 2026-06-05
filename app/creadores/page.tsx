import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Los creadores del Senderito",
  description:
    "La historia humana detrás del Senderito del Bosque de Niebla: Leticia Arriaga Stransky, Miguel Andrade Huerto y el Comité de Amigos y Vecinos del Cerro de las Culebras.",
  alternates: { canonical: "/creadores" },
  openGraph: {
    title: "Los creadores del Senderito — Senderito del Bosque de Niebla",
    description: "Las manos y la voz detrás del bosque de niebla de Coatepec.",
    url: "/creadores",
    images: ["/og.jpg"],
  },
};

export default function Creadores() {
  return (
    <>
      <NieblaNav />

      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": "url('/creadores/leticia-2.jpg')" } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>Quiénes somos</span>
          <h1>Los creadores del Senderito</h1>
          <p>Las manos, la voz y la constancia detrás del bosque de niebla.</p>
        </div>
      </header>

      <article className="nb-section">
        <div className="nb-wrap">
          <div className="nb-editorial">
            <Reveal>
              <p className="nb-lead">
                Ningún bosque se defiende solo. Detrás del Senderito del Bosque de
                Niebla hay un grupo de personas que decidió que el Cerro de las
                Culebras valía la pena: vecinos que limpiaron un andador olvidado,
                una fotógrafa que lo retrató, un poeta que lo nombró, y una
                comunidad entera que adoptó un árbol. Esta es —en borrador— su
                historia.
              </p>
            </Reveal>
          </div>

          {/* Leticia */}
          <div className="nb-two-col" style={{ marginTop: "3.5rem" }}>
            <Reveal>
              <div className="nb-figure" style={{ backgroundImage: "url('/creadores/leticia-1.jpg')" }} data-caption="Leticia Arriaga Stransky · reforestación en el Cerro de las Culebras" />
            </Reveal>
            <Reveal delay={0.15}>
              <span className="nb-label">Cofundadora</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", margin: "0.6rem 0 0" }}>Leticia Arriaga Stransky</h2>
              <p style={{ marginTop: "1.2rem" }}>
                Fotógrafa y promotora cultural, ex directora de Turismo de Xalapa e
                impulsora del proyecto <em>Rutas de Veracruz</em>. Su cámara fue de
                las primeras en mirar el Cerro de las Culebras no como un baldío,
                sino como un tesoro: cada ave, cada orquídea, cada amanecer entre la
                niebla quedó documentado. De esa mirada nació la idea de hacer del
                cerro un sendero que la gente pudiera conocer —y, conociéndolo,
                cuidar—.
              </p>
            </Reveal>
          </div>

          {/* Miguel */}
          <div className="nb-two-col" style={{ marginTop: "3.5rem" }}>
            <Reveal>
              <span className="nb-label">Cofundador</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", margin: "0.6rem 0 0" }}>Miguel Andrade Huerto</h2>
              <p style={{ marginTop: "1.2rem" }}>
                Poeta y promotor cultural con más de cuatro décadas de trayectoria
                —«el poeta de la lluvia»— y fundador de la editorial Amate. Es quien
                le puso palabras al bosque: el lema <em>«Conocer para conservar»</em>,
                el encuentro «Poesía al Senderito», la lotería ilustrada del bosque
                de niebla. Bajo su impulso, la defensa del cerro se hizo, sobre todo,
                con arte y con memoria.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="nb-figure" data-caption="Miguel Andrade Huerto · fotografía pendiente" />
            </Reveal>
          </div>

          <Reveal>
            <blockquote className="nb-pullquote">
              «El cerro no es de quien tiene la escritura. Es de quien lo camina y lo cuida.»
            </blockquote>
          </Reveal>

          <div className="nb-editorial">
            <Reveal><h2>Quienes empezaron</h2></Reveal>
            <Reveal>
              <p>
                Mucho antes de los festivales y los murales, hubo manos sin foco.
                Hacia 2018, <strong>don Benito Martínez</strong>, vecino de la calle
                Anáhuac, dedicó un año entero a limpiar y desmalezar el viejo Andador
                Justo Sierra —el primer paso, a puro machete y voluntad, de lo que
                hoy es el Senderito—.
              </p>
              <p>
                En 2020, en plena pandemia, Leticia y Miguel constituyeron{" "}
                <strong>Ruta de la Niebla A.C.</strong> junto con el{" "}
                <strong>Comité de Amigos y Vecinos del Cerro de las Culebras</strong>.
                El monitoreo de especies se hizo con la asesoría del botánico inglés{" "}
                <strong>Phil J. Brewster</strong>, que ayudó a registrar las más de
                cien aves y a identificar los árboles nativos que hoy se siembran.
              </p>
              <p>
                Lo demás es comunidad: las familias que adoptan un arbolito, los
                artistas que pintaron las serpientes de la entrada, los niños que
                aprenden a leer el bosque. El Senderito no tiene un solo autor. Tiene
                muchos.
              </p>
            </Reveal>

            <Reveal>
              <p className="nb-placeholder-note">
                ✍️ <strong>Borrador.</strong> Esta historia se completará con la versión,
                las fechas y las fotos que comparta el propio colectivo. Si algo no es
                exacto, lo ajustamos con gusto.
              </p>
            </Reveal>

            <Reveal>
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Link href="/participa" className="nb-btn nb-btn-primary">Súmate al equipo</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <NieblaFooter />
    </>
  );
}
