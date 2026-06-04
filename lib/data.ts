/* Datos de Ruta de la Niebla. Verificados en la presentación del colectivo
   (public/pdf/presentacion-senderito-bosque-niebla.pdf) y su Facebook. */

export type Stat = { value: number; label: string; suffix?: string };
export type Doc = {
  id: string;
  title: string;
  author: string;
  year: number;
  tag: string;
  abstract: string;
  pdf: string;
  available?: boolean;
};
export type GalleryItem = {
  id: string;
  category: string;
  cls: string;
  src: string;
  caption: string;
};

// Cifras verificadas en la presentación de Ruta de la Niebla A.C.
export const stats: Stat[] = [
  { value: 104, label: "Especies de aves (64 residentes + 40 migratorias)" },
  { value: 6, label: "Estaciones interpretativas" },
  { value: 60, label: "Familias adoptantes de arbolitos" },
  { value: 20, label: "Especies nativas reforestadas", suffix: "+" },
];

// `available: true` → el PDF existe en /public y el botón lo descarga.
export const documents: Doc[] = [
  {
    id: "presentacion-senderito",
    title: "Parque Temático Senderito del Bosque de Niebla",
    author: "Ruta de la Niebla A.C.",
    year: 2024,
    tag: "Educación ambiental",
    abstract:
      "Presentación del proyecto: historia del Senderito (antes Andador Justo Sierra), reforestación con especies nativas, los murales de la entrada, los festivales ecoculturales y las seis estaciones interpretativas del parque lineal en el ANP Cerro de las Culebras.",
    pdf: "/pdf/presentacion-senderito-bosque-niebla.pdf",
    available: true,
  },
  {
    id: "guia-aves",
    title: "Guía de aves del corredor del bosque de niebla",
    author: "Ruta de la Niebla A.C. · asesoría Phil J. Brewster",
    year: 2023,
    tag: "Biodiversidad",
    abstract:
      "Primera miniguía de difusión sobre la biodiversidad del bosque de niebla: 64 especies de aves residentes y más de 40 migratorias registradas en el Cerro de las Culebras. Presentada en mayo de 2023 con Pronatura y la Universidad Veracruzana.",
    pdf: "/pdf/guia-aves.pdf",
  },
  {
    id: "loteria-bosque",
    title: "La Lotería del Bosque de Niebla",
    author: "Ruta de la Niebla A.C.",
    year: 2022,
    tag: "Educación",
    abstract:
      "Juego educativo con un acervo de 80 imágenes de la riqueza del bosque mesófilo, ilustrado con cartas descriptivas de las especies. Consta de 10 tableros y un mapa de la Sierra Central Veracruzana.",
    pdf: "/pdf/loteria-bosque-niebla.pdf",
  },
  {
    id: "inventario-especies",
    title: "Inventario de especies sembradas 2021-2022",
    author: "Ruta de la Niebla A.C. · asesoría Phil J. Brewster",
    year: 2022,
    tag: "Reforestación",
    abstract:
      "Registro de las especies nativas sembradas en el Parque Lineal y el Parque Temático: Encino chicalaba (Quercus insignis), Palo blanco, Maple mexicano, Encino roble, Fresno mexicano, entre más de 20 variedades.",
    pdf: "/pdf/inventario-especies.pdf",
  },
  {
    id: "fotografos-empresarios",
    title: "30 Fotógrafos y 30 Empresarios por la biodiversidad",
    author: "Ruta de la Niebla A.C.",
    year: 2021,
    tag: "Fotografía",
    abstract:
      "Catálogo de la muestra colectiva itinerante sobre la biodiversidad del bosque de niebla, expuesta en el Congreso de Veracruz, el Palacio Legislativo de San Lázaro y el Senado de la República.",
    pdf: "/pdf/fotografos-empresarios.pdf",
  },
  {
    id: "reserva-ecologica",
    title: "ANP Cerro de las Culebras — reserva ecológica estatal",
    author: "Comité de Amigos y Vecinos del Cerro de las Culebras",
    year: 2023,
    tag: "Marco legal",
    abstract:
      "Documento sobre la situación jurídica del Área Natural Protegida: a más de 30 años del decreto que la convierte en reserva ecológica estatal, aún no cuenta con un Programa de Manejo. Caso y gestión para su clarificación.",
    pdf: "/pdf/reserva-ecologica.pdf",
  },
];

export const galleryCategories = [
  { id: "bosque", label: "Bosque", cls: "tile-bosque" },
  { id: "fauna", label: "Fauna", cls: "tile-fauna" },
  { id: "flora", label: "Flora", cls: "tile-flora" },
  { id: "senderos", label: "Senderos", cls: "tile-senderos" },
  { id: "comunidad", label: "Comunidad", cls: "tile-comunidad" },
  { id: "conservacion", label: "Conservación", cls: "tile-conservacion" },
];

const B = "/galeria";

// Fotos reales del Cerro de las Culebras (presentación + Facebook del colectivo).
export const galleryItems: GalleryItem[] = [
  { id: "bosque-1", category: "bosque", cls: "tile-bosque", src: `${B}/bosque-1.jpg`, caption: "El cerro entre la niebla" },
  { id: "bosque-2", category: "bosque", cls: "tile-bosque", src: `${B}/bosque-2.jpg`, caption: "Follaje otoñal del bosque mesófilo" },
  { id: "fauna-1", category: "fauna", cls: "tile-fauna", src: `${B}/fauna-1.jpg`, caption: "Colibrí fandanguero mexicano" },
  { id: "fauna-2", category: "fauna", cls: "tile-fauna", src: `${B}/fauna-2.jpg`, caption: "Cuclillo canelo" },
  { id: "fauna-3", category: "fauna", cls: "tile-fauna", src: `${B}/fauna-3.jpg`, caption: "Carpintero chéjere" },
  { id: "flora-1", category: "flora", cls: "tile-flora", src: `${B}/flora-1.jpg`, caption: "Orquídea nativa «Gallito»" },
  { id: "senderos-1", category: "senderos", cls: "tile-senderos", src: `${B}/senderos-1.jpg`, caption: "Sendero a Mirador con niebla" },
  { id: "senderos-2", category: "senderos", cls: "tile-senderos", src: `${B}/senderos-2.jpg`, caption: "Andador del Senderito" },
  { id: "comunidad-1", category: "comunidad", cls: "tile-comunidad", src: `${B}/comunidad-1.jpg`, caption: "Voluntarios en el Senderito" },
  { id: "comunidad-2", category: "comunidad", cls: "tile-comunidad", src: `${B}/comunidad-2.jpg`, caption: "Jornada de reforestación" },
  { id: "conservacion-1", category: "conservacion", cls: "tile-conservacion", src: `${B}/conservacion-1.jpg`, caption: "Mural de la serpiente · entrada al ANP" },
  { id: "conservacion-2", category: "conservacion", cls: "tile-conservacion", src: `${B}/conservacion-2.jpg`, caption: "La entrada, transformada por los murales" },
];

// Contacto real del colectivo (de su Facebook).
export const contacto = {
  org: "Ruta de la Niebla A.C.",
  tel: "228 754 0070",
  whatsapp: "https://api.whatsapp.com/send?phone=522287540070",
  email: "rutadelaniebla@yahoo.es",
  facebook: "https://www.facebook.com/rutadelaniebla",
  instagram: "https://www.instagram.com/senderitodeniebla/",
  direccion: "Anáhuac 36, Coatepec, Veracruz 91500",
};
