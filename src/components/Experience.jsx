 
const technologies = [
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "JDBC", icon: "devicon-java-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JSP", icon: "devicon-java-plain colored" },
  { name: "Servlets", icon: "devicon-java-plain colored" },
  { name: "MySQL Workbench", icon: "devicon-mysql-plain colored" },
  { name: "DBMS", icon: "devicon-azuresqldatabase-plain colored" },
];

export default function Experience() {
  return (
    <section className="section section-border" id="experience">
      <div className="section-heading">
        <p className="eyebrow">EXPERIENCE</p>
        <h2>Where I've contributed.</h2>
      </div>

      <article className="experience-card">
        <div className="experience-date">
          <span className="experience-dot" />
          <span>JUN 2025 — JAN 2026</span>
        </div>

        <div className="experience-details">
          <p className="experience-company">SDAC</p>
          <h3>Software Developer Intern</h3>

          <p className="experience-summary">
            Contributed to the development and integration of a
            web-based Import Export ERP System.
          </p>

          <ul>
            <li>
              Collaborated with a five-member team to develop the
              Import Export ERP System.
            </li>
            <li>
              Owned the Product Management module and coordinated
              end-to-end integration across all five modules.
            </li>
            <li>
              Developed and tested backend functionality using
              Java, JDBC, MySQL, JSP and Servlets.
            </li>
            <li>
              Debugged application issues and optimized MySQL
              queries through indexing and query restructuring.
            </li>
          </ul>

          <div className="experience-tech">
            <p className="experience-tech-title">TECHNOLOGIES USED</p>

            <div className="experience-tech-list">
              {technologies.map((tech) => (
                <span className="experience-tech-item" key={tech.name}>
                  <i
                    className={`${tech.icon} experience-tech-icon`}
                    aria-hidden="true"
                  />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
