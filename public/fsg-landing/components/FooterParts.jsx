function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2>
          No solo el contrato.<br />
          <em>Todo lo inmobiliario.</em><br />
          Cuéntame.
        </h2>
        <a className="btn" href={window.WA_URL} target="_blank" rel="noopener noreferrer">
          Conversemos →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (anchor) => (e) => {
    e.preventDefault();
    if (anchor === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img className="footer-mark" src="assets/fsg-logo-footer.png" alt="FSG · Derecho Inmobiliario" />
          <p>Tranquilidad inmobiliaria. Arriendos, promesas, compraventas, escrituras y todo lo que necesites.</p>
        </div>
        <div className="footer-col">
          <h5>Servicios</h5>
          <a href="#servicios" onClick={scrollTo("servicios")}>Contrato de arriendo</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Promesa de compraventa</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Escritura de compraventa</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Estudio de títulos</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Saneamiento y alzamiento</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Reglamentos de copropiedad</a>
        </div>
        <div className="footer-col">
          <h5>Estudio</h5>
          <a href="#sobre-mi" onClick={scrollTo("sobre-mi")}>Sobre mí</a>
          <a href="#servicios" onClick={scrollTo("servicios")}>Cómo trabajo</a>
          <a href={window.WA_URL} target="_blank" rel="noopener noreferrer">Contacto</a>
        </div>
        <div className="footer-col">
          <h5>Conversemos</h5>
          <div className="info">
            <a href={window.WA_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/>
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.2 14.9 3.8 13.4 3.8 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/>
              </svg>
              <span>+56 9 6878 7934</span>
            </a>
            <a href="mailto:fernanda@fernandasepulveda.cl" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1.5" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>fernanda@fernandasepulveda.cl</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 FSG<span className="sep">·</span>Todos los derechos reservados</div>
      </div>
    </footer>
  );
}

window.CtaBand = CtaBand;
window.Footer = Footer;
