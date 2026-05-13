const WA_URL = "https://wa.me/56968787934?text=" + encodeURIComponent("Hola Fernanda, me gustaría conversar sobre una operación inmobiliaria.");

function scrollToAnchor(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow" data-reveal>Derecho Inmobiliario</div>
          <h1 data-reveal data-delay="80">
            Tranquilidad inmobiliaria.<br />
            <em>Lo legal lo manejo yo.</em>
          </h1>
          <div className="hero-rule" data-reveal data-delay="180" />
          <p className="hero-lede" data-reveal data-delay="240">
            Compraventas, arriendos, regularizaciones, conflictos de dominio y asesoría integral. No importa en qué etapa estés. Trabajo contigo en esta operación y en las que vienen.
          </p>
          <div className="hero-row" data-reveal data-delay="320">
            <a className="btn primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
              Conversemos →
            </a>
            <a className="btn ghost-light" href="#servicios" onClick={(e) => { e.preventDefault(); scrollToAnchor("servicios"); }}>
              Cómo trabajo
            </a>
          </div>
        </div>
        <div className="hero-portrait" data-reveal data-delay="160">
          <img src="assets/fernanda-portrait.jpeg" alt="Fernanda Sepúlveda Grasins" />
          <div className="frame-line" />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.WA_URL = WA_URL;
window.scrollToAnchor = scrollToAnchor;
