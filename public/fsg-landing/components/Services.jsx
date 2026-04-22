const SERVICES = [
  {
    id: "contratos",
    num: "i.",
    title: "Contratos",
    body: "Redacto y reviso contratos de compraventa, arrendamiento y comodato, con cláusulas adaptadas a cada operación y al perfil de mi cliente.",
  },
  {
    id: "promesas",
    num: "ii.",
    title: "Promesas",
    body: "Estructuro promesas de compraventa con condiciones suspensivas, arras y plazos calibrados para proteger su posición en la operación.",
  },
  {
    id: "titulo",
    num: "iii.",
    title: "Estudios de título",
    body: "Revisión exhaustiva de la historia dominical de los últimos diez años, con informe escrito, observaciones y recomendaciones concretas.",
  },
  {
    id: "escrituras",
    num: "iv.",
    title: "Escrituras",
    body: "Redacción y acompañamiento en firma notarial: escrituras de compraventa, hipoteca, cancelación y modificaciones.",
  },
];

function Services({ setRoute, setService }) {
  return (
    <section className="section services">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Áreas de práctica</div>
          <h2 className="section-title">
            <em>Cuatro disciplinas,</em><br />
            un solo criterio.
          </h2>
        </div>
        <p className="section-lede">
          Mi práctica se concentra en derecho inmobiliario. Eso significa que cada operación se atiende personalmente, desde la primera revisión hasta la firma en notaría.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="service"
            onClick={() => { setService(s.id); setRoute("service"); }}
          >
            <div className="num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="arrow">Conocer más</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Services = Services;
window.SERVICES = SERVICES;
