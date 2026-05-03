function About() {
  return (
    <section className="section about">
      <div className="about-grid">
        <div className="about-portrait">
          <img src="assets/fernanda-portrait-2.jpeg" alt="Fernanda Sepúlveda Grasins" />
        </div>
        <div>
          <div className="section-eyebrow">Sobre mí</div>
          <div className="quote">
            "Mi trabajo es sacarte la parte legal de encima. Tú te enfocas en tu casa, tu departamento o tu negocio — yo me preocupo de que todo quede bien firmado."
          </div>
          <div className="quote-author">— Fernanda Sepúlveda Grasins</div>
          <p className="about-body">
            Soy abogada, especializada en derecho inmobiliario. Trabajo principalmente con corredoras de propiedades y con sus clientes en compraventas, arriendos y escrituras en la Región Metropolitana. Soy un único punto de contacto — siempre yo, no un equipo rotativo — y me involucro de verdad en cada operación.
          </p>
          <div className="about-stats">
            <div className="stat"><div className="n">+20</div><div className="l">Años de práctica</div></div>
            <div className="stat"><div className="n">+380</div><div className="l">Operaciones</div></div>
            <div className="stat"><div className="n">1 : 1</div><div className="l">Siempre yo</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
