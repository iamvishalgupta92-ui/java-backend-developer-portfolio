 
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "postgresql" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "REST APIs", icon: "api" },
      { name: "JDBC", icon: "database" },
      { name: "JPA / Hibernate", icon: "hibernate" },
      { name: "JSP", icon: "code" },
    ],
  },
  {
    title: "Database & Messaging",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Apache Kafka", icon: "apachekafka" },
      { name: "Flyway", icon: "flyway" },
    ],
  },
  {
    title: "Frontend & Developer Tools",
    skills: [
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Maven", icon: "apachemaven" },
      { name: "Postman", icon: "postman" },
      { name: "JUnit", icon: "junit5" },
    ],
  },
];

const customIcons = {
  api: "M12 3v18m-9-9h18 M7 7l-4 5 4 5 M17 7l4 5-4 5",
  database:
    "M12 3C7 3 4 4.5 4 6s3 3 8 3 8-1.5 8-3-3-3-8-3Z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14",
  layers:
    "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5",
  workflow:
    "M6 3v6m0 0a3 3 0 1 0 0 6m0-6h12m0 0a3 3 0 1 1 0 6m-12 0v6",
  shield: "M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z",
  binary: "M8 4H5v6h3V4Zm11 10h-3v6h3v-6ZM5 20h14M5 4h14",
  monitor: "M3 4h18v13H3zM8 21h8m-4-4v4",
};

function SkillIcon({ icon }) {
  if (icon === "java") {
    return (
      <i
        className="devicon-java-plain colored skill-icon"
        aria-hidden="true"
      />
    );
  }

  if (customIcons[icon]) {
    return (
      <svg
        className="skill-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={customIcons[icon]} />
      </svg>
    );
  }

  return (
    <img
      className="skill-icon"
      src={`https://cdn.simpleicons.org/${icon}`}
      alt=""
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

export default function Skills() {
  return (
    <section className="skills section-wrap" id="skills">
      <div className="section-heading">
        <p className="eyebrow">WHAT I WORK WITH</p>

        <h2>
          Technical Skills<span className="white-dot">.</span>
        </h2>

        <p className="section-description">
          Technologies and fundamentals I use to build reliable applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill.name}>
                  <SkillIcon icon={skill.icon} />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
