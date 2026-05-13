function Process() {
  const blocks = [
    {
      step: "01",
      title: "Conversemos primero",
      body: "Me cuentas qué operación tienes en curso. Si eres corredora, me pones en contexto. Si eres el cliente, me cuentas qué estás comprando, vendiendo o arrendando. De ahí vemos cómo lo trabajamos.",
    },
    {
      step: "02",
      title: "Reviso todo antes de que firmen",
      body: "Antecedentes, títulos, lo que ya mandaron para firmar. Lo leo en detalle y te aviso por escrito lo que encuentro. Nada queda sin revisar.",
    },
    {
      step: "03",
      title: "Redacto, ajusto y coordino",
      body: "Promesa, contrato, escritura, lo que corresponda. Me encargo de la redacción y coordino con quien haya que coordinar. Tú te enfocas en tu operación.",
    },
    {
      step: "04",
      title: "La operación termina, la relación no",
      body: "El día de la firma estoy ahí. Verifico que la inscripción quede bien hecha. Y cuando venga la siguiente operación, ya sé cómo trabajas, ya te conozco y seguimos desde donde lo dejamos.",
    },
  ];

  const delays = [0, 120, 240, 360];

  return (
    <section className="section process">
      <div className="section-head" data-reveal>
        <div>
          <div className="section-eyebrow">Así avanzamos</div>
          <h2 className="section-title">Una relación,<br /><em>no una transacción.</em></h2>
        </div>
        <p className="section-lede">
          No es una lista de entregables. Es la forma en que trabajo cada operación. Te mantengo al tanto en cada paso, con plazos claros, todo por escrito, y disponible cuando me escribes.
        </p>
      </div>
      <div className="process-blocks">
        {blocks.map((b, i) => (
          <div key={b.title} className="process-block" data-reveal data-delay={delays[i]}>
            <span className="process-step" aria-hidden="true">{b.step}</span>
            <h4>{b.title}</h4>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
