import './Navbar.css';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a
          href="#home"
          className="logo"
          aria-label="Ir al inicio"
        >
          Enzo<span>.</span>
        </a>

        <nav
          className="nav-links"
          aria-label="Navegación principal"
        >
          <a href="#about">Sobre mí</a>

          <a href="#skills">Skills</a>

          <a href="#experience">
            Experiencia
          </a>

          <a href="#projects">
            Proyectos
          </a>

          <a href="#contact">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
