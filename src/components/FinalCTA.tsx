import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="final-cta" id="comprar">
      <div className="sparkle sparkle--one" aria-hidden="true">✦</div>
      <div className="sparkle sparkle--two" aria-hidden="true">✦</div>
      <div className="page-shell final-grid">
        <div className="final-copy">
          <h2>¿LISTO PARA AUTOMATIZAR<br />TU <span>TRADING?</span></h2>
          <p>Conoce la configuración, revisa el riesgo y decide con información clara antes de empezar.</p>
          <div className="hero-actions">
            <a className="comic-button comic-button--green comic-button--large" href="#contacto">Comprar bot</a>
            <a className="comic-button comic-button--pink comic-button--large" href="#resultados">Ver resultados</a>
          </div>
          <p className="micro-disclaimer">Canal de compra e información comercial: pendiente de conexión.</p>
        </div>
        <div className="final-art">
          <div className="final-character">
            <Image
              className="final-character-image"
              src="/images/bots/principaloro.png"
              alt="Rana dorada junto a una pila ascendente de lingotes de oro"
              width={1448}
              height={1086}
              sizes="(max-width: 600px) calc(100vw - 24px), (max-width: 860px) 82vw, (max-width: 1180px) 50vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
