import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { Icon } from "./Icon";

const benefits = [
  { icon: "brain" as const, title: "Estrategias inteligentes", text: "Reglas definidas para responder a distintas condiciones de mercado.", className: "benefit-card--yellow" },
  { icon: "shield" as const, title: "Control de riesgo", text: "Parámetros ajustables para limitar exposición y proteger el capital.", className: "benefit-card--pink" },
  { icon: "chart" as const, title: "Datos verificables", text: "Estructura preparada para publicar resultados con su fuente y periodo.", className: "benefit-card--green" },
  { icon: "bolt" as const, title: "Fácil de usar", text: "Una configuración clara, sin añadir complejidad innecesaria.", className: "benefit-card--blue" },
];

export function Benefits() {
  return (
    <section className="section benefits" id="ventajas">
      <div className="page-shell">
        <h2 className="section-title">POR QUÉ LOS TRADERS ELIGEN<br /><span>BOTS TRADING</span></h2>
        <div className="benefits-layout">
          <div className="benefits-column">
            {benefits.slice(0, 2).map((benefit) => <Benefit key={benefit.title} {...benefit} />)}
          </div>
          <div className="benefits-character">
            <Image
              className="benefits-character-image"
              src={publicAsset("/images/bots/proits.png")}
              alt="Rana dorada con traje sosteniendo una taza de beneficios"
              width={1536}
              height={1024}
              sizes="(max-width: 760px) 94vw, (max-width: 1100px) 70vw, 42vw"
            />
          </div>
          <div className="benefits-column">
            {benefits.slice(2).map((benefit) => <Benefit key={benefit.title} {...benefit} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, text, className }: (typeof benefits)[number]) {
  return (
    <article className={`benefit-card ${className}`}>
      <Icon name={icon} className="benefit-icon" />
      <div><h3>{title}</h3><p>{text}</p></div>
    </article>
  );
}
