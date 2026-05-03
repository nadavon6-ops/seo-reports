function ServiceDetail({ id, setRoute, onOpenModal }) {
  const service = window.SERVICES.find((s) => s.id === id) || window.SERVICES[0];
  const [tab, setTab] = React.useState("alcance");

  const content = {
    alcance: (
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--stone-700)", fontWeight: 300 }}>
        {service.body} Cada encargo se atiende personalmente y se entrega con un informe escrito que resume las observaciones y las recomendaciones concretas para tu operación.
      </p>
    ),
    entregables: (
      <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--stone-700)", fontWeight: 300, paddingLeft: 20, margin: 0 }}>
        <li>Informe escrito con observaciones y riesgos.</li>
        <li>Instrumento redactado o revisado, con marcas de cambio.</li>
        <li>Reunión de cierre para explicar cada cláusula.</li>
        <li>Acompañamiento en notaría hasta la firma.</li>
      </ul>
    ),
    plazos: (
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--stone-700)", fontWeight: 300 }}>
        Los plazos habituales van de cinco a quince días hábiles, dependiendo de la complejidad de los antecedentes y la disponibilidad del Conservador de Bienes Raíces correspondiente.
      </p>
    ),
  };

  return (
    <>
      <section className="section">
        <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--stone-500)", marginBottom: 20 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setRoute("home"); }} style={{ color: "var(--stone-500)", textDecoration: "none" }}>Inicio</a>
          <span style={{ color: "var(--gold-700)", margin: "0 10px" }}>·</span>
          <a href="#" onClick={(e) => { e.preventDefault(); setRoute("services"); }} style={{ color: "var(--stone-500)", textDecoration: "none" }}>Servicios</a>
          <span style={{ color: "var(--gold-700)", margin: "0 10px" }}>·</span>
          <strong style={{ color: "var(--navy-950)" }}>{service.title}</strong>
        </div>
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="section-eyebrow">Área de práctica</div>
            <h2 className="section-title">{service.title}.</h2>
          </div>
          <p className="section-lede">{service.body}</p>
        </div>

        <div className="tabs">
          <button className={`tab ${tab === "alcance" ? "active" : ""}`} onClick={() => setTab("alcance")}>Alcance</button>
          <button className={`tab ${tab === "entregables" ? "active" : ""}`} onClick={() => setTab("entregables")}>Entregables</button>
          <button className={`tab ${tab === "plazos" ? "active" : ""}`} onClick={() => setTab("plazos")}>Plazos</button>
        </div>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>{content[tab]}</div>

        <button className="btn solid" onClick={onOpenModal}>Tomémonos un café</button>
      </section>
    </>
  );
}

window.ServiceDetail = ServiceDetail;
