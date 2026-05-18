const SERVICES = [
  {
    num: "I.",
    big: "01",
    title: "Contrato de arriendo",
    body: "Lo redacto yo. Antes de que lo firmen, lo reviso contigo. Si algo no está claro o no te convence, lo cambiamos.",
  },
  {
    num: "II.",
    big: "02",
    title: "Promesa de compraventa",
    body: "La redacto yo o la reviso si ya te mandaron una. Antes de que tu cliente firme algo, me lo mandas. Si hay que ajustar una cláusula o negociar un plazo, lo hago antes de que se comprometan en algo que no está bien redactado.",
  },
  {
    num: "III.",
    big: "03",
    title: "Escritura de compraventa",
    body: "Cuando la compraventa es al contado, redacto la escritura y coordino con el notario y el Conservador. Si hay un banco o institución financiera de por medio, me encargo de recopilar todos los documentos y enviárselos a ellos. El día de la firma estoy ahí de todas formas.",
  },
  {
    num: "IV.",
    big: "04",
    title: "Estudio de títulos",
    body: "Reviso la historia de la propiedad. Si hay algo que no cuadra (una hipoteca, un embargo, un problema de inscripción), te aviso antes de que tu cliente firme, no después.",
  },
  {
    num: "V.",
    big: "05",
    title: "Saneamiento y alzamiento",
    body: "Cuando una propiedad tiene un problema en sus antecedentes, lo resuelvo. Regularizaciones, alzamiento de hipotecas, correcciones en el Conservador.",
  },
  {
    num: "VI.",
    big: "06",
    title: "Reglamentos de copropiedad",
    body: "Los redacto, los reviso o los modifico según lo que necesite el edificio o condominio. Si el reglamento actual ya no refleja cómo funciona la comunidad, lo actualizamos.",
  },
];

function Services() {
  const [openIndex, setOpenIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const toggle = (i) => {
    if (!isMobile) return;
    setOpenIndex((curr) => (curr === i ? -1 : i));
  };

  return (
    <section id="servicios" className="section services">
      <div className="section-head" data-reveal>
        <div>
          <div className="section-eyebrow">Cómo trabajo</div>
          <h2 className="section-title">
            <em>¿Necesitas algo que<br />no está aquí?</em>
            <span className="section-subtitle">Para eso estoy yo.</span>
          </h2>
        </div>
        <p className="section-lede">
          No soy la abogada que aparece solo a firmar. Trabajo contigo desde antes. Reviso, te aviso, coordino con el corredor y el notario, y respondo cuando me escribes. Así se ve la relación.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const isOpen = isMobile ? openIndex === i : true;
          return (
            <div
              key={s.title}
              className={"service" + (isMobile ? " service--accordion" : "") + (isOpen ? " is-open" : "")}
              data-reveal
              data-delay={(i % 3) * 80}
            >
              <span className="service-watermark" aria-hidden="true">{s.big}</span>
              <button
                type="button"
                className="service-toggle"
                aria-expanded={isOpen}
                aria-controls={"service-body-" + i}
                onClick={() => toggle(i)}
              >
                <div className="service-toggle-text">
                  <div className="num">{s.num}</div>
                  <h3>{s.title}</h3>
                </div>
                <span className="service-chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                id={"service-body-" + i}
                className="service-body"
                aria-hidden={!isOpen}
              >
                <p>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

window.Services = Services;
window.SERVICES = SERVICES;
