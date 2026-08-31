import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './Contact.css';

export function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="container">
        <p className="section-label">
          05 — CONTACTO
        </p>

        <div className="contact-content">
          <div className="contact-main">
            <h2>
              ¿Trabajamos
              <br />
              juntos?
            </h2>

            <p>
              Estoy interesado en oportunidades donde
              pueda seguir creciendo como Full Stack
              Developer y aportar soluciones mediante
              tecnología.
            </p>

            <a
              href="mailto:enzo.velarde@tecsup.edu.pe"
              className="contact-email"
            >
              <Mail size={18} />

              <span>
                enzo.velarde@tecsup.edu.pe
              </span>

              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-social">
            <p>
              También puedes encontrarme en:
            </p>

            <div className="contact-social-links">
              <a
                href="https://www.linkedin.com/in/enzo-velarde"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={18} />

                <span>LinkedIn</span>

                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/Trubekan"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} />

                <span>GitHub</span>

                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <span>
            ¿Tienes un proyecto o una oportunidad?
          </span>

          <span>
            Hablemos.
          </span>
        </div>
      </div>
    </section>
  );
}
