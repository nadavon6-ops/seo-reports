function Hero({ onOpenModal, setRoute }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Derecho Inmobiliario · Santiago</div>
          <h1>
            Conversemos antes<br />
            <em>de firmar.</em>
          </h1>
          <div className="hero-rule" />
          <p className="hero-lede">
            Soy la abogada cercana que te maneja la parte legal de tu próxima operación inmobiliaria. Sin papeleo intimidante, sin abogados inalcanzables. Tómate un café conmigo — te respondo dentro de 24 horas hábiles.
          </p>
          <div className="hero-row">
            <a className="btn primary" href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>
              Tomémonos un café
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
      <div className="hero-meta">
        <span>Providencia</span>
        <span>+56 2 2000 0000</span>
        <span>contacto@fsg.cl</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
