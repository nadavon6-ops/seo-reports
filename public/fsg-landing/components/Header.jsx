/* Header component */
function Header({ route, setRoute, onOpenModal }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    { id: "home", label: "Inicio" },
    { id: "services", label: "Servicios" },
    { id: "about", label: "Sobre mí" },
    { id: "contact", label: "Contacto" },
  ];

  const go = (id) => {
    setRoute(id);
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => go("home")}>
          <img className="brand-logo-wide" src="assets/fsg-logo-wide.png" alt="FSG Derecho Inmobiliario" />
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={route === l.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>
          Conversemos
        </a>
        <button
          className={"nav-burger" + (menuOpen ? " open" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={route === l.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="nav-mobile-cta"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); onOpenModal(); }}
          >
            Tomémonos un café
          </a>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
