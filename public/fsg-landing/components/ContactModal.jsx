function ContactModal({ onClose }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ nombre: "", correo: "", tipo: "Estudio de título", mensaje: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        {!sent ? (
          <>
            <h2>Agendar reunión</h2>
            <p className="modal-lede">Le responderé dentro de 24 horas hábiles para coordinar día y hora.</p>
            <div className="field">
              <label>Nombre completo</label>
              <input value={form.nombre} onChange={update("nombre")} placeholder="Juan Pérez" />
            </div>
            <div className="field">
              <label>Correo electrónico</label>
              <input value={form.correo} onChange={update("correo")} placeholder="juan@ejemplo.cl" />
            </div>
            <div className="field">
              <label>Tipo de consulta</label>
              <select value={form.tipo} onChange={update("tipo")}>
                <option>Estudio de título</option>
                <option>Contrato de compraventa</option>
                <option>Promesa</option>
                <option>Escritura</option>
                <option>Otra consulta</option>
              </select>
            </div>
            <div className="field">
              <label>Breve descripción</label>
              <textarea value={form.mensaje} onChange={update("mensaje")} placeholder="Resumen de la operación..." />
            </div>
            <button className="btn solid" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSent(true)}>
              Enviar solicitud
            </button>
          </>
        ) : (
          <div className="modal-success">
            <div className="ok">✓</div>
            <h3>Solicitud recibida</h3>
            <p>Le responderé dentro de 24 horas hábiles al correo indicado.</p>
            <div style={{ height: 24 }} />
            <button className="btn ghost-dark" onClick={onClose} style={{ justifyContent: "center" }}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ContactModal = ContactModal;
