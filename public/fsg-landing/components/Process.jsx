function Process() {
  const steps = [
    { n: "Uno", title: "Un café primero", body: "Me cuentas qué estás comprando, vendiendo o arrendando. Te digo qué conviene mirar y si tiene sentido que trabaje contigo." },
    { n: "Dos", title: "Reviso lo importante", body: "Antecedentes, títulos, lo que ya te mandaron a firmar. Lo leo en detalle y te aviso por escrito lo que encuentro." },
    { n: "Tres", title: "Redacto o ajusto", body: "Promesa, contrato, mandatos, escritura. Lo dejo a tu medida y te explico cada cláusula que importa." },
    { n: "Cuatro", title: "Hasta el Conservador", body: "Coordino con la corredora, el banco y el notario. El día de la firma estoy ahí. Verifico la inscripción." },
  ];
  return (
    <section className="section process">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Así avanzamos</div>
          <h2 className="section-title">Cuatro pasos, <em>una relación.</em></h2>
        </div>
        <p className="section-lede">
          No es una lista de entregables. Es la forma en que trabajo cada operación. Te mantengo al tanto en cada paso — con plazos claros, todo por escrito, y disponible cuando me escribes.
        </p>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.n} className="step">
            <div className="n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
