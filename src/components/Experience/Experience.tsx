import { experiences } from '../../data/experience';

import './Experience.css';

export function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="container">
        <p className="section-label">
          03 — EXPERIENCIA
        </p>

        <div className="experience-header">
          <h2>
            Experiencia
            <br />
            profesional.
          </h2>

          <p>
            Experiencia en desarrollo de software,
            mantenimiento de sistemas, desarrollo Full
            Stack, bases de datos y soluciones cloud.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map(
            (experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="experience-item"
              >
                {/* =========================
                    TIMELINE
                ========================= */}

                <div className="experience-marker">
                  <span>
                    {String(index + 1).padStart(
                      2,
                      '0',
                    )}
                  </span>
                </div>

                {/* =========================
                    DATE
                ========================= */}

                <div className="experience-date">
                  {experience.period}
                </div>

                {/* =========================
                    CONTENT
                ========================= */}

                <div className="experience-content">
                  <div className="experience-title">
                    <h3>
                      {experience.position}
                    </h3>

                    <h4>
                      {experience.company}
                      <span>
                        {' '}
                        · {experience.location}
                      </span>
                    </h4>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li
                          key={responsibility}
                        >
                          {responsibility}
                        </li>
                      ),
                    )}
                  </ul>

                  <div className="experience-technologies">
                    {experience.technologies.map(
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
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
