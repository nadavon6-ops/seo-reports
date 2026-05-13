const SERVICES = [
  {
    id: "arriendo",
    num: "I.",
    title: "Contrato de arriendo",
    body: "Lo redacto yo. Antes de que lo firmen, lo reviso contigo. Si algo no está claro o no te convence, lo cambiamos.",
  },
  {
    id: "promesa",
    num: "II.",
    title: "Promesa de compraventa",
    body: "La redacto yo o la reviso si ya te mandaron una. Antes de que tu cliente firme algo, me lo mandas. Si hay que ajustar una cláusula o negociar un plazo, lo hago antes de que se comprometan en algo que no está bien redactado.",
  },
  {
    id: "escritura",
    num: "III.",
    title: "Escritura de compraventa",
    body: "Cuando la compraventa es al contado, redacto la escritura y coordino con el notario y el Conservador. Si hay un banco o institución financiera de por medio, me encargo de recopilar todos los documentos y enviárselos a ellos. El día de la firma estoy ahí de todas formas.",
  },
  {
    id: "titulo",
    num: "IV.",
    title: "Estudio de títulos",
    body: "Reviso la historia de la propiedad. Si hay algo que no cuadra (una hipoteca, un embargo, un problema de inscripción), te aviso antes de que tu cliente firme, no después.",
  },
  {
    id: "saneamiento",
    num: "V.",
    title: "Saneamiento y alzamiento",
    body: "Cuando una propiedad tiene un problema en sus antecedentes, lo resuelvo. Regularizaciones, alzamiento de hipotecas, correcciones en el Conservador.",
  },
  {
    id: "reglamentos",
    num: "VI.",
    title: "Reglamentos de copropiedad",
    body: "Los redacto, los reviso o los modifico según lo que necesite el edificio o condominio. Si el reglamento actual ya no refleja cómo funciona la comunidad, lo actualizamos.",
  },
];

function Services({ setRoute, setService }) {
  return (
    <section id="servicios" className="section services">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Cómo trabajo</div>
          <h2 className="section-title">
            ¿Necesitas algo que <em>no está aquí?</em><br />
            Para eso también estoy.
          </h2>
        </div>
        <p className="section-lede">
          No soy la abogada que aparece solo a firmar. Trabajo contigo desde antes. Reviso, te aviso, coordino con el corredor y el notario, y respondo cuando me escribes. Así se ve la relación.
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
