import Image from "next/image";
import { BreakingNewsCard } from "@/components/BreakingNewsCard";
import { publicAsset } from "@/lib/public-asset";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <Image className="hero-scene" src={publicAsset("/images/bots/home.png")} alt="" fill sizes="100vw" priority />
      <div className="hero-sky-wash" aria-hidden="true" />
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title" aria-label="Bots Trading"><span>BOTS</span><span>TRADING</span></h1>
          <p className="slanted-banner">AUTOMATIZA. EJECUTA. CONTROLA.</p>
          <p className="hero-description">
            Automatización para XAUUSD con parámetros claros, control de riesgo y una operativa preparada para funcionar sin perseguir cada vela.
          </p>
          <div className="hero-actions">
            <a className="comic-button comic-button--green comic-button--large" href="#resultados">Ver resultados</a>
            <a className="comic-button comic-button--pink comic-button--large" href="#comprar">Comprar bot</a>
          </div>
          <p className="micro-disclaimer">El trading implica riesgo. No se garantizan resultados.</p>
        </div>

        <div className="hero-character">
          <Image
            className="hero-character-image"
            src={publicAsset("/images/bots/ranaoro.png")}
            alt="Rana robot dorada con gafas de sol frente a un gráfico ascendente"
            width={1086}
            height={1448}
            sizes="(max-width: 860px) 72vw, (max-width: 1180px) 48vw, 29vw"
            priority
          />
        </div>

        <BreakingNewsCard />
      </div>
    </section>
  );
}
