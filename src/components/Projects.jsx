 
import b2bImage from "../assets/b2b-saas.png";
import walletImage from "../assets/wallet-system.png";
import quickAIImage from "../assets/quick-ai.png";
import investigationImage from "../assets/internet-is-lying.png";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const projects = [
  {
    number: "01",
    title: "Multi-Tenant B2B SaaS Backend",
    category: "BACKEND ENGINEERING",
    description:
      "A multi-tenant platform with authentication, tenant, user, subscription and workspace management.",
    image: b2bImage,
    technologies:
      "Java 21 · Spring Boot · PostgreSQL · Redis · Kafka",
    github:
      "https://github.com/iamvishalgupta92-ui/cloudcore-saas-platform",
  },
  {
    number: "02",
    title: "Distributed Ledger & Wallet System",
    category: "DISTRIBUTED SYSTEMS",
    description:
      "A wallet platform with transaction APIs, JWT authentication, idempotency controls and asynchronous event processing.",
    image: walletImage,
    technologies:
      "Spring Boot · Kafka · Redis · PostgreSQL",
    github:
      "https://github.com/iamvishalgupta92-ui/wallet-ledger-backend",
  },
  {
    number: "03",
    title: "The Internet Is Lying",
    category: "AI INVESTIGATION PLATFORM",
    description:
      "A digital investigation platform for managing cases, clues, digital evidence, people and investigation notes.",
    image: investigationImage,
    technologies:
      "React · Java · Spring Boot · Gemini AI",
    github:
      "https://github.com/iamvishalgupta92-ui/the-internet-is-lying",
  },
  {
    number: "04",
    title: "Quick AI",
    category: "FULL STACK APPLICATION",
    description:
      "An AI-powered web application with article writing, blog title generation, image tools and resume review features.",
    image: quickAIImage,
    technologies:
      "React · JavaScript · PostgreSQL · REST APIs",
    github:
      "https://github.com/iamvishalgupta92-ui/QuickAI-Full-Stack",
  },
  {
    number: "05",
    title: "Import Export ERP System",
    category: "INTERNSHIP PROJECT",
    description:
      "A five-module ERP system covering login, profiles, products, orders and reports. Owned Product Management and coordinated end-to-end module integration.",
    image: null,
    technologies: "Java · JDBC · MySQL · JSP",
    github: null,
  },
];

export default function Projects() {
  return (
    <section className="section section-border" id="projects">
      <div className="section-heading">
        <p className="eyebrow">PORTFOLIO / SELECTED WORK</p>

        <h2>Discover what I've built.</h2>

        <p className="section-description">
          A selection of projects focused on backend engineering,
          APIs, distributed systems and practical problem-solving.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
              ) : (
                <div className="project-placeholder">
                  <span>ERP</span>
                  <small>IMPORT / EXPORT MANAGEMENT</small>
                </div>
              )}
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-bottom">
                <span className="project-stack">
                  {project.technologies}
                </span>

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GitHubIcon />
                    <span>View Source</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
