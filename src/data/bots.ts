export type Bot = {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  risk: string;
  market: string;
  accent: "yellow" | "green" | "pink" | "blue";
};

export const bots: Bot[] = [
  {
    name: "Gold Scalper",
    image: "/images/bots/ranaoro.png",
    imageWidth: 1086,
    imageHeight: 1448,
    description: "Configuración orientada a movimientos breves con reglas de entrada y salida definidas.",
    risk: "Configurable",
    market: "XAUUSD",
    accent: "yellow",
  },
  {
    name: "Trend Rider",
    image: "/images/bots/proits.png",
    imageWidth: 1536,
    imageHeight: 1024,
    description: "Lógica preparada para acompañar tendencias sin modificar el plan durante la ejecución.",
    risk: "Configurable",
    market: "XAUUSD",
    accent: "green",
  },
  {
    name: "Swing Guard",
    image: "/images/bots/tirado.png",
    imageWidth: 1448,
    imageHeight: 1086,
    description: "Un enfoque más pausado, con parámetros diseñados para recorridos de mayor duración.",
    risk: "Configurable",
    market: "XAUUSD",
    accent: "pink",
  },
  {
    name: "Adaptive Gold",
    image: "/images/bots/gold-small-transparent.png",
    imageWidth: 1536,
    imageHeight: 1024,
    description: "Arquitectura modular lista para adaptar filtros y gestión cuando exista validación suficiente.",
    risk: "Configurable",
    market: "XAUUSD",
    accent: "blue",
  },
];
