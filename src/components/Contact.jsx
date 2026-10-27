 
const email = "selfvishalgupta@gmail.com";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.35h2.97v9.55ZM6.45 8.05a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.45 10.85h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.64V9.35h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.98 3.58 4.56v5.24Z" />
  </svg>
);

export default function Contact() {
  return (
    <section
      className="section section-border contact-section"
      id="contact"
    >
      <p className="eyebrow">HAVE AN OPPORTUNITY?</p>

      <h2>
        Let's build
        <br />
        something useful.
      </h2>

      <p className="contact-description">
        I'm looking for opportunities in Java backend development
        and software engineering. Let's connect.
      </p>

      <a className="button button-light" href={`mailto:${email}`}>
        Get in touch
      </a>

      <div className="contact-links">
        <a
          href="https://github.com/iamvishalgupta92-ui"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </div>

      <a className="contact-email" href={`mailto:${email}`}>
        {email}
      </a>
    </section>
  );
}
