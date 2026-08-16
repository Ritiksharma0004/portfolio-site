import { useEffect, useRef } from "react";
import "./Landing.css";

const STACK_GROUPS = [
  { key: "Languages", items: ["C++", "Java", "JavaScript", "SQL"] },
  {
    key: "Backend",
    items: ["Spring Boot", "Spring Security", "REST APIs", "Node.js"],
  },
  { key: "Database", items: ["MySQL"] },
  { key: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind"] },
  { key: "Tools", items: ["Git", "Maven", "Postman", "DSA"] },
];

const WORK_EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Capgemini, Bangalore, India",
    period: "Aug 2025 — Present",
    groups: [
      {
        title: "Authentication & Authorization",
        points: [
          "Implemented role-based authentication for application modules using Spring Security and JWT, securing REST endpoints across multiple user roles.",
          "Handled token generation and validation logic to restrict access based on user permissions.",
        ],
      },
      {
        title: "Full-Stack Feature Development",
        points: [
          "Contributed to production-ready features using Java, Spring Boot, and React.js, following a layered, maintainable architecture.",
          "Built and maintained RESTful APIs consumed by internal and client-facing applications, integrating with relational databases.",
          "Collaborated with cross-functional teams to translate business requirements into working backend and frontend implementations.",
        ],
      },
      {
        title: "Debugging & Support",
        points: [
          "Assisted in identifying and resolving issues in Java/Spring Boot services to support application stability.",
        ],
      },
    ],
  },
];

const EDUCATION = [
  {
    role: "B.Tech, Computer Science",
    org: "JECRC University, Jaipur — CGPA 9.21/10",
    period: "2021 — 2025",
  },
];

const PROJECTS = [
  {
    name: "Leave Management System",
    stack: "Java · Spring Boot · Spring Security · JPA · JWT · MySQL",
    points: [
      "Secure REST API with role-based access across employee, manager, and admin roles.",
      "JWT-based stateless authentication with token generation and session handling.",
      "10+ REST endpoints for leave submission and approval workflows, tested in Postman.",
    ],
  },
  {
    name: "HireMeAI — Resume Q&A Assistant",
    stack: "Python · FastAPI · Groq API · Pydantic · pypdf",
    points: [
      "Parses PDF resumes into structured JSON using a schema-constrained LLM pipeline built with Pydantic.",
      "Streams answers token-by-token via a FastAPI StreamingResponse endpoint, grounded strictly in the parsed resume — no hallucinated details.",
      "Handles resumes with inconsistent formatting by extracting information semantically rather than relying on fixed section headings.",
      "Deployed with a React frontend and FastAPI backend, connected via a CORS-configured REST API.",
      "Powers the 'Ask AI' assistant on this very site.",
    ],
  },
];

function useCursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return ref;
}

function Landing({ onOpenChat }) {
  const glowRef = useCursorGlow();

  return (
    <div className="light-page">
      <div className="cursor-glow" ref={glowRef} />

      <button
        className="ask-ai-fab reveal"
        style={{ "--d": "0s" }}
        onClick={onOpenChat}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Ask AI</span>
      </button>

      <nav className="nav reveal" style={{ "--d": "0s" }}>
        <span className="wordmark">Ritik Sharma</span>
        <span className="status-pill">
          <span className="status-dot" /> Available
        </span>
      </nav>

      <header className="hero">
        <span className="eyebrow reveal" style={{ "--d": "0.05s" }}>
          Software Engineer
        </span>
        <h1 className="hero-name reveal" style={{ "--d": "0.12s" }}>
          Ritik Sharma
        </h1>
        <p className="hero-pitch reveal" style={{ "--d": "0.2s" }}>
          Software Engineer with 1+ year of experience in full-stack development
          — Java, C++, and Spring Boot on the backend, React.js on the frontend.
          Strong foundation in data structures, algorithms, and secure REST API
          design.
        </p>

        <div className="meta-links reveal" style={{ "--d": "0.28s" }}>
          <a href="mailto:ritik.sde.sharma@gmail.com">Email</a>
          <a href="tel:8769812079">Phone</a>
          <a
            href="https://www.linkedin.com/in/ritik-sharma-1650r9096/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/CODE_RITIK/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </div>

        <div className="spec-strip reveal" style={{ "--d": "0.36s" }}>
          <div className="spec-field">
            <span className="spec-label">Role</span>
            <span className="spec-value">Full-Stack / Backend</span>
          </div>
          <div className="spec-field">
            <span className="spec-label">Location</span>
            <span className="spec-value">Bangalore, IN</span>
          </div>
          <div className="spec-field">
            <span className="spec-label">Stack</span>
            <span className="spec-value">Java · Spring Boot · React</span>
          </div>
          <div className="spec-field">
            <span className="spec-label">Status</span>
            <span className="spec-value accent">Open to opportunities</span>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section reveal" style={{ "--d": "0.42s" }}>
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">What I build with</h2>
          <div className="panel">
            {STACK_GROUPS.map((g) => (
              <div className="stack-row" key={g.key}>
                <span className="stack-label">{g.key}</span>
                <div className="chip-row">
                  {g.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" style={{ "--d": "0.48s" }}>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <div className="timeline">
            {WORK_EXPERIENCE.map((item) => (
              <div className="timeline-item" key={item.role}>
                <span className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-head">
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <span className="timeline-org">{item.org}</span>
                  <div className="timeline-groups">
                    {item.groups.map((group) => (
                      <div className="timeline-group" key={group.title}>
                        <span className="group-title">{group.title}</span>
                        <ul className="timeline-points">
                          {group.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" style={{ "--d": "0.54s" }}>
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Where I studied</h2>
          <div className="timeline">
            {EDUCATION.map((item) => (
              <div className="timeline-item" key={item.role}>
                <span className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-head">
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <span className="timeline-org">{item.org}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" style={{ "--d": "0.6s" }}>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">What I've shipped</h2>
          <div className="project-list">
            {PROJECTS.map((p) => (
              <div className="project-panel" key={p.name}>
                <span className="project-name">{p.name}</span>
                <div className="project-stack">{p.stack}</div>
                <ul className="project-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section footer-section reveal"
          style={{ "--d": "0.66s" }}
        >
          <span className="cert-stamp">
            CLF-C02 · AWS Certified Cloud Practitioner
          </span>
          <p className="footer-line">
            Always building, always learning — let's connect.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Landing;
