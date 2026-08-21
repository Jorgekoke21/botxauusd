import Image from "next/image";

const metrics = ["Net Profit", "Win Rate", "Profit Factor", "Max Drawdown"];

export function Results() {
  return (
    <section className="section results" id="resultados">
      <div className="page-shell">
        <h2 className="section-title">RESULTADOS REALES. DATOS REALES.</h2>
        <p className="section-subtitle">Esta sección mostrará únicamente métricas verificadas y acompañadas de su periodo y fuente.</p>
        <div className="results-layout">
          <div className="results-character">
            <Image
              className="results-character-image"
              src="/images/bots/tirado.png"
              alt="Rana dorada descansando junto a un aviso sobre rendimiento pasado"
              width={1448}
              height={1086}
              sizes="(max-width: 900px) 94vw, 31vw"
            />
          </div>
          <div className="results-content">
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric}>
                  <h3>{metric}</h3><strong>—</strong><span>Pendiente de datos verificados</span>
                  <svg viewBox="0 0 120 34" role="img" aria-label="Gráfico pendiente de datos">
                    <path d="M4 28h112" />
                    <path className="metric-line" d="M4 25 24 24 38 19 52 22 68 14 85 17 98 9 116 11" />
                  </svg>
                </article>
              ))}
            </div>
            <a className="comic-button comic-button--pink results-button" href="#comprar">Ver resultados completos</a>
            <p className="results-disclaimer"><strong>Aviso:</strong> el rendimiento pasado no garantiza resultados futuros. Operar con productos apalancados implica un riesgo elevado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
