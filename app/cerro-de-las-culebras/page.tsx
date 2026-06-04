import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cerro de las Culebras",
  description:
    "Reserva ecológica de Coatepec a unos 1,325 m: bosque de niebla, más de cien especies de aves y la defensa ciudadana de uno de los ecosistemas más amenazados de México.",
  alternates: { canonical: "/cerro-de-las-culebras" },
  openGraph: {
    title: "Cerro de las Culebras — Senderito del Bosque de Niebla",
    description: "Bosque de niebla, biodiversidad y la defensa de la reserva de Coatepec.",
    url: "/cerro-de-las-culebras",
    images: ["/og.jpg"],
  },
};

export default function CerroDeLasCulebras() {
  return (
    <>
      <NieblaNav />

      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": "url('/fullbleed.jpg')" } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>Crónica del territorio</span>
          <h1>Cerro de las Culebras</h1>
          <p>Reserva ecológica y último gran fragmento de bosque de niebla a las puertas de Coatepec.</p>
        </div>
      </header>

      <article className="nb-section">
        <div className="nb-wrap">
          <div className="nb-editorial">
            <Reveal>
              <p className="nb-lead">
                El Cerro de las Culebras no se sube. Se escucha. Quien lo camina
                por primera vez espera una cima, una recompensa de postal. Lo que
                encuentra es otra cosa: un silencio espeso, interrumpido apenas por
                el goteo constante de la niebla condensándose en las hojas, por el
                llamado de un pájaro que no alcanza a ver, por el crujido de la
                tierra negra bajo sus botas. El cerro no se entrega. Se revela
                despacio, como todo lo que vale la pena.
              </p>
            </Reveal>

            <Reveal><h2>El nombre</h2></Reveal>
            <Reveal>
              <p>
                El cerro lleva, traducido, el nombre del pueblo que lo mira. En
                náhuatl, <em>Coatepec</em> se forma de <em>cóatl</em> —serpiente—,{" "}
                <em>tépetl</em> —cerro— y la terminación <em>-c</em> —lugar—: «en el
                cerro de las culebras». Pero el nombre también vive en la voz de la
                gente: cuentan en Coatepec que de noche el cerro guarda serpientes
                que cuidan al pueblo, símbolo antiguo de protección y de fertilidad,
                emparentado con la diosa Coatlicue. Por eso la serpiente reaparece
                hoy en los murales y en el emblema de quienes lo defienden.
              </p>
            </Reveal>

            <Reveal>
              <div className="nb-fullbleed" style={{ backgroundImage: "url('/galeria/senderos-2.jpg')" }}>
                <span>Andador del Senderito del Bosque de Niebla · Ruta de la Niebla A.C.</span>
              </div>
            </Reveal>

            <Reveal><h2>Geografía</h2></Reveal>
            <Reveal>
              <p>
                El cerro se levanta a unos <strong>1,325 metros sobre el nivel del
                mar</strong>, en el municipio de Coatepec, sobre la vertiente
                oriental de la Sierra Madre, a apenas kilómetro y medio del centro
                histórico. Es una elevación de origen volcánico, en la franja exacta
                donde el bosque mesófilo de montaña prospera: suficientemente alto
                para que la humedad del Golfo se atore y se vuelva niebla,
                suficientemente húmedo para que nada se seque nunca del todo. Desde
                su terraza, en los días claros, se alcanzan a ver el Cofre de Perote
                y el Pico de Orizaba al otro lado del valle. La tierra es negra,
                profunda. El agua está en todas partes —en el aire, en el suelo, en
                las hojas, en el sonido.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="nb-pullquote">«Conocer para conservar.»</blockquote>
            </Reveal>

            <Reveal><h2>Biodiversidad</h2></Reveal>
            <Reveal>
              <p>
                En sus laderas conviven especies que en pocos lugares más de México
                coexisten. El monitoreo del colectivo, asesorado por el botánico
                inglés <strong>Phil J. Brewster</strong>, ha registrado{" "}
                <strong>más de cien especies de aves</strong> —64 residentes y más
                de 40 migratorias—: el colibrí fandanguero mexicano, el cuclillo
                canelo, el carpintero chéjere, el chipe gorro canela. Entre los
                árboles crece el encino chicalaba (<em>Quercus insignis</em>), que
                produce la bellota más grande del mundo; el palo blanco, el maple
                mexicano, helechos arborescentes que son fósiles vivientes, y la
                orquídea nativa «Gallito». Líquenes que solo crecen donde el aire
                está limpio cuelgan de cada rama —son el examen de sangre del
                bosque—.
              </p>
            </Reveal>

            <Reveal><h2>Historia de una defensa</h2></Reveal>
            <Reveal>
              <p>
                El terreno que hoy ocupa la reserva fue deforestado en 1991 para
                abrir una colonia. Las obras se suspendieron cuando, poco después,
                el cerro fue declarado <strong>reserva ecológica de competencia
                estatal en 1992</strong>: unas 39 hectáreas que con los años la
                mancha urbana ha mordido hasta dejar entre 32 y 35. Pero el decreto
                solo, sin manos que lo cuidaran, no bastó. Durante décadas el cerro
                fue tiradero, pastizal de chivas, lugar inseguro.
              </p>
              <p>
                La defensa empezó de a poco. Hacia 2018, don Benito Martínez,
                vecino de la calle Anáhuac, dedicó un año entero a limpiar y
                desmalezar el viejo Andador Justo Sierra. En plena pandemia, en
                2020, nació <strong>Ruta de la Niebla A.C.</strong>, fundada por el
                poeta y promotor cultural <strong>Miguel Andrade Huerto</strong> y la
                fotógrafa <strong>Leticia Arriaga Stransky</strong>, junto con el
                Comité de Amigos y Vecinos del Cerro de las Culebras. Llegaron los
                murales de 15 metros en la entrada (2021), las jornadas de
                reforestación, los festivales ecoculturales, las familias que
                adoptan un arbolito. El andador abandonado se volvió el{" "}
                <strong>Senderito del Bosque de Niebla</strong>.
              </p>
            </Reveal>

            <Reveal><h2>La amenaza que sigue</h2></Reveal>
            <Reveal>
              <p>
                La amenaza no llega con motosierras dramáticas. Llega despacio: un
                lote fraccionado aquí, el pastoreo y el pasto estrella que impiden la
                regeneración allá, basura que sube con quien no sabe, y sobre todo el
                avance silencioso de la mancha urbana de Xalapa-Coatepec. Y hay una
                herida de fondo, jurídica: a más de tres décadas del decreto, el Área
                Natural Protegida <strong>todavía no cuenta con un Programa de
                Manejo</strong>. Sin él, la protección es papel. Por eso el colectivo
                llevó la causa hasta el Congreso de Veracruz, San Lázaro y el Senado
                de la República: para que el cerro tenga, por fin, certeza jurídica.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="nb-pullquote">«Un bosque de niebla no se reforesta. Se hereda o se pierde.»</blockquote>
            </Reveal>

            <Reveal><h2>Valor cultural</h2></Reveal>
            <Reveal>
              <p>
                Para Coatepec el cerro no es paisaje de fondo. Es identidad. El café
                que dio fama mundial al pueblo nace de esta humedad. Y la defensa del
                bosque se ha hecho, sobre todo, con arte: murales, fotografía,
                lotería ilustrada del bosque de niebla, talleres de pintura y el
                encuentro «Poesía al Senderito». No es casualidad —quien encabeza la
                iniciativa es un poeta, «el poeta de la lluvia»—. Perder el cerro no
                sería perder árboles: sería perder el espejo donde Coatepec se
                reconoce.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="nb-pullquote">«El cerro no es de quien tiene la escritura. Es de quien lo camina y lo cuida.»</blockquote>
            </Reveal>

            <Reveal><h2>El recorrido</h2></Reveal>
            <Reveal>
              <p>
                El Senderito del Bosque de Niebla es un parque lineal de cerca de un
                kilómetro, organizado en <strong>seis estaciones interpretativas</strong>.
                La primera es la terraza de bienvenida, con su mirador de aves; la
                segunda guarda los mapas del corredor y del cerro; la tercera cuenta
                la historia de la reserva; la cuarta, «El Árbol de las Almas», es un
                alto para el descanso y la reflexión; la quinta habla de los
                servicios ambientales del bosque; la sexta invita a participar.
                Lleva agua, lleva paciencia, no lleves prisa. El cerro castiga la
                prisa.
              </p>
              <div className="nb-walk-card">
                <div><span className="k">Dificultad</span><span className="v">Baja</span></div>
                <div><span className="k">Longitud</span><span className="v">~1 km</span></div>
                <div><span className="k">Altitud</span><span className="v">~1,325 m</span></div>
                <div><span className="k">Estaciones</span><span className="v">6</span></div>
              </div>
            </Reveal>

            <Reveal>
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Link href="/participa" className="nb-btn nb-btn-primary">Reservar una visita guiada</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <NieblaFooter />
    </>
  );
}
