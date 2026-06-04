import Link from "next/link";
import { contacto } from "@/lib/data";

export default function NieblaFooter() {
  return (
    <footer className="nb-footer">
      <div className="nb-footer-grid">
        <div>
          <h4>Ruta de la Niebla A.C.</h4>
          <p style={{ fontSize: "0.9rem", color: "rgba(215,219,213,0.8)", maxWidth: "28rem" }}>
            Asociación Civil dedicada a la difusión del bosque mesófilo de montaña
            de la Sierra Central Veracruzana, y a la conservación del ANP Cerro de
            las Culebras a través de la educación ambiental. <em>Conocer para conservar.</em>
          </p>
        </div>
        <div>
          <h4>Navega</h4>
          <Link href="/cerro-de-las-culebras">Cerro de las Culebras</Link>
          <Link href="/biblioteca">Biblioteca Digital</Link>
          <Link href="/galeria">Galería</Link>
          <Link href="/participa">Participa</Link>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={contacto.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp · {contacto.tel}</a>
          <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          <a href={contacto.facebook} target="_blank" rel="noopener noreferrer">Facebook · Ruta de la Niebla A.C.</a>
          <a href={contacto.instagram} target="_blank" rel="noopener noreferrer">Instagram · @senderitodeniebla</a>
          <span style={{ color: "rgba(215,219,213,0.6)", fontSize: "0.85rem", display: "block", marginTop: "0.4rem" }}>
            {contacto.direccion}
          </span>
        </div>
      </div>
      <div className="nb-footer-bottom">
        <span>© 2026 Ruta de la Niebla A.C. · ANP Cerro de las Culebras, Coatepec</span>
        <span>El bosque necesita testigos.</span>
      </div>
    </footer>
  );
}
