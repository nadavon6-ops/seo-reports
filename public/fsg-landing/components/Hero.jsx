const WA_URL = "https://wa.me/56968787934?text=" + encodeURIComponent("Hola Fernanda, me gustaría conversar sobre una operación inmobiliaria.");

function Hero({ setRoute }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Derecho Inmobiliario</div>
          <h1>
            Tranquilidad inmobiliaria.<br />
            <em>Lo legal lo manejo yo.</em>
          </h1>
          <div className="hero-rule" />
          <p className="hero-lede">
            Compraventas, arriendos, regularizaciones, conflictos de dominio y asesoría integral. No importa en qué etapa estés. Trabajo contigo en esta operación y en las que vienen.
          </p>
          <div className="hero-row">
            <a className="btn primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
              Conversemos →
            </a>
            <a className="btn ghost-light" href="#" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>
              Cómo trabajo
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="assets/fernanda-portrait.jpeg" alt="Fernanda Sepúlveda Grasins" />
          <div className="frame-line" />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.WA_URL = WA_URL;
