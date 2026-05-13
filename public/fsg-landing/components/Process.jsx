function Process() {
  const blocks = [
    {
      title: "Conversemos primero",
      body: "Me cuentas qué operación tienes en curso. Si eres corredora, me pones en contexto. Si eres el cliente, me cuentas qué estás comprando, vendiendo o arrendando. De ahí vemos cómo lo trabajamos.",
    },
    {
      title: "Reviso todo antes de que firmen",
      body: "Antecedentes, títulos, lo que ya mandaron para firmar. Lo leo en detalle y te aviso por escrito lo que encuentro. Nada queda sin revisar.",
    },
    {
      title: "Redacto, ajusto y coordino",
      body: "Promesa, contrato, escritura, lo que corresponda. Me encargo de la redacción y coordino con quien haya que coordinar. Tú te enfocas en tu operación.",
    },
    {
      title: "La operación termina, la relación no",
      body: "El día de la firma estoy ahí. Verifico que la inscripción quede bien hecha. Y cuando venga la siguiente operación, ya sé cómo trabajas, ya te conozco y seguimos desde donde lo dejamos.",
    },
  ];
  return (
    <section className="section process">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Así avanzamos</div>
          <h2 className="section-title">Una relación,<br /><em>no una transacción.</em></h2>
        </div>
        <p className="section-lede">
          No es una lista de entregables. Es la forma en que trabajo cada operación. Te mantengo al tanto en cada paso, con plazos claros, todo por escrito, y disponible cuando me escribes.
        </p>
      </div>
      <div className="process-blocks">
        {blocks.map((b) => (
          <div key={b.title} className="process-block">
            <h4>{b.title}</h4>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
