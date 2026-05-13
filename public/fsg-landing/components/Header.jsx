/* Header component */
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    { id: "top", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "sobre-mi", label: "Sobre mí" },
  ];

  const go = (anchor) => {
    setMenuOpen(false);
    if (anchor === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => go("top")}>
          <img className="brand-logo-wide" src="assets/fsg-logo-wide.png" alt="FSG Derecho Inmobiliario" />
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.id === "top" ? "#" : "#" + l.id}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={window.WA_URL} target="_blank" rel="noopener noreferrer">
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
              href={l.id === "top" ? "#" : "#" + l.id}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={window.WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Conversemos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
