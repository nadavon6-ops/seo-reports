function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2>
          No solo el contrato. <em>Todo lo inmobiliario.</em><br />
          Cuéntame.
        </h2>
        <a className="btn" href={window.WA_URL} target="_blank" rel="noopener noreferrer">
          Conversemos →
        </a>
      </div>
    </section>
  );
}

function Footer({ setRoute }) {
  const goto = (id) => (e) => { e.preventDefault(); setRoute(id); };
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="name">Fernanda Sepúlveda Grasins</div>
          <div className="tag">Derecho Inmobiliario</div>
          <p>Tranquilidad inmobiliaria. Arriendos, promesas, compraventas, escrituras y todo lo que necesites.</p>
        </div>
        <div className="footer-col">
          <h5>Servicios</h5>
          <a href="#" onClick={goto("services")}>Contrato de arriendo</a>
          <a href="#" onClick={goto("services")}>Promesa de compraventa</a>
          <a href="#" onClick={goto("services")}>Escritura de compraventa</a>
          <a href="#" onClick={goto("services")}>Estudio de títulos</a>
          <a href="#" onClick={goto("services")}>Saneamiento y alzamiento</a>
          <a href="#" onClick={goto("services")}>Reglamentos de copropiedad</a>
        </div>
        <div className="footer-col">
          <h5>Estudio</h5>
          <a href="#" onClick={goto("about")}>Sobre mí</a>
          <a href="#" onClick={goto("about")}>Cómo trabajo</a>
          <a href={window.WA_URL} target="_blank" rel="noopener noreferrer">Contacto</a>
        </div>
        <div className="footer-col">
          <h5>Conversemos</h5>
          <div className="info">
            <a href={window.WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp · +56 9 6878 7934</a>
            <a href="mailto:fernanda@fernandasepulveda.cl">fernanda@fernandasepulveda.cl</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 FSG<span className="sep">·</span>Todos los derechos reservados</div>
        <div>Privacidad<span className="sep">·</span>Términos</div>
      </div>
    </footer>
  );
}

window.CtaBand = CtaBand;
window.Footer = Footer;
