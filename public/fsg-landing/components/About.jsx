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
            "Conozco el mundo inmobiliario desde adentro. Cuando me llamas, ya sé cómo funciona lo que estás viviendo."
          </div>
          <div className="quote-author">Fernanda Sepúlveda Grasins</div>
          <p className="about-body">
            Llevo 10 años en el mundo inmobiliario. Antes de tener mi propia práctica trabajé en corretaje de propiedades, donde aprendí cómo funciona una operación de verdad. Los tiempos, las presiones, lo que le preocupa al corredor, lo que le preocupa al cliente.
          </p>
          <p className="about-body">
            Hoy trabajo bajo FSG, de forma independiente. Me llamas cuando tienes una operación en curso y la trabajamos juntas desde el principio. Me encargo de la parte legal, mantengo todo ordenado, coordino con quien haya que coordinar y te mantengo al tanto en cada paso. Siempre directamente conmigo.
          </p>
          <p className="about-body">
            No hay equipo, no hay quien te derive. Cuando me escribes, te respondo yo.
          </p>
        </div>
      </div>
    </section>
  );
}

window.About = About;
