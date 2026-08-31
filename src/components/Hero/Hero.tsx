import {
  ArrowDownToLine,
  Mail,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import './Hero.css';

export function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="container hero-content">
        {/* =========================
            HERO TEXT
        ========================= */}

        <div className="hero-text">
          <div className="availability">
            <span className="availability-dot"></span>

            Disponible para oportunidades
          </div>

          <p className="hero-label">
            FULL STACK DEVELOPER
          </p>

          <h1>
            Enzo
            <br />
            <span>Velarde.</span>
          </h1>

          <p className="hero-description">
            Desarrollador de software Full Stack
            con experiencia en desarrollo web y
            móvil. Especializado en la construcción
            de aplicaciones, APIs REST, bases de
            datos y soluciones orientadas a resolver
            problemas reales.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="button button-primary"
            >
              Ver proyectos
            </a>

            <a
              href="/Enzo-Velarde-CV.pdf"
              download
              className="button button-secondary"
            >
              <ArrowDownToLine size={17} />

              Descargar CV
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/enzo-velarde"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} />

              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Trubekan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />

              <span>GitHub</span>
            </a>

            <a
              href="mailto:enzo.velarde@tecsup.edu.pe"
              aria-label="Correo electrónico"
            >
              <Mail size={19} />

              <span>Email</span>
            </a>
          </div>
        </div>

        {/* =========================
            DEVELOPER CARD
        ========================= */}

        <div className="hero-decoration">
          <div className="developer-card">
            <div className="developer-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                developer.ts
              </span>
            </div>

            <div className="developer-code">
              <div>
                <span className="code-purple">
                  const
                </span>{' '}

                <span className="code-white">
                  developer
                </span>{' '}

                = {'{'}
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  name
                </span>
                :{' '}
                <span className="code-green">
                  "Enzo Velarde"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  role
                </span>
                :{' '}
                <span className="code-green">
                  "Full Stack Developer"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  frontend
                </span>
                :{' '}
                <span className="code-green">
                  "React + TypeScript"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  backend
                </span>
                :{' '}
                <span className="code-green">
                  "Node.js + Django"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  database
                </span>
                :{' '}
                <span className="code-green">
                  "PostgreSQL + MySQL"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  mobile
                </span>
                :{' '}
                <span className="code-green">
                  "Flutter + Kotlin + Java"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-blue">
                  cloud
                </span>
                :{' '}
                <span className="code-green">
                  "AWS"
                </span>
              </div>

              <div>
                {'}'};
              </div>
            </div>

            <div className="developer-card-footer">
              <span className="status-dot"></span>

              Building something great...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
