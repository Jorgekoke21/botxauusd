import Image from "next/image";

const links = [
  ["Inicio", "#inicio"],
  ["Ventajas", "#ventajas"],
  ["Estrategias", "#bots"],
  ["Resultados", "#resultados"],
  ["Precio", "#comprar"],
  ["FAQs", "#contacto"],
] as const;

function NavLinks() {
  return links.map(([label, href]) => (
    <a key={href} href={href} className="nav-link">
      {label}
    </a>
  ));
}

export function Header() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a href="#inicio" className="brand" aria-label="Bots Trading, inicio">
          <span className="brand-mark">
            <Image src="/images/bots/ranaoro.png" alt="" fill sizes="48px" priority />
          </span>
          <span>BOTS<br />TRADING</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal"><NavLinks /></nav>

        <div className="header-actions">
          <a className="comic-button comic-button--pink header-secondary" href="#resultados">Resultados</a>
          <a className="comic-button comic-button--green" href="#comprar">Comprar bot</a>
          <span className="language" aria-label="Idioma actual: español">ES</span>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span /><span /><span /></summary>
          <nav aria-label="Navegación móvil"><NavLinks /><a className="comic-button comic-button--green" href="#comprar">Comprar bot</a></nav>
        </details>
      </div>
    </header>
  );
}
