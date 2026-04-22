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
            "El derecho inmobiliario no se resuelve con formularios. Se resuelve leyendo cada antecedente con cuidado."
          </div>
          <div className="quote-author">— Fernanda Sepúlveda Grasins</div>
          <p className="about-body">
            Soy abogada titulada, con práctica concentrada en derecho inmobiliario. Asesoro a compradores, vendedores y corredores en operaciones residenciales y comerciales en la Región Metropolitana.
          </p>
          <div className="about-stats">
            <div className="stat"><div className="n">+20</div><div className="l">Años de práctica</div></div>
            <div className="stat"><div className="n">+380</div><div className="l">Operaciones asesoradas</div></div>
            <div className="stat"><div className="n">1 : 1</div><div className="l">Atención personal</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
