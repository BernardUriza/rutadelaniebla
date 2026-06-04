"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/cerro-de-las-culebras", label: "Cerro de las Culebras" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/galeria", label: "Galería" },
  { href: "/participa", label: "Participa", hideSm: true },
];

export default function NieblaNav() {
  const path = usePathname();
  return (
    <nav className="nb-nav">
      <Link href="/" className="nb-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-serpiente.png" alt="" className="nb-brand-logo" />
        <span className="nb-brand-text">
          Ruta de la Niebla
          <small>Coatepec · Veracruz</small>
        </span>
      </Link>
      <div className="nb-links">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${path === l.href ? "active" : ""} ${l.hideSm ? "nb-hide-sm" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
