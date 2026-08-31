import './About.css';

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="section-label">
          01 — SOBRE MÍ
        </p>

        <div className="about-header">
          <h2>
            Construyo soluciones,
            <br />
            no solo código.
          </h2>

          <div className="about-content">
            <p>
              Soy desarrollador de software Full Stack
              y egresado de Diseño y Desarrollo de
              Software en TECSUP.
            </p>

            <p>
              Cuento con experiencia en desarrollo de
              aplicaciones web y móviles, participando
              en proyectos desde el frontend y backend
              hasta el diseño y administración de bases
              de datos.
            </p>

            <p>
              También tengo experiencia trabajando con
              sistemas existentes, realizando
              mantenimiento, corrección de errores y
              refactorización de código para mejorar la
              estabilidad, confiabilidad y rendimiento
              del software.
            </p>
          </div>
        </div>

        <div className="about-highlight">
          <span className="about-highlight-number">
            01
          </span>

          <div>
            <h3>Full Stack Development</h3>

            <p>
              Desarrollo soluciones de extremo a extremo,
              desde interfaces web y aplicaciones móviles
              hasta APIs, bases de datos e infraestructura
              cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
