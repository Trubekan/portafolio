import { skillCategories } from '../../data/skills';

import './Skills.css';

export function Skills() {
  return (
    <section
      id="skills"
      className="section section-dark skills-section"
    >
      <div className="container">
        <p className="section-label">
          02 — SKILLS
        </p>

        <div className="skills-header">
          <h2>Stack tecnológico</h2>

          <p>
            Tecnologías y herramientas que he utilizado
            durante mi formación y experiencia profesional.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(
            (category) => (
              <article
                key={category.title}
                className="skill-category"
              >
                <div className="skill-category-header">
                  <span className="skill-category-number">
                    {String(
                      skillCategories.indexOf(
                        category,
                      ) + 1,
                    ).padStart(2, '0')}
                  </span>

                  <h3>
                    {category.title}
                  </h3>
                </div>

                <div className="skill-list">
                  {category.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
