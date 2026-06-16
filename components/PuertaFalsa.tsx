"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { Sprout, X } from "lucide-react";

const INTERES_ENDPOINT = process.env.NEXT_PUBLIC_INTERES_ENDPOINT;

export default function PuertaFalsa() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    if (INTERES_ENDPOINT) {
      try {
        await fetch(INTERES_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, interes: "asistente-guia-senderito" }),
        });
      } catch {
        /* la señal fuerte es el intento; un fallo de red no rompe la UX */
      }
    }
    setSent(true);
  };

  return (
    <>
      <button className="nb-pf-bubble" onClick={() => setOpen(true)} aria-label="Pregúntale al guía del Senderito">
        <Sprout size={20} />
        <span>Pregúntale al guía</span>
      </button>

      {open && (
        <div className="nb-pf-overlay" onClick={() => setOpen(false)}>
          <div className="nb-pf-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="nb-pf-close" onClick={() => setOpen(false)} aria-label="Cerrar">
              <X size={20} />
            </button>
            {!sent ? (
              <>
                <span className="nb-label">Muy pronto</span>
                <h3>El guía del Senderito viene en camino 🌿</h3>
                <p>
                  Estamos preparando un guía que te lleve de paseo por el bosque de niebla y
                  responda lo que quieras saber — para niños y grandes. ¿Te avisamos cuando
                  esté listo?
                </p>
                <form onSubmit={enviar} className="nb-pf-form">
                  <input
                    type="email"
                    required
                    placeholder="tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="nb-btn nb-btn-primary">Avísame</button>
                </form>
              </>
            ) : (
              <>
                <span className="nb-label">¡Gracias!</span>
                <h3>Te avisaremos 🌿</h3>
                <p>
                  En cuanto el guía del Senderito esté listo, te escribimos. Mientras tanto,
                  explora la galería y la biblioteca del bosque de niebla.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
