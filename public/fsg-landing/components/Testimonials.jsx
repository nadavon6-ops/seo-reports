function Testimonials() {
  const items = [
    {
      quote: "Recomiendo totalmente a Fernanda. Desde el primer día, ha destacado por su trato agradable y su gran capacidad para simplificar temas complejos. Es sumamente rápida en cada etapa y siempre está disponible para aclarar dudas, demostrando ser una profesional muy receptiva. Entiende a la perfección los retos del rubro inmobiliario; gracias a su enfoque colaborativo y humano, hemos logrado operaciones muy exitosas.",
      author: "Soledad Caro",
      role: "Alas Propiedades",
    },
    {
      quote: "Excelente experiencia trabajando con la abogada Fernanda Sepúlveda. Destaco su profesionalismo y compromiso en la recopilación de antecedentes y redacción de la promesa. Siempre atenta a los detalles y muy disponible para resolver dudas durante todo el proceso. Totalmente recomendable.",
      author: "Anahí Vaca Diez",
      role: "Corredora de propiedades",
    },
    {
      quote: "Trabajo con la abogada Fernanda Sepúlveda hace varios años y puedo decir que ella es muy profesional, siempre tiene buena disposición y es muy ejecutiva. La recomiendo.",
      author: "Sandra de Pinto",
      role: "Corredora de propiedades",
    },
  ];

  const AUTO_MS = 6000;
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const goTo = (i) => setIndex((i + items.length) % items.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <section className="section testimonials">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Testimonios</div>
          <h2 className="section-title">Corredoras<br /><em>que ya trabajan conmigo.</em></h2>
        </div>
      </div>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="testimonials-stage">
          {items.map((t, i) => (
            <article
              key={i}
              className={"testimonial" + (i === index ? " active" : "")}
              aria-hidden={i !== index}
            >
              <div className="t-mark">"</div>
              <p className="t-quote">{t.quote}</p>
              <div className="t-meta">
                <div className="t-author">{t.author}</div>
                <div className="t-role">{t.role}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="carousel-dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                className={"dot" + (i === index ? " active" : "")}
                onClick={() => goTo(i)}
                aria-label={"Testimonio " + (i + 1)}
                aria-selected={i === index}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
