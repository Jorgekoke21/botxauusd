import { Icon } from "./Icon";

const items = [
  { icon: "target" as const, title: "XAUUSD", text: "Mercado principal" },
  { icon: "terminal" as const, title: "MT4", text: "Plataforma compatible" },
  { icon: "bolt" as const, title: "Automático", text: "Ejecución programada" },
  { icon: "shield" as const, title: "Riesgo", text: "Control configurable" },
  { icon: "clock" as const, title: "24/5", text: "Ventana de mercado" },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Características de la solución">
      <div className="page-shell trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.title}>
            <Icon name={item.icon} className="trust-icon" />
            <span><strong>{item.title}</strong><small>{item.text}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}
