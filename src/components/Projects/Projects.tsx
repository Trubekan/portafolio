import {
  ExternalLink,
  LockKeyhole,
} from 'lucide-react';

import { projects } from '../../data/projects';

import './Projects.css';

export function Projects() {
  const personalProjects = projects.filter(
    (project) => !project.isPrivate,
  );

  const privateProjects = projects.filter(
    (project) => project.isPrivate,
  );

  return (
    <section
      id="projects"
      className="section section-dark projects-section"
    >
      <div className="container">
        <p className="section-label">
          04 — PROYECTOS
        </p>

        <div className="projects-header">
          <h2>
            Proyectos
            <br />
            seleccionados.
          </h2>

          <p>
            Una selección de proyectos personales y
            experiencia profesional. Algunos trabajos
            empresariales no pueden ser publicados por
            motivos de confidencialidad.
          </p>
        </div>

        {/* =========================
            PROYECTOS PERSONALES
        ========================= */}

        {personalProjects.length > 0 && (
          <div className="projects-group">
            <div className="projects-group-header">
              <span>01</span>

              <h3>
                Proyectos personales
              </h3>
            </div>

            <div className="projects-list">
              {personalProjects.map(
                (project) => (
                  <article
                    key={project.number}
                    className="project-card"
                  >
                    <div className="project-card-top">
                      <span className="project-number">
                        {project.number}
                      </span>

                      <span className="project-status">
                        {project.status}
                      </span>
                    </div>

                    <div className="project-card-content">
                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      <div className="project-technologies">
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                            >
                              {technology}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="project-card-footer">
                      <span>
                        Proyecto en desarrollo
                      </span>

                      <ExternalLink
                        size={17}
                      />
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        )}

        {/* =========================
            PROYECTOS PRIVADOS
        ========================= */}

        {privateProjects.length > 0 && (
          <div className="projects-group private-projects">
            <div className="projects-group-header">
              <span>02</span>

              <h3>
                Experiencia profesional
              </h3>
            </div>

            <div className="private-project-card">
              <div className="private-project-icon">
                <LockKeyhole size={22} />
              </div>

              <div className="private-project-content">
                <h3>
                  Sistemas empresariales
                </h3>

                <p>
                  Durante mi experiencia profesional he
                  participado en el desarrollo,
                  mantenimiento y evolución de sistemas
                  internos utilizados por empresas.
                </p>

                <p>
                  Debido a acuerdos de confidencialidad y
                  propiedad intelectual, el código fuente,
                  capturas de pantalla y detalles internos
                  de estos sistemas no se encuentran
                  disponibles públicamente.
                </p>

                <div className="project-technologies">
                  {privateProjects[0].technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="private-project-status">
                <LockKeyhole size={15} />

                Proyecto privado
              </div>
            </div>
          </div>
        )}

        {/* =========================
            FUTUROS PROYECTOS
        ========================= */}

        <div className="projects-footer">
          <p>
            Más proyectos personales serán publicados
            próximamente.
          </p>
        </div>
      </div>
    </section>
  );
}
