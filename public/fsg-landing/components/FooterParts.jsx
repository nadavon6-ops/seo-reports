function CtaBand({ onOpenModal }) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2>
          ¿Tienes una operación <em>en curso?</em>
        </h2>
        <a className="btn" href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>
          Tomémonos un café
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-logo" />
          <div className="name">Fernanda Sepúlveda Grasins</div>
          <div className="tag">Derecho Inmobiliario</div>
          <p>Asesoría boutique en contratos, promesas, estudios de título y escrituras. Atención personal a cada operación.</p>
        </div>
        <div className="footer-col">
          <h5>Servicios</h5>
          <a href="#">Contratos</a>
          <a href="#">Promesas</a>
          <a href="#">Estudios de título</a>
          <a href="#">Escrituras</a>
        </div>
        <div className="footer-col">
          <h5>Estudio</h5>
          <a href="#">Sobre mí</a>
          <a href="#">Proceso</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-col">
          <h5>Contacto</h5>
          <div className="info">
            Av. Providencia 1234<br />
            Oficina 802 · Providencia<br />
            Santiago, Chile<br /><br />
            +56 2 2000 0000<br />
            contacto@fsg.cl
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
