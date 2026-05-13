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

  const trackRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i];
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children);
    const trackLeft = track.scrollLeft;
    let nearest = 0;
    let bestDist = Infinity;
    slides.forEach((s, i) => {
      const dist = Math.abs(s.offsetLeft - track.offsetLeft - trackLeft);
      if (dist < bestDist) { bestDist = dist; nearest = i; }
    });
    if (nearest !== index) setIndex(nearest);
  };

  const prev = () => scrollToIndex(Math.max(0, index - 1));
  const next = () => scrollToIndex(Math.min(items.length - 1, index + 1));

  return (
    <section className="section testimonials">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Testimonios</div>
          <h2 className="section-title">Corredoras que <em>ya trabajan conmigo.</em></h2>
        </div>
        <p className="section-lede">
          Tres voces del rubro inmobiliario que mejor explican cómo es trabajar juntas.
        </p>
      </div>

      <div className="carousel">
        <div className="testimonials-track" ref={trackRef} onScroll={onScroll}>
          {items.map((t, i) => (
            <article key={i} className="testimonial">
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
          <button
            className="carousel-btn"
            onClick={prev}
            aria-label="Anterior"
            disabled={index === 0}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="carousel-dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                className={"dot" + (i === index ? " active" : "")}
                onClick={() => scrollToIndex(i)}
                aria-label={"Testimonio " + (i + 1)}
                aria-selected={i === index}
              />
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={next}
            aria-label="Siguiente"
            disabled={index === items.length - 1}
          >
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
