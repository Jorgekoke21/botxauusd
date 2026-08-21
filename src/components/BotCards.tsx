import Image from "next/image";
import { bots } from "@/data/bots";
import { publicAsset } from "@/lib/public-asset";

export function BotCards() {
  return (
    <section className="section bots-section" id="bots">
      <div className="page-shell">
        <h2 className="section-title">NUESTROS BOTS. TU VENTAJA.</h2>
        <p className="section-subtitle">Sistemas configurables para una operativa clara. Valida cada ajuste antes de usar capital real.</p>
        <div className="bot-grid">
          {bots.map((bot) => (
            <article className={`bot-card bot-card--${bot.accent}`} key={bot.name}>
              <h3>{bot.name}</h3>
              <div className="bot-image">
                <Image
                  className="bot-card-image"
                  src={publicAsset(bot.image)}
                  alt={`Ilustración de ${bot.name}`}
                  width={bot.imageWidth}
                  height={bot.imageHeight}
                  sizes="(max-width: 700px) 82vw, (max-width: 1050px) 44vw, 22vw"
                />
              </div>
              <p>{bot.description}</p>
              <dl>
                <div><dt>Riesgo</dt><dd>{bot.risk}</dd></div>
                <div><dt>Mercado</dt><dd>{bot.market}</dd></div>
              </dl>
              <a className="comic-button comic-button--green bot-card-cta" href="#comprar">Ver configuración</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
