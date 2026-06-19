/* Datos del Senderito del Bosque de Niebla. Verificados en la presentación del colectivo
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

export type PressItem = {
  id: string;
  outlet: string;
  date: string;
  year: number;
  kind: "Nota" | "Oficial" | "Video";
  title: string;
  url: string;
  summary: string;
};

// Cobertura en medios recopilada por Don Miguel Andrade (Ruta de la Niebla A.C.).
// Resúmenes verificados contra el contenido publicado de cada nota.
export const press: PressItem[] = [
  // Artículo fundacional (2020): a Leticia Arriaga, promotora de Ruta de la Niebla,
  // la entrevistan sobre turismo sustentable y rutas agroecológicas. Va al INICIO por
  // petición editorial de Leticia — es el origen conceptual de todo lo demás.
  {
    id: "alcalorpolitico-turismo-sustentable",
    outlet: "Al Calor Político",
    date: "27 de septiembre de 2020",
    year: 2020,
    kind: "Nota",
    title: "Turismo postcovid deberá ser sustentable y consciente del cuidado del medio ambiente",
    url: "https://www.alcalorpolitico.com/informacion/turismo-postcovid-debera-ser-sustentable-y-consciente-del-cuidado-del-medio-ambiente-326710.html",
    summary:
      "Entrevista con Leticia Arriaga Stransky, promotora de rutas viajeras en Veracruz: el turismo postcovid debe emerger de una conciencia ecológica, encaminado al agroturismo y las rutas agroecológicas en apoyo a los pequeños productores. El bosque de niebla como potencial de educación ambiental y turismo local. El texto donde nace la visión de la Ruta de la Niebla.",
  },
  {
    id: "eureka-espacio-naturaleza",
    outlet: "Eureka Medios",
    date: "18 de mayo de 2026",
    year: 2026,
    kind: "Nota",
    title: "Senderito del Bosque de Niebla, espacio abierto para el contacto con la naturaleza",
    url: "https://eurekamedios.mx/senderito-del-bosque-de-niebla-espacio-abierto-para-el-contacto-con-la-naturaleza/",
    summary:
      "Proyecto ecológico independiente en el Cerro de las Culebras dedicado a la conservación y la educación ambiental. En primavera permite observar cerca de 60 especies de aves migratorias; todo el año ofrece visitas guiadas, talleres de herbolaria y actividades culturales.",
  },
  {
    id: "espejo-medio-ambiente-sano",
    outlet: "Espejo del Poder",
    date: "26 de enero de 2026",
    year: 2026,
    kind: "Nota",
    title: "El Senderito y el derecho a un medio ambiente sano",
    url: "https://espejodelpoder.com/2026/01/26/el-senderito-y-el-derecho-a-un-medio-ambiente-sano/",
    summary:
      "Con motivo del Día Internacional de la Educación Ambiental, el Senderito celebró con exposiciones artísticas y talleres. La nota reflexiona sobre el derecho a un medio ambiente sano y el manejo de residuos en Coatepec.",
  },
  {
    id: "aldea-sufre-perdida",
    outlet: "La Aldea de la Información",
    date: "13 de octubre de 2025",
    year: 2025,
    kind: "Nota",
    title: "Sufre pérdida el Senderito de Bosque de Niebla",
    url: "https://laaldeadelainformacion.com.mx/2025/10/13/sufre-perdida-el-senderito-de-bosque-de-niebla/",
    summary:
      "Homenaje al ingeniero agrónomo Erasmo Arturo García Meza, cuyas técnicas de retención de agua y control de erosión —inspiradas en las «ciudades esponja»— dejaron huella en el Senderito.",
  },
  {
    id: "politicos-rosalba",
    outlet: "Los Políticos Veracruz",
    date: "18 de agosto de 2025",
    year: 2025,
    kind: "Nota",
    title: "Rosalba en el Senderito",
    url: "https://lospoliticosveracruz.com.mx/?p=150847",
    summary:
      "Visita de la magistrada Rosalba Hernández Hernández, presidenta del Poder Judicial de Veracruz, al Senderito. La nota destaca cómo la iniciativa ciudadana ha vuelto el Cerro de las Culebras un espacio de paz y reflexión.",
  },
  {
    id: "regional-humanismo",
    outlet: "El Regional Coatepec",
    date: "8 de julio de 2024",
    year: 2024,
    kind: "Nota",
    title: "Humanismo en el Senderito de Bosque de Niebla",
    url: "https://elregionalcoatepec.com/humanismo-en-el-senderito-de-bosque-de-niebla/",
    summary:
      "Ruta de la Niebla recuperó un espacio público antes tomado por el consumo de drogas. La fundación Salvemos Coatepec realizó una jornada de reforestación sembrando 60 encinos con el método Miyawaki.",
  },
  {
    id: "regional-yuawi",
    outlet: "El Regional Coatepec",
    date: "4 de mayo de 2024",
    year: 2024,
    kind: "Nota",
    title: "Yuawi visitó el Senderito",
    url: "https://elregionalcoatepec.com/yuawi-visito-el-senderito/",
    summary:
      "La visita del niño cantante Yuawi impulsa al Senderito como atractivo turístico. Iniciativa comunitaria de Ruta de la Niebla por la observación de naturaleza, la educación ambiental y la conservación del Cerro de las Culebras.",
  },
  {
    id: "hoyxalapa-polinizadores",
    outlet: "HoyXalapa",
    date: "2 de octubre de 2023",
    year: 2023,
    kind: "Nota",
    title: "Senderito de Bosque de Niebla y Universidad Veracruzana en defensa de los polinizadores",
    url: "https://hoyxalapa.com/2023/10/02/senderito-de-bosque-de-niebla-y-universidad-veracruzana-en-defensa-de-los-polinizadores/",
    summary:
      "La Universidad Veracruzana instala jardines polinizadores en el Senderito para proteger abejas y mariposas, en línea con iniciativas a favor de la apicultura y la conservación de la biodiversidad.",
  },
  {
    id: "versiones-turismo",
    outlet: "Versiones",
    date: "31 de mayo de 2023",
    year: 2023,
    kind: "Nota",
    title: "Senderito de Bosque de Niebla atrae al turismo en Coatepec",
    url: "https://versiones.com.mx/2023/05/31/senderito-de-bosque-de-niebla-atrae-al-turismo-en-coatepec/",
    summary:
      "El parque temático se consolida como atractivo turístico del Pueblo Mágico de Coatepec, sumando visitantes al corredor del bosque de niebla del Cerro de las Culebras.",
  },
  {
    id: "diario-xalapa-parque-tematico",
    outlet: "Diario de Xalapa (OEM)",
    date: "2023",
    year: 2023,
    kind: "Nota",
    title: "Senderito y Parque Temático del Bosque de Niebla en el Pueblo Mágico de Coatepec",
    url: "https://oem.com.mx/diariodexalapa/ciencia-y-salud/senderito-y-parque-tematico-del-bosque-de-niebla-en-el-pueblo-magico-de-coatepec-13407741",
    summary:
      "Reportaje sobre el corredor cultural dedicado al bosque mesófilo de montaña dentro de la reserva del Cerro de las Culebras, con talleres ambientales, parcelas demostrativas y mirador.",
  },
  {
    id: "entorno-festival-ecocultural",
    outlet: "Entorno Político",
    date: "2024",
    year: 2024,
    kind: "Nota",
    title: "Todo un éxito el Festival Eco-cultural del Senderito del Bosque de Niebla",
    url: "https://www.entornopolitico.com/nota/211471/local/todo-un-exito-el-festival-eco-cultural-del-senderito-del-bosque-de-niebla/",
    summary:
      "Crónica del festival ecocultural en el parque temático: observación de aves, talleres, teatro, danza, cuentacuentos, rifas y foros culturales en torno al bosque de niebla.",
  },
  {
    id: "veracruz-inauguracion-sedema",
    outlet: "Gobierno de Veracruz · SEDEMA",
    date: "26 de enero de 2023",
    year: 2023,
    kind: "Oficial",
    title: "Inaugura SEDEMA el Parque Temático Senderito del Bosque de Niebla, en Coatepec",
    url: "https://www.veracruz.gob.mx/2023/01/26/inaugura-sedema-parque-tematico-senderito-del-bosque-de-niebla-en-coatepec/",
    summary:
      "Con una inversión de 461,397 pesos, la SEDEMA inauguró el parque lineal con sendero interpretativo, torre de observación de aves, baños secos y aula ambiental. Fue una de las 25 iniciativas del programa Fomento Ambiental 2022, elegida entre 223 propuestas.",
  },
  {
    id: "rtv-no-me-dejes-plantado",
    outlet: "RTV Noticias",
    date: "21 de enero de 2024",
    year: 2024,
    kind: "Video",
    title: "«No me dejes plantado», proyecto para adoptar un árbol",
    url: "https://www.youtube.com/watch?v=c0iz8ZEa_4A",
    summary:
      "Reportaje de RTV sobre «No me dejes plantado»: el programa de adopción de árboles del Senderito, donde las familias de Coatepec apadrinan un árbol nativo, le ponen nombre y lo ven crecer en el Cerro de las Culebras.",
  },
  {
    id: "rtv-segundo-festival-ecocultural",
    outlet: "RTV Noticias",
    date: "9 de julio de 2023",
    year: 2023,
    kind: "Video",
    title: "En Coatepec inicia el Segundo Festival Eco Cultural del Bosque de Niebla",
    url: "https://www.youtube.com/watch?v=CmAjWdyJG6c",
    summary:
      "Cobertura de RTV de la inauguración del Segundo Festival Eco Cultural del Bosque de Niebla en el parque temático: actividades culturales, ambientales y comunitarias en torno al bosque mesófilo.",
  },
  {
    id: "instagram-reel",
    outlet: "Instagram",
    date: "Reel de difusión",
    year: 2025,
    kind: "Video",
    title: "El Senderito en Instagram",
    url: "https://www.instagram.com/reel/DKAdiKqyR8m/",
    summary:
      "Reel de difusión sobre el Senderito del Bosque de Niebla, compartido por la comunidad para dar a conocer el corredor y sus actividades.",
  },
];

export type EventItem = {
  id: string;
  title: string;
  occasion?: string;
  date: string;
  isoDate: string;
  place: string;
  schedule: { time: string; activity: string }[];
  note: string;
  image: string;
  flyer: string;
};

// Próximas actividades del Senderito. Contenido enviado por Leticia (Ruta de la Niebla).
export const events: EventItem[] = [
  {
    id: "jornada-reforestacion-2026",
    title: "Jornadas de Reforestación 2026",
    occasion: "Día del Padre y Solsticio de Verano",
    date: "Domingo 21 de junio de 2026",
    isoDate: "2026-06-21",
    place: "Terraza Panorámica · Parque Temático Senderito del Bosque de Niebla",
    schedule: [
      { time: "8:30", activity: "Charla informativa sobre el proyecto en la Terraza Panorámica" },
      { time: "9:00 – 11:00", activity: "Reforestación" },
      { time: "11:00 – 12:00", activity: "Juego de la Lotería del Bosque de Niebla" },
    ],
    note: "Cooperación voluntaria. Infórmanos de tu visita.",
    image: "/eventos/reforestacion-2026-paisaje.jpg",
    flyer: "/eventos/jornada-reforestacion-2026.jpg",
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
  { id: "bosque-3", category: "bosque", cls: "tile-bosque", src: `${B}/mirador-valle.jpg`, caption: "El valle desde el Mirador del Cerro de las Culebras" },
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
