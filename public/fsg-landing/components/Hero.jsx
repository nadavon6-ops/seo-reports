function Hero({ onOpenModal, setRoute }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Derecho Inmobiliario · Santiago</div>
          <h1>
            Atendido<br />
            <em>personalmente.</em>
          </h1>
          <div className="hero-rule" />
          <p className="hero-lede">
            Contratos, promesas, estudios de título y escrituras. Una asesoría boutique para quienes esperan el mismo cuidado que una operación inmobiliaria merece.
          </p>
          <div className="hero-row">
            <a className="btn primary" href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>
              Agendar reunión
            </a>
            <a className="btn ghost-light" href="#" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>
              Ver servicios
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
