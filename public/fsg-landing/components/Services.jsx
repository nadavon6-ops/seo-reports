const SERVICES = [
  {
    id: "contratos",
    num: "i.",
    title: "Reviso lo que vas a firmar",
    body: "Antes de que firmes nada — promesa, contrato, escritura — lo leo en detalle y te aviso lo que tenga que aclararse. Si hay que negociar una cláusula, lo hago yo.",
  },
  {
    id: "promesas",
    num: "ii.",
    title: "Estructuro la operación contigo",
    body: "Promesas, condiciones suspensivas, arras, plazos. Te explico qué conviene en tu caso y por qué — sin tecnicismos. Tú decides; yo lo dejo por escrito.",
  },
  {
    id: "titulo",
    num: "iii.",
    title: "Estudio el título de la propiedad",
    body: "Reviso la historia de la propiedad de los últimos diez años. Si aparece algo — una hipoteca, una servidumbre, un problema de inscripción — te lo digo antes, no después.",
  },
  {
    id: "escrituras",
    num: "iv.",
    title: "Te acompaño hasta la notaría",
    body: "Coordino con la corredora, con el banco, con el notario. El día de la firma estoy ahí. Después reviso que la inscripción en el Conservador quede bien hecha.",
  },
];

function Services({ setRoute, setService }) {
  return (
    <section className="section services">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Cómo trabajo</div>
          <h2 className="section-title">
            <em>Tú te enfocas en tu operación.</em><br />
            Yo me encargo de lo legal.
          </h2>
        </div>
        <p className="section-lede">
          No soy la abogada que aparece solo a firmar. Trabajo contigo desde antes — reviso, te aviso, coordino con el corredor y el notario, y respondo cuando me escribes. Así se ve la relación.
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
            <div className="arrow">Cómo funciona</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Services = Services;
window.SERVICES = SERVICES;
