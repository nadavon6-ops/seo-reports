const FAQ_ITEMS = [
  {
    q: "¿Trabajas con corredoras de propiedades?",
    a: "Sí. Es la mayor parte de mi práctica. Trabajo directamente con la corredora y, cuando hace falta, también con su cliente. Siempre un solo punto de contacto."
  },
  {
    q: "¿Atiendes operaciones fuera de Santiago?",
    a: "Atiendo principalmente la Región Metropolitana. Para operaciones en otras regiones lo conversamos y, si tiene sentido, coordino con el Conservador correspondiente."
  },
  {
    q: "¿Cuánto demora un estudio de títulos?",
    a: "Entre cinco y quince días hábiles, según la disponibilidad de antecedentes y del Conservador de Bienes Raíces. Te aviso plazos por escrito antes de empezar."
  },
  {
    q: "¿Cómo cobras los honorarios?",
    a: "Honorarios fijos por operación, no por hora. Te paso una propuesta clara antes de empezar — sin sorpresas."
  },
  {
    q: "¿Puedo consultarte aunque ya tenga otro abogado?",
    a: "Sí. Podemos hacer una segunda lectura del contrato, de la promesa o de la escritura. Te digo qué cambiaría yo y por qué."
  }
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => setOpen((curr) => (curr === i ? -1 : i));

  return (
    <section id="preguntas" className="section faq">
      <div className="section-head" data-reveal>
        <div>
          <div className="section-eyebrow">Preguntas frecuentes</div>
          <h2 className="section-title">Lo que más me preguntan<br /><em>antes del café.</em></h2>
        </div>
      </div>
      <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={"faq-item" + (isOpen ? " is-open" : "")}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq-toggle"
                aria-expanded={isOpen}
                aria-controls={"faq-a-" + i}
                onClick={() => toggle(i)}
              >
                <h3 itemProp="name">{item.q}</h3>
                <span className="faq-chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                id={"faq-a-" + i}
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

window.FAQ = FAQ;
window.FAQ_ITEMS = FAQ_ITEMS;
