import { useEffect, useRef } from "react";
import "./Landing.css";

const STACK_GROUPS = [
  { key: "Languages", items: ["C++", "Java", "JavaScript", "SQL"] },
  {
    key: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "FastAPI",
      "REST APIs",
      "Microservices",
    ],
  },
  { key: "Database", items: ["MySQL"] },
  { key: "Frontend", items: ["React.js", "Tailwind"] },
  {
    key: "Cloud & AI",
    items: ["AWS", "Microsoft Foundry Local", "RAG", "Vector DB"],
  },
  {
    key: "Tools",
    items: ["Git", "GitHub", "Maven", "Postman", "API Gateway", "DSA"],
  },
];

const WORK_EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Capgemini, Bangalore, India",
    period: "Aug 2025 — Present",
    groups: [
      {
        title: "Backend & Microservices",
        points: [
          "Developed and maintained backend microservices using Spring Boot and Spring Security for internal production systems.",
          "Designed and implemented RESTful APIs, integrating them with downstream services and databases to support core application workflows.",
          "Collaborated with cross-functional teams to build, test, and deploy Spring Boot services to production environments.",
        ],
      },
      {
        title: "Applied AI — Incident Intelligence",
        points: [
          "Designed and built an AI agent using LLMs and a Retrieval-Augmented Generation (RAG) pipeline (embeddings + vector database) to detect and surface similar past production incidents, reducing manual investigation effort for on-call engineers.",
          "Engineered root-cause analysis and pattern-detection logic comparing incoming incidents against historical high-impact cases to speed up incident triage.",
          "Implemented early-warning alerts for incidents matching past high-severity outage patterns using MS Foundry Local and custom data schemas, enabling proactive investigation by on-call and SRE teams.",
        ],
      },
    ],
  },
];

const EDUCATION = [
  {
    role: "B.Tech, Computer Science",
    org: "JECRC University, Jaipur — CGPA 9.12/10",
    period: "Jul 2021 — Jul 2025",
  },
];

const PROJECTS = [
  {
    name: "HireMe AI — Microservices Job Portal",
    stack:
      "React.js · Spring Boot · Microservices · Python · Groq · RAG · Vector DB",
    points: [
      "Building a full-stack job portal with a React.js frontend and Spring Boot microservices backend, supporting Admin, Candidate, and Recruiter roles with role-based dashboards.",
      "Designed independent microservices for Auth, Candidate, Job, and Resume domains, with an API Gateway planned to unify routing and access control.",
      "Developing an AI-driven resume analyzer using Python, Groq, and a vector database, applying RAG to score resumes against job descriptions and surface skill/experience gaps for recruiters.",
    ],
  },
  {
    name: "AI-Enabled Resume Portfolio Assistant",
    stack: "React.js · FastAPI · Groq API",
    points: [
      "Designed and built a personal portfolio site with React.js to present projects, experience, and skills in an interactive format.",
      "Integrated a conversational AI assistant, powered by the Groq API through a FastAPI backend, that answers visitor questions about my resume in real time.",
      "Grounded chatbot responses strictly in my actual resume data to ensure accurate, hallucination-free answers about my background.",
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
          Software Engineer with 1+ year of experience building backend
          microservices in Java and Spring Boot, with a growing focus on applied
          AI — LLMs, RAG pipelines, and vector databases — layered on top of
          production systems.
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
            <span className="spec-value">Backend / Applied AI</span>
          </div>
          <div className="spec-field">
            <span className="spec-label">Location</span>
            <span className="spec-value">Bangalore, IN</span>
          </div>
          <div className="spec-field">
            <span className="spec-label">Stack</span>
            <span className="spec-value">Java · Spring Boot · RAG</span>
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
