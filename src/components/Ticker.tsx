const message = "POTENCIA ALGORÍTMICA. EJECUCIÓN CONSTANTE. ⚡";

export function Ticker() {
  return (
    <div className="ticker" aria-label={message}>
      <div className="ticker-track" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index}>{message}</span>)}
      </div>
    </div>
  );
}
