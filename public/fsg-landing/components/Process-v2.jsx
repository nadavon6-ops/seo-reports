function Process() {
  const blocks = [
    {
      step: "01",
      title: "Conversemos primero",
      body: "Me cuentas qué operación tienes en curso. Si eres corredora, me pones en contexto. Si eres el cliente, me cuentas qué estás comprando, vendiendo o arrendando. Definimos juntos la forma de trabajar.",
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

  const refs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    if (!mq.matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

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
          <div
            key={b.title}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={"process-block" + (i === activeIndex ? " is-active" : "")}
          >
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
