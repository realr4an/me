import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { APP_TITLE } from "@/const";

type Language = "en" | "de";

const content = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", publications: "Publications", modules: "Modules" },
    about: {
      title: "Duncan Scholle",
      subtitlePrefix: "I'm ",
      subtitlePhrases: [
        "an AI Engineer",
        "passionate about machine learning",
        "skilled in Python & TensorFlow",
        "curious about deep learning",
        "building intelligent systems",
        "exploring computer vision",
        "a problem-solver with tech mindset",
        "focused on clean code",
        "always learning & evolving",
        "thinking in algorithms & models"
      ],
      description: "Passionate about building intelligent systems and solving complex problems with machine learning and software engineering.",
      cta: "Get in Touch"
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "AI & Machine Learning",
          items: ["Python (TensorFlow, PyTorch, scikit-learn)", "Deep Learning & Neural Networks", "Computer Vision (YOLO, OpenCV)", "NLP & LLM Applications", "Model Training & Optimization"]
        },
        {
          name: "Data Science",
          items: ["Data Analysis (pandas, numpy)", "Data Visualization (matplotlib, seaborn, plotly)", "Statistical Analysis", "Data Warehousing & Modeling"]
        },
        {
          name: "Data Science Tools",
          items: ["Power BI", "Tableau", "Jupyter Notebooks", "Apache Spark", "ETL Pipelines"]
        },
        {
          name: "Backend & Databases",
          items: ["Python, Java, C++", "SQL (MySQL, PostgreSQL, Oracle)", "NoSQL (Cassandra)", "API Design & REST", "Database Administration"]
        },
        {
          name: "Frontend Development",
          items: ["React.js", "HTML, CSS, JavaScript", "Web Technologies", "UI/UX Design"]
        },
        {
          name: "Software Engineering",
          items: ["OOP & SOLID Principles", "Algorithms & Data Structures", "Git & Version Control", "Software Architecture"]
        }
      ]
    },
    experience: {
      title: "Experience",
      education: {
        title: "Education",
        items: [
          { name: "FH Dortmund", period: "10.2022 - Present", description: "Computer Science (B.Sc.) - Data Science Specialization" },
          { name: "TU Dortmund", period: "10.2021 - 09.2022", description: "Computer Science" },
          { name: "Hellweg-Berufskolleg Unna", period: "08.2018 - 08.2021", description: "IT Specialization" },
          { name: "Ludwig-Uhland-Realschule", period: "08.2012 - 08.2018", description: "Secondary Education" }
        ]
      },
      work: {
        title: "Work & Internships",
        items: [
          { name: "FH Dortmund - SHK Tutor", period: "01.2025 - Present", description: "Active participation in research projects in cooperation with other universities. Focus on statistical models for logistics optimization and development of simulation models for decision support." },
          { name: "w3logistics AG - Working Student", period: "08.2023 - 12.2024", description: "Warehouse Management System (WMS) development and maintenance. Responsible for system enhancements, unit testing, error analysis, and direct customer coordination. Strong experience in Java, C#, C++, SQL, and JavaScript." },
          { name: "itemis AG - Internship", period: "02.2017 - 02.2017", description: "Application Development" },
          { name: "TyssenKrupp - Day Internship", period: "03.2016", description: "System Integration" },
          { name: "Entireinfra - Day Internship", period: "06.2016", description: "IT Infrastructure" }
        ]
      }
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "AI-Image-Detector",
          description: "YOLO and TensorFlow pipeline that detects and flags AI-generated faces with Streamlit dashboards.",
          tags: ["Python", "TensorFlow", "YOLO", "Computer Vision", "Streamlit"],
          link: "https://github.com/realr4an/AI-Image-Detector"
        },
        {
          name: "SecureTextEditor",
          description: "Secure text editor with React frontend, Spring Boot backend, and built-in encryption.",
          tags: ["React", "Spring Boot", "Java", "Security", "Full-Stack"],
          link: "https://github.com/realr4an/SecureTextEditor"
        },
        {
          name: "Ollama Redis RAG Stack",
          description: "Containerized RAG stack that combines Ollama, Redis Stack, and FastAPI services for local retrieval workflows.",
          tags: ["Ollama", "Redis Stack", "RAG", "Docker", "FastAPI"],
          link: "https://github.com/realr4an/ollama-redis-rag-stack"
        },
        {
          name: "LeagueOfLegendsMinimapTracker",
          description: "Automated minimap tracking system that enhances map awareness in League of Legends.",
          tags: ["Python", "Computer Vision", "OpenCV", "Gaming"],
          link: "https://github.com/realr4an/LeagueOfLegendsMinimapTracker"
        },
        {
          name: "Teams Presence Guardian",
          description: "Intelligent tool for managing Microsoft Teams presence and status automation.",
          tags: ["Python", "Microsoft Teams API", "Automation", "Productivity"],
          link: "https://github.com/realr4an/teams-presence-guardian"
        }
      ]
    },
    publications: {
      title: "Publications & Presentations",
      items: [
        {
          name: "Investigation of Order Picking Systems by Design and Analysis of Computer Experiments",
          description: "ENBIS 2025 conference presentation on using Generalized Additive Models for Location, Scale and Shape (GAMLSS) as meta-models to analyze discrete-event simulation experiments of order picking systems with uncertainty quantification.",
          tags: ["Statistics", "Design of Experiments", "GAMLSS", "Simulation", "Logistics"],
          link: "https://conferences.enbis.org/event/63/contributions/948/"
        }
      ]
    },
    modules: {
      title: "Modules & Coursework",
      visible: ["Introduction to Programming", "Algorithms and Data Structures", "Programming Course 1", "Programming Course 2 DS", "Computer Architecture and Operating Systems 1"],
      extra: ["Computer Architecture and Operating Systems 2", "Software Engineering 1", "Database Management Systems 1", "Mathematics for IT Specialists 1-4", "Theoretical Computer Science", "Human Computer Interaction", "Data Visualization", "Artificial Intelligence", "Applied Machine Learning", "Business Administration", "Technical English", "Web Technologies", "Communication and Computer Networks", "Data Science Databases", "Network Security", "Computers and Society", "IT Law", "Mobile Security", "Information and Business Performance Management"]
    },
    footer: {
      contact: "Get in Touch",
      email: "duncanscholle@outlook.com",
      cv: "Download CV",
      cvLink: "https://realr4an.github.io/me/cv.pdf"
    }
  },
  de: {
    nav: { about: "Über mich", skills: "Kenntnisse", experience: "Erfahrung", projects: "Projekte", publications: "Publikationen", modules: "Module" },
    about: {
      title: "Duncan Scholle",
      subtitlePrefix: "Ich bin ",
      subtitlePhrases: [
        "ein AI Engineer",
        "begeistert von Machine Learning",
        "versiert in Python & TensorFlow",
        "interessiert an Deep Learning",
        "entwickle intelligente Systeme",
        "erkunde Computer Vision",
        "Problemlöser mit Tech-Verständnis",
        "fokussiert auf sauberen Code",
        "ständig am Lernen & Wachsen",
        "denke in Algorithmen & Modellen"
      ],
      description: "Leidenschaftlich daran interessiert, intelligente Systeme zu entwickeln und komplexe Probleme mit Machine Learning und Softwareentwicklung zu lösen.",
      cta: "Kontakt aufnehmen"
    },
    skills: {
      title: "Kenntnisse",
      categories: [
        {
          name: "KI & Machine Learning",
          items: ["Python (TensorFlow, PyTorch, scikit-learn)", "Deep Learning & Neuronale Netze", "Computer Vision (YOLO, OpenCV)", "NLP & LLM-Anwendungen", "Modelltraining & Optimierung"]
        },
        {
          name: "Data Science",
          items: ["Datenanalyse (pandas, numpy)", "Datenvisualisierung (matplotlib, seaborn, plotly)", "Statistische Analysen", "Data Warehousing & Modellierung"]
        },
        {
          name: "Data Science Werkzeugen",
          items: ["Power BI", "Tableau", "Jupyter Notebooks", "Apache Spark", "ETL-Prozesse"]
        },
        {
          name: "Backend & Datenbanken",
          items: ["Python, Java, C++", "SQL (MySQL, PostgreSQL, Oracle)", "NoSQL (Cassandra)", "API-Design & REST", "Datenbankadministration"]
        },
        {
          name: "Frontend-Entwicklung",
          items: ["React.js", "HTML, CSS, JavaScript", "Web-Technologien", "UI/UX-Design"]
        },
        {
          name: "Softwareentwicklung",
          items: ["OOP & SOLID-Prinzipien", "Algorithmen & Datenstrukturen", "Git & Versionskontrolle", "Softwarearchitektur"]
        }
      ]
    },
    experience: {
      title: "Erfahrung",
      education: {
        title: "Bildung",
        items: [
          { name: "FH Dortmund", period: "10.2022 - Jetzt", description: "Informatik (B.Sc.) - Schwerpunkt Data Science" },
          { name: "TU Dortmund", period: "10.2021 - 09.2022", description: "Informatik" },
          { name: "Hellweg-Berufskolleg Unna", period: "08.2018 - 08.2021", description: "IT-Spezialisierung" },
          { name: "Ludwig-Uhland-Realschule", period: "08.2012 - 08.2018", description: "Sekundarbildung" }
        ]
      },
      work: {
        title: "Praktika & Arbeitserfahrung",
        items: [
          { name: "FH Dortmund - SHK Tutor", period: "01.2025 - Jetzt", description: "Aktive Mitarbeit an Forschungsprojekten in Kooperation mit anderen Universitäten. Fokus auf statistische Modelle zur Optimierung von Logistik-Teilen und Entwicklung von Simulationsmodellen zur Entscheidungsunterstützung." },
          { name: "w3logistics AG - Werkstudent", period: "08.2023 - 12.2024", description: "Warehouse Management System (WMS) Weiterentwicklung und Wartung. Verantwortlich für Systemverbesserungen, Unit-Tests, Fehleranalyse und direkte Kundenabstimmung. Starke Erfahrung in Java, C#, C++, SQL und JavaScript." },
          { name: "itemis AG - Praktikum", period: "02.2017 - 02.2017", description: "Anwendungsentwicklung" },
          { name: "TyssenKrupp - Tagespraktikum", period: "03.2016", description: "Systemintegration" },
          { name: "Entireinfra - Tagespraktikum", period: "06.2016", description: "IT-Infrastruktur" }
        ]
      }
    },
    projects: {
      title: "Projekte",
      items: [
        {
          name: "AI-Image-Detector",
          description: "YOLO- und TensorFlow-Pipeline zur Erkennung von KI-generierten Gesichtern mit Streamlit-Dashboards.",
          tags: ["Python", "TensorFlow", "YOLO", "Computer Vision", "Streamlit"],
          link: "https://github.com/realr4an/AI-Image-Detector"
        },
        {
          name: "SecureTextEditor",
          description: "Sicherer Texteditor mit React-Frontend, Spring-Boot-Backend und integrierter Verschlüsselung.",
          tags: ["React", "Spring Boot", "Java", "Sicherheit", "Full-Stack"],
          link: "https://github.com/realr4an/SecureTextEditor"
        },
        {
          name: "Ollama Redis RAG Stack",
          description: "Containerisierter RAG-Stack mit Ollama, Redis Stack und FastAPI-Orchestrierung für lokale LLM-Retrieval-Workflows.",
          tags: ["Ollama", "Redis Stack", "RAG", "Docker", "FastAPI"],
          link: "https://github.com/realr4an/ollama-redis-rag-stack"
        },
        {
          name: "LeagueOfLegendsMinimapTracker",
          description: "Automatisches Minimap-Tracking-System zur Verbesserung der Map-Awareness in League of Legends.",
          tags: ["Python", "Computer Vision", "OpenCV", "Gaming"],
          link: "https://github.com/realr4an/LeagueOfLegendsMinimapTracker"
        },
        {
          name: "Teams Presence Guardian",
          description: "Intelligentes Tool zur Verwaltung und Automatisierung von Microsoft Teams Präsenz und Status.",
          tags: ["Python", "Microsoft Teams API", "Automatisierung", "Produktivität"],
          link: "https://github.com/realr4an/teams-presence-guardian"
        }
      ]
    },
    publications: {
      title: "Publikationen & Präsentationen",
      items: [
        {
          name: "Untersuchung von Kommissioniersystemen durch Versuchsplanung und Analyse von Computerexperimenten",
          description: "ENBIS 2025 Konferenz-Präsentation über die Verwendung von verallgemeinerten additiven Modellen für Lage, Skala und Form (GAMLSS) als Meta-Modelle zur Analyse von Simulationsexperimenten von Lagerpickingsystemen mit Unsicherheitsquantifizierung.",
          tags: ["Statistik", "Versuchsplanung", "GAMLSS", "Simulation", "Logistik"],
          link: "https://conferences.enbis.org/event/63/contributions/948/"
        }
      ]
    },
    modules: {
      title: "Module & Lehrveranstaltungen",
      visible: ["Einführung in die Programmierung", "Algorithmen und Datenstrukturen", "Programmierkurs 1", "Programmierkurs 2 DS", "Rechnerstrukturen und Betriebssysteme 1"],
      extra: ["Rechnerstrukturen und Betriebssysteme 2", "Softwaretechnik 1", "Datenbanken 1", "Mathematik für Informatik 1-4", "Theoretische Informatik", "Mensch-Computer-Interaktion", "Datenvisualisierung", "Künstliche Intelligenz", "Angewandtes Maschinelles Lernen", "Betriebswirtschaftslehre", "Technisches Englisch", "Web-Technologien", "Kommunikations- und Rechnernetze", "Data Science Datenbanken", "Netzwerksicherheit", "Informatik und Gesellschaft", "IT-Recht", "Mobile Security", "Informations- und Business Performance Management"]
    },
    footer: {
      contact: "Kontakt aufnehmen",
      email: "duncanscholle@outlook.com",
      cv: "CV herunterladen",
      cvLink: "https://realr4an.github.io/me/cv.pdf"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const t = content[language];

  // Typing animation effect
  useEffect(() => {
    const phrases = t.about.subtitlePhrases;
    const currentPhrase = phrases[subtitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDelete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setSubtitleText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setSubtitleText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSubtitleIndex((subtitleIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, subtitleIndex, t.about.subtitlePhrases]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "modules"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Duncan Scholle</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === key
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              {language === "en" ? "DE" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-sm font-medium"
            >
              {language === "en" ? "DE" : "EN"}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
            <div className="flex flex-col gap-4">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-left text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.about.title}
            </h1>
            <div className="mb-6">
              <img src={profileImageSrc} alt="Duncan Scholle" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-blue-600 dark:border-cyan-400 shadow-lg" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
              {t.about.subtitlePrefix}<span className="text-blue-600 dark:text-cyan-400 font-bold">{subtitleText}</span><span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              {t.about.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:duncanscholle@outlook.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <Mail size={20} /> {t.footer.contact}
              </a>
              <a href={t.footer.cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">
                📄 {t.footer.cv}
              </a>
              <a href="https://github.com/realr4an" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">
                <Github size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/duncanscholle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.skills.categories.map((category, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-cyan-400 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.experience.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-cyan-400">{t.experience.education.title}</h3>
                <div className="space-y-6">
                  {t.experience.education.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-blue-600 dark:border-cyan-400 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Work */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-cyan-400">{t.experience.work.title}</h3>
                <div className="space-y-6">
                  {t.experience.work.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-blue-600 dark:border-cyan-400 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              {t.projects.items.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* Publications Section */}
        <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.publications.title}
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              {t.publications.items.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {pub.name}
                    </h3>
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{pub.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.modules.title}
            </h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <ul className="space-y-3 mb-6">
                {t.modules.visible.map((module, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
                    {module}
                  </li>
                ))}
              </ul>
              {expandedModules && (
                <ul className="space-y-3 mb-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  {t.modules.extra.map((module, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
                      {module}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => setExpandedModules(!expandedModules)}
                className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-medium hover:underline"
              >
                {expandedModules ? "Show less" : "Show more"}
                <ChevronDown size={16} className={`transition-transform ${expandedModules ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2025 Duncan Scholle. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:duncanscholle@outlook.com" className="hover:text-slate-200 transition-colors">Email</a>
            <a href="https://github.com/realr4an" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/duncanscholle" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


const baseAssetPath =
  (import.meta.env.BASE_URL ?? "/").endsWith("/")
    ? import.meta.env.BASE_URL ?? "/"
    : `${import.meta.env.BASE_URL}/`;
const profileImageSrc = `${baseAssetPath}profile.png`;
