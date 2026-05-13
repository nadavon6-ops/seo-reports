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

  const AUTO_MS = 5500;
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [perView, setPerView] = React.useState(1);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(Math.min(3, items.length));
      else if (w >= 640) setPerView(Math.min(2, items.length));
      else setPerView(1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [items.length]);

  const maxIndex = Math.max(0, items.length - perView);

  React.useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  React.useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const goTo = (i) => setIndex(Math.max(0, Math.min(maxIndex, i)));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const initials = (name) =>
    name
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section className="section testimonials">
      <div className="section-head" data-reveal>
        <div>
          <div className="section-eyebrow">Testimonios</div>
          <h2 className="section-title">Corredoras<br /><em>que ya trabajan conmigo.</em></h2>
        </div>
      </div>

      <div
        className="carousel"
        data-reveal data-delay="120"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        style={{ "--per-view": perView }}
      >
        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            ref={trackRef}
            style={{ transform: `translateX(calc(-1 * var(--slide-step) * ${index}))` }}
          >
            {items.map((t, i) => (
              <article key={i} className="testimonial">
                <div className="t-mark">"</div>
                <p className="t-quote">{t.quote}</p>
                <div className="t-meta">
                  <div className="t-avatar" aria-hidden="true">{initials(t.author)}</div>
                  <div>
                    <div className="t-author">{t.author}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Anterior">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="carousel-dots" role="tablist">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={"dot" + (i === index ? " active" : "")}
                  onClick={() => goTo(i)}
                  aria-label={"Slide " + (i + 1)}
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
        )}
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
