export interface ProjectData {
  slug: string;
  category: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  liveUrl: string;
  nodes: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
  stats: { value: string; label: string }[];
  gallery: { label: string; caption: string; src: string }[];
}

export const projectsData: Record<string, ProjectData> = {
  "retail-core": {
    slug: "retail-core",
    category: "Retail Tech",
    year: "2025",
    title: "RETAIL-CORE",
    subtitle:
      "Ecosistema comercial unificado: Sistema POS multisucursal con e-commerce integrado, sincronización en tiempo real y arquitectura de datos centralizada para operaciones retail de alto volumen.",
    description:
      "Sistema POS multisucursal con e-commerce integrado y base de datos unificada en tiempo real.",
    heroImage: "/projects/pos-system/hero.png",
    liveUrl: "https://frontend-pos-production.up.railway.app/",
    nodes: [
      {
        id: "NODO_01",
        icon: "point_of_sale",
        title: "Sistema POS Multisucursal",
        description:
          "Punto de venta distribuido con roles granulares, gestión de inventario en tiempo real y sincronización instantánea entre sucursales bajo arquitectura de eventos.",
      },
      {
        id: "NODO_02",
        icon: "shopping_cart",
        title: "E-commerce Integrado",
        description:
          "Plataforma de comercio electrónico totalmente integrada con el POS, compartiendo catálogo, stock y precios en una única fuente de verdad para experiencia omnicanal.",
      },
      {
        id: "NODO_03",
        icon: "storage",
        title: "Base de Datos Unificada",
        description:
          "Arquitectura de datos centralizada con replicación distribuida, garantizando consistencia transaccional y disponibilidad del sistema bajo cargas masivas.",
      },
    ],
    stats: [
      { value: "3", label: "Sucursales Activas" },
      { value: "99.8%", label: "Uptime Sistema" },
      { value: "500+", label: "Transacciones/Día" },
      { value: "0ms", label: "Latencia Sync" },
    ],
    gallery: [
      {
        label: "Recurso // 01",
        caption: "Dashboard Principal POS",
        src: "/projects/pos-system/gallery-1.png",
      },
      {
        label: "Recurso // 02",
        caption: "Interfaz E-commerce",
        src: "/projects/pos-system/gallery-2.png",
      },
      {
        label: "Recurso // 03",
        caption: "Gestión de Inventario Multisucursal",
        src: "/projects/pos-system/gallery-3.png",
      },
      {
        label: "Recurso // 04",
        caption: "Panel de Administración y Roles",
        src: "/projects/pos-system/gallery-4.png",
      },
    ],
  },
  "neo-finance": {
    slug: "neo-finance",
    category: "Infraestructura Fintech",
    year: "2024",
    title: "NEO-FINANCE",
    subtitle:
      "Arquitectura de ecosistemas financieros descentralizados mediante integración de nodos de alta fidelidad y lógica serverless segura.",
    description:
      "Rediseño integral de la infraestructura transaccional con arquitectura de micro-servicios.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDraVnkeXB_48_3lbGbqAYjDciaGJqq9khhkHanu2DbZWCaHHWB67xb4SNrF1OFJSVh5URoY5wDwUXsSVTivwkbhB_nbE9CdRJxVV1VaA_ZMkZmrKpG7dz2kiGfczOU-P-pvq4kmHU2U3s9MkGNZ_v1TgP5qpz5dO8OECXmilkhunjRSiu5vXsZ_Higj7eb5MeQ4yIR2Jgn6iQye6VVlRwNy9CD95bo7dl9gUU-fVdPThFIRmzHYVi3Mz7LzTyAtw54sM_uL6umY1MU",
    liveUrl: "#",
    nodes: [
      {
        id: "NODO_01",
        icon: "memory",
        title: "Análisis de Sistemas",
        description:
          "Auditoría profunda del flujo de datos heredado en 48 nodos globales, reestructurado para propagación en sub-milisegundos.",
      },
      {
        id: "NODO_02",
        icon: "grid_view",
        title: "Diseño de Lógica",
        description:
          "Interfaces centradas en el usuario, diseñadas para transacciones financieras complejas con lógica minimalista propietaria.",
      },
      {
        id: "NODO_03",
        icon: "cloud_done",
        title: "Infraestructura",
        description:
          "Malla serverless distribuida en AWS con auto-escalado inteligente y redundancia de nodos.",
      },
    ],
    stats: [
      { value: "0%", label: "Deuda Técnica" },
      { value: "100%", label: "Escalabilidad" },
      { value: "99.9%", label: "Uptime de Red" },
      { value: "12ms", label: "Latencia Core" },
    ],
    gallery: [
      {
        label: "Recurso // 01",
        caption: "Flujo de Transacciones por Nodo",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_E7ksB97ii9w7Zyg_wF9vQqZNLZCNEIll5cca7AMKo9GgCIqFZgXOtxMG-vhEsOnrKYG0j2fUb5x9Ikd-p10rFcZnXiOLmkkClNk8oWF7k4JR4sqxuSEo0ABTYZElKXMlk-U4aX0bNzQRynfpq57kzVwFe7X-BMiGhA8QCuKChic7BNll2mG9PsvYxv7ptnhSaX7z5tJiSofqpUfvsf7fgc0yEyCjm_eg-t5VrAVQzvuHgZpnaAb8g5otSvsZj0dNsGGHFiUHhDeF",
      },
      {
        label: "Recurso // 02",
        caption: "Lógica de Interfaz de Usuario",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGqt6Ojfjzv64s4nzIr22G1W6ey8TKkmjbKq9ivSEQfNHtx2JwShqGZafwho9c0oHM6fCkg-OdR4ExzXR4H7oRcdp0ZVb327aruL0LV8oZ1xnkEhnUvEGqG6nU9pD1rZV25ldIUNVjQ-yKWh6MoAOkjkj0HiI4vxHxsnX6C7_gs8sTsXKJ1TfaPFesVLLvXgD3F5Y0hFUKtHz2NnP7trPWSLbo4lxAQpfzfit8kwy6qZgFTWsUQO81nIcdL_mDXL5psfvz1Joj6mc8",
      },
      {
        label: "Recurso // 03",
        caption: "Malla de Infraestructura Cloud",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCakcIabWkMaUGR0g0ECFIy1RVQ3Sot0OD5pxVEJ3qhITuH7LpbOVyHmM93M3cOgz3TqXUTQFqLKgKOZCib-ZiUEzrX8Uz6cuivchAgVdwc33R9kJ6Ht0U_aJYHyIjkHmaeEXqlBgIYu-hyA234-3dadQp_B48RB2pJJEavSCqX-CVltoTRtVQye1ohouFrAFP4LKd5nF9IqfVkzVhhoyAYHKIfDoQO-txY7wJc1InSzvDGERiSAd79w3tVY4mq6Xpg1Rjrnn6LYVFQ",
      },
      {
        label: "Recurso // 04",
        caption: "Arquitectura Core de la API",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0wu6q7B12m7kGek40yuQjnoXM0CFLmitGqhHUf0GyiJ_0bVFG3_MfdQwsA34GZkl-mads8ZINdW1ZHC-FdZDR1702ywF_s55uA9brIB2Xp5W4cdx7lqu9Fcug92mwX2yrMyD7e_WamqF0BkTBNR5pne0TRVXrT0ZW82QInMPZNSkvdrv92T_UeorK_ZEBnwwy4-qUrDT9L8c4ztBE9DHxK9FSLxbhJe__L95BDfPhakF1jLixtXt8-9_-FQ-ATTVgaXtsIXqHOWnv",
      },
    ],
  },
  "iw-portfolio": {
    slug: "iw-portfolio",
    category: "Portfolio Personal",
    year: "2025",
    title: "IW-PORTFOLIO",
    subtitle:
      "Landing page minimalista orientada a la narrativa visual. Diseño editorial con arquitectura de información centrada en el storytelling profesional y conversión de contactos.",
    description:
      "Portfolio personal con diseño editorial, sistema de navegación fluido y arquitectura de contenido estratégica.",
    heroImage: "/projects/landing-IW/hero.png",
    liveUrl: "https://porfolio-iw-gg7k.vercel.app/",
    nodes: [
      {
        id: "NODO_01",
        icon: "auto_stories",
        title: "Diseño Editorial",
        description:
          "Narrativa visual basada en principios editoriales, jerarquía tipográfica clara y espacios en blanco estratégicos para guiar la atención del usuario.",
      },
      {
        id: "NODO_02",
        icon: "palette",
        title: "Sistema de Identidad Visual",
        description:
          "Paleta de color minimalista, tipografía de alto contraste y sistema de componentes reutilizables que mantienen consistencia en toda la experiencia.",
      },
      {
        id: "NODO_03",
        icon: "contact_page",
        title: "Arquitectura de Conversión",
        description:
          "Flujo de información optimizado para conversión de visitantes a contactos, con CTAs estratégicos y formulario de contacto de fricción mínima.",
      },
    ],
    stats: [
      { value: "100%", label: "Lighthouse Score" },
      { value: "1.2s", label: "Tiempo de Carga" },
      { value: "95%", label: "Tasa de Rebote Baja" },
      { value: "8", label: "Secciones Clave" },
    ],
    gallery: [
      {
        label: "Recurso // 01",
        caption: "Hero Section & Navegación",
        src: "/projects/landing-IW/gallery-1.png",
      },
      {
        label: "Recurso // 02",
        caption: "Grid de Proyectos",
        src: "/projects/landing-IW/gallery-2.png",
      },
      {
        label: "Recurso // 03",
        caption: "Sección Sobre Mí",
        src: "/projects/landing-IW/gallery-3.png",
      },
      {
        label: "Recurso // 04",
        caption: "Formulario de Contacto",
        src: "/projects/landing-IW/gallery-4.png",
      },
    ],
  },
};
