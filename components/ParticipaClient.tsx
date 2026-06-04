"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { Sprout, Footprints, HandHeart } from "lucide-react";
import { contacto } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

const paths = [
  { icon: Sprout, title: "Voluntariado", text: "Jornadas de reforestación, monitoreo de especies y limpieza de senderos. Constancia, no heroísmos." },
  { icon: Footprints, title: "Visita guiada", text: "Recorridos interpretativos con guías locales. Aprende a leer el bosque mientras lo caminas." },
  { icon: HandHeart, title: "Donar", text: "Tu aporte paga herramientas, plántulas y educación ambiental para las escuelas de Coatepec." },
];

export default function ParticipaClient() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <NieblaNav />
      <header className="nb-hero nb-hero-sm has-photo" style={{ "--hero-img": "url('/galeria/conservacion-1.jpg')" } as CSSProperties}>
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>Súmate</span>
          <h1>Participa</h1>
          <p>El bosque no necesita héroes. Necesita constancia. Hay un lugar para ti.</p>
        </div>
      </header>

      <section className="nb-section">
        <div className="nb-wrap">
          <div className="nb-paths">
            {paths.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="nb-path">
                    <Icon size={32} className="nb-path-icon" />
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div style={{ marginTop: "5rem", textAlign: "center" }}>
              <span className="nb-label">Escríbenos</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: "0.6rem" }}>
                Quiero ser testigo del bosque
              </h2>
            </div>

            {sent ? (
              <p className="nb-placeholder-note" style={{ borderStyle: "solid", background: "rgba(90,110,79,0.12)", borderColor: "var(--musgo)" }}>
                🌲 ¡Gracias! Recibimos tu interés (demo). Conecta este formulario a un
                servicio real (Formspree, Netlify Forms o un endpoint propio) para recibir
                mensajes de verdad.
              </p>
            ) : (
              <form className="nb-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div>
                  <label htmlFor="nb-name">Nombre</label>
                  <input id="nb-name" name="name" type="text" required placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="nb-email">Correo</label>
                  <input id="nb-email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="nb-motivo">Cómo quieres participar</label>
                  <select id="nb-motivo" name="motivo">
                    <option>Voluntariado</option>
                    <option>Visita guiada</option>
                    <option>Donar</option>
                    <option>Solo quiero saber más</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nb-msg">Mensaje</label>
                  <textarea id="nb-msg" name="message" rows={4} placeholder="Cuéntanos..." />
                </div>
                <button type="submit" className="nb-btn nb-btn-acento" style={{ justifySelf: "start" }}>
                  Enviar
                </button>
              </form>
            )}
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: "680px", margin: "4rem auto 0", textAlign: "center" }}>
              <span className="nb-label">O escríbenos directo</span>
              <p style={{ marginTop: "1rem", color: "var(--corteza)" }}>
                {contacto.org} · {contacto.direccion}
              </p>
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1.5rem" }}>
                <a href={contacto.whatsapp} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-primary">
                  WhatsApp · {contacto.tel}
                </a>
                <a href={`mailto:${contacto.email}`} className="nb-btn nb-btn-ghost">Correo</a>
                <a href={contacto.facebook} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-ghost">Facebook</a>
                <a href={contacto.instagram} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-ghost">Instagram</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <NieblaFooter />
    </>
  );
}
