"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/cerro-de-las-culebras", label: "El Cerro" },
  { href: "/creadores", label: "Creadores" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/prensa", label: "Prensa" },
  { href: "/blog", label: "Blog" },
  { href: "/galeria", label: "Galería" },
  { href: "/participa", label: "Participa" },
];

export default function NieblaNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nb-nav">
      <Link href="/" className="nb-brand" onClick={() => setOpen(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-serpiente.png" alt="" className="nb-brand-logo" />
        <span className="nb-brand-text">
          Senderito del Bosque de Niebla
          <small>Cerro de las Culebras · Coatepec</small>
        </span>
      </Link>

      {/* Links inline (desktop) */}
      <div className="nb-links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Botón hamburguesa (móvil) */}
      <button
        type="button"
        className="nb-menu-btn"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Panel desplegable (móvil) */}
      {open && (
        <div className="nb-mobile-panel">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
