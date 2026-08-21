import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";

const primaryMetrics = [
  {
    label: "Net Profit",
    value: "14,893.88",
    detail: "Desde 2025 hasta hoy",
    chartLabel: "Tendencia ilustrativa de crecimiento general positivo",
    path: "M4 28 17 25 29 27 42 20 54 22 66 15 78 18 90 11 103 13 116 5",
    tone: "green",
  },
  {
    label: "Win Rate",
    value: "44.68%",
    detail: "168 ganadoras de 376 operaciones",
    chartLabel: "Tendencia ilustrativa de comportamiento mixto y estable",
    path: "M4 18 17 14 30 21 43 16 56 19 69 13 82 20 95 15 108 18 116 14",
    tone: "blue",
  },
  {
    label: "Profit Factor",
    value: "1.62",
    detail: "Relación beneficio/pérdida",
    chartLabel: "Tendencia ilustrativa de estabilidad del Profit Factor",
    path: "M4 23 18 20 32 21 46 17 60 19 74 15 88 17 102 13 116 14",
    tone: "yellow",
  },
  {
    label: "Max Drawdown",
    value: "11.46%",
    detail: "Drawdown máximo relativo",
    chartLabel: "Tendencia ilustrativa de una caída controlada y recuperación parcial",
    path: "M4 9 18 11 32 8 46 12 59 29 72 24 86 19 101 16 116 12",
    tone: "pink",
  },
] as const;

const summaryMetrics = [
  ["Depósito inicial", "10,000.00"],
  ["Total trades", "376"],
  ["Gross profit", "38,743.05"],
  ["Gross loss", "-23,849.16"],
  ["Drawdown absoluto", "625.19"],
  ["Drawdown máximo", "2,180.15 (9.81%)"],
] as const;

const detailedMetrics = [
  ["Beneficio esperado", "39.61"],
  ["Operaciones ganadoras", "168 (44.68%)"],
  ["Operaciones perdedoras", "208 (55.32%)"],
  ["Mayor transacción rentable", "1,914.74"],
  ["Mayor transacción no rentable", "-495.91"],
  ["Media transacción rentable", "230.61"],
  ["Media transacción no rentable", "-114.66"],
  ["Máximo ganancias consecutivas", "7 (1,225.93)"],
  ["Máximo pérdidas consecutivas", "7 (-243.24)"],
  ["Máx. beneficio consecutivo", "2,145.43 (2)"],
  ["Máx. pérdidas consecutivas", "-1,036.20 (6)"],
  ["Promedio ganancias consecutivas", "2"],
  ["Promedio pérdidas consecutivas", "2"],
] as const;

export function Results() {
  return (
    <section className="section results" id="resultados">
      <div className="page-shell">
        <h2 className="section-title">RESULTADOS REALES. DATOS REALES.</h2>
        <p className="section-subtitle">
          Métricas verificadas del periodo 2025 hasta hoy. Fuente: informe de trading aportado.
        </p>

        <div className="results-layout">
          <div className="results-character">
            <Image
              className="results-character-image"
              src={publicAsset("/images/bots/tirado.png")}
              alt="Rana dorada descansando junto a los resultados verificados"
              width={1448}
              height={1086}
              sizes="(max-width: 900px) 94vw, 31vw"
            />
          </div>

          <div className="results-content">
            <div className="metrics-grid">
              {primaryMetrics.map((metric) => (
                <article className={`metric-card metric-card--${metric.tone}`} key={metric.label}>
                  <h3>{metric.label}</h3>
                  <strong>{metric.value}</strong>
                  <span>{metric.detail}</span>
                  <svg viewBox="0 0 120 34" role="img" aria-label={metric.chartLabel}>
                    <path d="M4 30h112" />
                    <path className="metric-line" d={metric.path} />
                  </svg>
                </article>
              ))}
            </div>

            <dl className="results-summary" aria-label="Resumen de métricas verificadas">
              {summaryMetrics.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="chart-note">
              Visualización representativa basada en métricas verificadas del periodo; no corresponde a una curva tick a tick.
            </p>

            <details className="results-details">
              <summary className="comic-button comic-button--pink results-button">Ver resultados completos</summary>
              <dl className="results-detail-grid">
                {detailedMetrics.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </details>

            <p className="results-disclaimer">
              <strong>Aviso:</strong> el rendimiento pasado no garantiza resultados futuros. Operar con productos apalancados implica un riesgo elevado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
