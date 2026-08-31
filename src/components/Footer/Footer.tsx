import { ArrowUp } from 'lucide-react';

import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a
            href="#home"
            className="footer-logo"
          >
            Enzo<span>.</span>
          </a>

          <p>
            Full Stack Developer
          </p>
        </div>

        <div className="footer-center">
          <p>
            © {currentYear} Enzo Velarde Hernandez.
          </p>

          <p>
            Todos los derechos reservados.
          </p>
        </div>

        <a
          href="#home"
          className="footer-top"
          aria-label="Volver al inicio"
        >
          <span>Volver arriba</span>

          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
