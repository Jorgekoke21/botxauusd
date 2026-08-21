"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿En qué mercados opera el bot?",
    answer:
      "El bot está preparado principalmente para operar XAUUSD (oro), con una lógica enfocada en ejecución automática y parámetros configurables para una operativa clara y controlada.",
    tone: "pink",
  },
  {
    question: "¿Es compatible con MetaTrader 4 y MetaTrader 5?",
    answer:
      "Sí. El sistema está planteado para funcionar con MT4 y MT5, de forma que puedas utilizar la plataforma con la que te sientas más cómodo.",
    tone: "blue",
  },
  {
    question: "¿Opera de forma automática?",
    answer:
      "Sí. El bot está diseñado para ejecutar operaciones automáticamente según su configuración, evitando que tengas que estar pendiente del gráfico en todo momento.",
    tone: "yellow",
  },
  {
    question: "¿Incluye gestión de riesgo?",
    answer:
      "Sí. La operativa se apoya en una gestión de riesgo configurable, para que puedas adaptar exposición, tamaño y comportamiento a tu perfil.",
    tone: "lime",
  },
  {
    question: "¿Los resultados están verificados?",
    answer:
      "La sección de resultados muestra únicamente métricas reales y verificables, acompañadas de su periodo y fuente cuando corresponda.",
    tone: "orange",
  },
  {
    question: "¿Puedo usarlo si soy principiante?",
    answer:
      "Sí, aunque siempre es recomendable entender los conceptos básicos de trading, riesgo y funcionamiento de MetaTrader antes de operar con dinero real.",
    tone: "pink",
  },
  {
    question: "¿El rendimiento pasado garantiza resultados futuros?",
    answer:
      "No. El rendimiento pasado no garantiza resultados futuros. Operar productos apalancados implica riesgo y puede no ser adecuado para todos los perfiles.",
    tone: "blue",
  },
] as const;

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faqs" id="faqs" aria-labelledby="faqs-title">
      <div className="page-shell">
        <h2 className="section-title faqs-title" id="faqs-title">PREGUNTAS FRECUENTES</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <article
                className={`faq-item faq-item--${faq.tone}`}
                data-open={isOpen}
                key={faq.question}
              >
                <h3>
                  <button
                    className="faq-trigger"
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <svg className="faq-chevron" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 9 7 7 7-7" />
                    </svg>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
