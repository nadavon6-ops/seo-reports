/* Header component */
function Header({ route, setRoute, onOpenModal }) {
  const links = [
    { id: "home", label: "Inicio" },
    { id: "services", label: "Servicios" },
    { id: "about", label: "Sobre mí" },
    { id: "contact", label: "Contacto" },
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => setRoute("home")}>
          <img className="brand-logo-wide" src="assets/fsg-logo-wide.png" alt="FSG Derecho Inmobiliario" />
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={route === l.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setRoute(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>
          Agendar
        </a>
      </div>
    </header>
  );
}

window.Header = Header;
