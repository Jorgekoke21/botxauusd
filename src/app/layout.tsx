import type { Metadata } from "next";
import { Fredoka, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import "@/styles/comic.css";

const display = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Fredoka({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bots Trading | Automatiza tu operativa",
  description:
    "Landing oficial de Bots Trading: automatización para XAUUSD con control de riesgo y ejecución 24/5.",
  openGraph: {
    title: "Bots Trading",
    description:
      "Automatización de trading con una identidad tan seria como inolvidable.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bots Trading",
    description: "Automatiza. Ejecuta. Controla.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
