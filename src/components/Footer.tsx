const columns = [
  { title: "Producto", links: [["Características", "#ventajas"], ["Estrategias", "#bots"], ["Resultados", "#resultados"], ["Precio", "#comprar"]] },
  { title: "Empresa", links: [["Sobre nosotros", "#inicio"], ["Contacto", "#contacto"]] },
  { title: "Legal", links: [["Términos", "#legal"], ["Privacidad", "#legal"], ["Risk Disclosure", "#legal"]] },
] as const;

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="page-shell footer-grid">
        <div className="footer-brand"><strong>BOTS<br />TRADING</strong><p>Automatización para operar con un plan, incluso cuando tú descansas.</p></div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}><h2>{column.title}</h2>{column.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
        ))}
        <div className="footer-social"><h2>Redes</h2><p>Perfiles oficiales pendientes de confirmación.</p></div>
      </div>
      <div className="page-shell legal-line" id="legal">
        <p>© 2026 Bots Trading. Todos los derechos reservados.</p>
        <p>El trading conlleva riesgo de pérdida. Ningún contenido de esta página constituye asesoramiento financiero.</p>
      </div>
    </footer>
  );
}

