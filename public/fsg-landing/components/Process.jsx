function Process() {
  const steps = [
    { n: "Uno", title: "Primera reunión", body: "Conversamos sobre la operación, los antecedentes y las expectativas. Sin compromiso." },
    { n: "Dos", title: "Revisión documental", body: "Reviso antecedentes, estudio de títulos y preparo observaciones por escrito." },
    { n: "Tres", title: "Redacción", body: "Redacto o ajusto los instrumentos: promesa, contrato, mandatos y escritura." },
    { n: "Cuatro", title: "Firma notarial", body: "Acompañamiento en notaría hasta la inscripción en el Conservador." },
  ];
  return (
    <section className="section process">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Metodología</div>
          <h2 className="section-title">Un proceso <em>ordenado.</em></h2>
        </div>
        <p className="section-lede">
          Cada operación atraviesa las mismas cuatro etapas. Le mantengo informado en cada paso, con plazos claros y documentación escrita.
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
