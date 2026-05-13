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
      <div className="testimonials-grid">
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
    </section>
  );
}

window.Testimonials = Testimonials;
