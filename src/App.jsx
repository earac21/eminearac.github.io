import "./style.css";
import { useState, useEffect } from "react";

function FolderPanel({ title, items, onClose }) {
  return (
    <div className={`folder ${open ? "open-folder" : ""}`}>
      <div className="folder-panel-header">
        <h2>{title}</h2>
        <button onClick={onClose} className="close-btn">✖</button>

      </div>
      <div className="folder-panel">
        {title === "Projects" && (
          <div className="projects-list">
            {items.map((p, i) => (
              <div key={i} className="project-card">
                <h3>{p.title}</h3>
                {p.info && <p>{p.info}</p>}
                {p.tech && <p><b>Built with:</b> {p.tech.join(", ")}</p>}
                {(p.link || p.linkNote) && (
                  <p>
                    <b>Link:</b>{" "}
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.link}
                      </a>
                    ) : (
                      <span>{p.linkNote}</span>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {title === "Skills" && (
          <div className="skills-list">
            {items.map((group, groupIndex) => (
              <div key={group.title} className="skills-group">
                <div className="skills-title">{group.title}:</div>
                <div className="skills-row">
                  {group.items.map((s, i) => (
                    <span key={`${groupIndex}-${i}`} className="skills-item">
                      {s}
                      {i < group.items.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {title === "Experience" && (
          <div className="experience-list">
            {items.map((e, i) => (
              <div key={i} className="experience-item">
                <h3>{e.title}</h3>
                {e.duration && <p>{e.duration}</p>}
                {e.info && <p>{e.info}</p>}
              </div>
            ))}
          </div>
        )}

        {title === "Communication" && (
          <ul className="list">
            {items.map((item, i) => (
              <li key={i}>
                {item.title}: {item.info}
              </li>))}
          </ul>
        )}

        {/* Default fallback */}
        {title !== "Projects" && title !== "Skills" && title !== "Experience" && title !== "Communication" && (
          <ul className="list">
            {items.map((item, i) => (
              <li key={i}>
                {item.title} {item.info}
              </li>))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default function App() {
  const profile = {
    name: "Emine Zülal Araç",
    role: "Software Engineer • AI & Data",
    location: "Istanbul, TR",
    email: "eminezulalarac@gmail.com",
  };

  const images = ["/welcome.png", "/el.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);


  const [activeFolder, setActiveFolder] = useState(null);

  const projects = [
    {
      title: "Customs Shield & X-Ray Systems",
      info: "I worked on the end-to-end development of the Customs Shield and X-Ray products, taking part in data ingestion, document classification, and backend service integration. I developed and tested FastAPI endpoints for AI-driven document processing, validated workflows with Postman, and used Docker to containerize services for reliable and reproducible deployments.",
      tech: ["Python", "FastAPI", "Docker", "Postman"],
      link: "",
      linkNote: "Code not publicly available (company project)",
    },
    {
      title: "Clash Royale–Inspired Strategy Game",
      info: "This project is a strategy-based game inspired by Clash Royale, where I focused on designing and implementing the core gameplay mechanics using Java and JavaFX. I worked on unit deployment, movement, and in-arena interactions, building the underlying game logic that brings these elements together into a playable experience.",
      tech: ["Java", "JavaFX", "Object-Oriented Programming"],
      link: "https://github.com/earac21"
    },
    {
      title: "Roadside Assistance Website",
      info: "I built a vehicle rescue web application with React to help users quickly reach roadside assistance when needed. I designed a clean and intuitive interface that prioritizes speed and ease of use in urgent situations.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/earac21"
    },
    {
      title: "Web Scraping Pipeline",
      info: "In this project, I built a web scraping pipeline to collect and structure data from static and dynamic web pages. I worked on handling pagination, managing dynamically loaded content, and cleaning the extracted data to make it suitable for analysis and further use.",
      tech: ["Python", "BeautifulSoup", "Selenium"],
      link: "",
      linkNote: "Code not publicly available (company project)",
    },
    {
      title: "Portfolio Site",
      info: "This portfolio website was built to showcase my projects and technical background with a clean and responsive design.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "earac21.github.io"
    }
  ];

  const experience = [
    { title: "ATEZ Software Technologies - AI & Data Analytics", duration: "Aug. 2024 – Present", info: "As an AI & Data Analytics Intern at ATEZ Software Technologies, I worked on the Customs Shield and X-Ray products from start to finish. I was involved in data ingestion, document classification, and backend service development using FastAPI, integrating AI-driven pipelines into production-ready systems. I gained hands-on experience with machine learning–based document categorization, API testing with Postman, and containerization with Docker to support reliable deployments. The project also involved working extensively with XML and PDF data and leveraging Google Document AI to extract and structure customs-related information." },
    { title: "Geleceğe İlerleyen Kadınlar – Şişecam & Turkishe ", duration: "Sep. 2025 – March 2026", info: "As a participant in the “Geleceğe İlerleyen Kadınlar” program by Şişecam and Turkishe, I took part in structured trainings focused on communication, career planning, and professional skills. I also received mentorship from experienced professionals, which helped me gain valuable insights into leadership, career development, and navigating professional environments." },
    { title: "Koç University – Teaching Assistant for Introduction to Python and Calculus", duration: "Sep. 2023 – Jan. 2024", info: "As a Teaching Assistant at Koç University, I worked closely with students in the Introduction to Python and Calculus courses. I supported them through hands-on coding sessions to strengthen their understanding of Python fundamentals, while also helping them grasp key calculus concepts. This role allowed me to develop strong communication skills and gain experience in explaining complex technical and mathematical ideas in an accessible way." },
    { title: "KU The Office of International Programs – Exchange Student Mentor", duration: "Jan 2024 - Sep. 2024", info: "As an Exchange Student Mentor at Koç University’s Office of International Programs, I supported incoming exchange students by providing practical guidance on academic life and campus resources. I focused on creating a welcoming and supportive environment to ease their adaptation process, while sharing academic experiences and study tips to help them thrive in a new educational and cultural setting." },
    { title: "AIESEC – Outgoing Global Talent Team Member", duration: "Sep. 2023 – Jan. 2024", info: "As a member of the Outgoing Global Talent team at AIESEC, I contributed to collaborative efforts in international talent management and development. I worked within a diverse team environment, supporting global talent initiatives and gaining experience in teamwork, communication, and cross-cultural collaboration." },
    { title: "Kopilot - YKS Tutor", duration: "Jul. 2020 – Jan. 2022", info: "I worked as a YKS tutor, supporting students in their exam preparation process by curating practice questions and guiding them on effective problem-solving strategies. I helped students develop structured approaches to question selection and exam techniques, while adapting explanations to different learning styles." }
  ];

  const extracurriculars = [
    { title: "Exchange Student Mentor, Koç University Office of International Programs" },
    { title: "Volunteer, Koç University Volunteers" },
    { title: "Vice President, Koç University Science Club" },
    { title: "Accountant, Koç University IEEE Student Branch" },
    { title: "Team member, Koç University Basketball Team" },
  ]

  const communication = [
    {
      title: "Address",
      info: "Istanbul, Turkey"
    },
    {
      title: "Email",
      info: "eminezulalarac@gmail.com"
    },
    {
      title: "Linkedin",
      info: (
        <a
          href="https://www.linkedin.com/in/emine-zülal-araç-a9409b219"
          target="_blank"
          rel="noreferrer"
        >
          Visit my profile
        </a>
      )
    },
    {
      title: "Resume",
      info: <a href="/CV GUNCEL.pdf" target="_blank" rel="noreferrer">
        <img src="/CV GUNCEL.png" alt="Download" style={{ width: "95%", maxWidth: "800px" }} />
      </a>
    },

  ]


  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS", "R"],
    },
    {
      title: "Developer Tools",
      items: ["Git", "Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "Eclipse"],
    },
    {
      title: "Frameworks",
      items: ["React", " Node.js", "FastAPI"],
    },
    {
      title: "Visual Design",
      items: ["GIMP", "Canva (visual assets, layouts)", "Basic UI design for games and web projects."],
    },

  ];

  const getItems = () => {
    if (activeFolder === "Projects") return projects;
    if (activeFolder === "Experience") return experience;
    if (activeFolder === "Skills") return skills;
    if (activeFolder === "Github") return github;
    if (activeFolder === "Extracurriculars") return extracurriculars;
    if (activeFolder === "Communication") return communication;
    return [];
  };

  return (
    <div className="layout">
      {/* Sol profil */}
      <aside className="sidebar">
        <h1 className="pixel-text">{profile.name}</h1>
        <h2>{profile.role}</h2>
        <img className="profile-pic" src={images[currentIndex]} alt="Profile" />
        <ul className="card__list">
          <li>{profile.location}</li>
          <li>Computer Engineering, Koç University</li>
          <li>Data/AI • DevOps • Frontend</li>
          <li><a href="/CV GUNCEL.pdf" download>Download resume</a></li>
        </ul>
      </aside>

      {/* Sağ taraf */}
      <main className="content">
        {!activeFolder ? (
          <>
            <div className="folder" onClick={() => setActiveFolder("Projects")}>
              <img src="/file.png" className="folder-big-icon" alt="Projects" />
              <div className="folder-label">Projects</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Experience")}>
              <img src="/file.png" className="folder-big-icon" alt="Experience" />
              <div className="folder-label">Experience</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Skills")}>
              <img src="/file.png" className="folder-big-icon" alt="Skills" />
              <div className="folder-label">Skills</div>
            </div>
            <div
              className="folder"
              onClick={() => window.open("https://github.com/earac21", "_blank")}
            >
              <img src="/file.png" className="folder-big-icon" alt="GitHub" />
              <div className="folder-label">GitHub</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Extracurriculars")}>
              <img src="/file.png" className="folder-big-icon" alt="Extracurriculars" />
              <div className="folder-label">Extracurriculars</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Communication")}>
              <img src="/file.png" className="folder-big-icon" alt="Communication" />
              <div className="folder-label">Communication</div>
            </div>
          </>
        ) : (
          <FolderPanel
            title={activeFolder}
            items={getItems()}
            onClose={() => setActiveFolder(null)}
          />
        )}
      </main>
    </div>
  );
}
