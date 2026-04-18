import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaServer, FaGithub } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-purple-100" : "text-gray-600";
  const cardBg = isDark
    ? "bg-purple-900/40 hover:bg-purple-900/60"
    : "bg-white/80 hover:bg-teal-50/60";
  const borderColor = isDark ? "border-purple-400/25" : "border-teal-200/60";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const accentGradient = isDark
    ? "from-purple-100 to-violet-200"
    : "from-teal-600 to-teal-500";
  const eyebrow = isDark ? "text-purple-200" : "text-teal-600";
  const accentText = isDark ? "text-purple-200" : "text-teal-600";
  const bulletDot = isDark ? "bg-purple-300" : "bg-teal-500";
  const timelineLine = isDark ? "bg-purple-500/40" : "bg-teal-200";
  const timelineDot = isDark ? "bg-purple-300" : "bg-teal-500";

  const projects = [
    {
  title: "Food Recipe Application",
  subtitle: "Responsive Recipe Finder",
  github: "https://fooddrecipes.netlify.app/",
  desc: "Built a responsive recipe app using REST APIs with dynamic search, filtering, and optimized UI performance.",
  tech: ["HTML5", "CSS3", "JavaScript (ES6)", "REST API"],
  type: "github",
},
{
  title: "Ola Cab Booking System",
  subtitle: "Core Java Console-Based Application",
  github: "https://github.com/AbdulKabir1113/Ola-Cab-Booking-System-Core-Java-",
  desc: "Developed a Java-based cab booking system implementing OOP concepts for ride management and fare calculation.",
  tech: ["Java", "OOP", "Console Application"],
  type: "github",
},
{
  title: "Snake Game",
  subtitle: "Classic Arcade Game using JavaScript",
  github: "https://github.com/AbdulKabir1113/Snake-Game",
  desc: "Created a browser-based Snake Game with real-time controls, collision detection, and score tracking.",
  tech: ["JavaScript", "HTML", "CSS"],
  type: "github",
},
{
  title: "Video Summary Application",
  subtitle: "AI-Powered Video Summarization Tool",
  github: "https://github.com/AbdulKabir1113/Video-Summary",
  desc: "Built an AI-based tool to generate concise summaries from video content using NLP techniques.",
  tech: ["Python", "NLP", "Machine Learning", "JavaScript"],
  type: "github",
},
{
  title: "AutoCorrect Tool",
  subtitle: "AI Spelling & Grammar Corrector",
  github: "https://github.com/abdulkabir0717/auto-correct-tool",
  desc: "Developed an AI autocorrect system using NLP and Seq2Seq models for accurate text correction.",
  tech: ["Python", "NLP", "Transformer", "JavaScript"],
  type: "github",
},
{
  title: "Bag Management System",
  subtitle: "Core Java Application using HAS-A Relationship",
  github: "https://github.com/AbdulKabir1113/Bag-Management-System-Core-Java-Has-A-Relationship-",
  desc: "Implemented a Java-based system using HAS-A relationships to manage and organize bag items efficiently.",
  tech: ["Java", "OOP", "Composition (HAS-A)", "Console Application"],
  type: "github",
},
{
  title: "Search Images",
  subtitle: "Dynamic Image Search Web App",
  github: "https://github.com/AbdulKabir1113/Search-Images",
  desc: "Built an image search app using APIs to fetch and display real-time results with a responsive UI.",
  tech: ["JavaScript", "HTML", "CSS", "REST API"],
  type: "github",
},
{
  title: "CRUD Operations",
  subtitle: "JavaScript-Based Data Management System",
  github: "https://github.com/AbdulKabir1113/CURD-Operations",
  desc: "Developed a CRUD app with dynamic data handling and local storage for seamless user interaction.",
  tech: ["JavaScript", "HTML", "CSS"],
  type: "github",
},
{
  title: "Image Editor",
  subtitle: "Web-Based Image Editing Application",
  github: "https://github.com/AbdulKabir1113/Image-Editor",
  desc: "Created an image editor with real-time editing features like filters, resizing, and canvas-based rendering.",
  tech: ["JavaScript", "HTML", "CSS"],
  type: "github",
},
{
  title: "Price Comparison Website",
  subtitle: "E-commerce Product Comparison Platform",
  github: "https://github.com/AbdulKabir1113/Price-Comparison-Website",
  desc: "Built a product comparison app using APIs with filtering and sorting to identify best deals efficiently.",
  tech: ["JavaScript", "HTML", "CSS", "API Integration"],
  type: "github",
},
{
  title: "Spotify Clone",
  subtitle: "Frontend Music Streaming UI",
  github: "https://github.com/AbdulKabir1113/Spotify-Clone-Fronted",
  desc: "Developed a Spotify-inspired UI with music controls and responsive design for an engaging experience.",
  tech: ["JavaScript", "HTML", "CSS", "UI/UX"],
  type: "github",
},
{
  title: "Photography Portfolio Page",
  subtitle: "Responsive Photography Showcase Website",
  github: "https://github.com/AbdulKabir1113/Photography-Page",
  desc: "Designed a responsive portfolio website to showcase photography with modern layouts and smooth navigation.",
  tech: ["HTML", "CSS", "JavaScript"],
  type: "github",
},
{
  title: "Gym Website",
  subtitle: "Responsive Fitness & Membership Platform",
  github: "https://github.com/AbdulKabir1113/GYM-Website",
  desc: "Built a responsive gym website featuring services, trainers, and membership sections for user engagement.",
  tech: ["HTML", "CSS", "JavaScript"],
  type: "github",
},
{
  title: "WatchFit Landing Page",
  subtitle: "Modern Fitness Product Landing Website",
  github: "https://github.com/AbdulKabir1113/Watchfit-landing-Page",
  desc: "Designed a modern landing page with product highlights and CTA sections for better user conversion.",
  tech: ["HTML", "CSS", "JavaScript"],
  type: "github",
}
  ];


  const typeColors = {
    "Full-Time": isDark
      ? "bg-emerald-500/20 text-emerald-200 border-emerald-400/40"
      : "bg-emerald-50 text-emerald-700 border-emerald-200",
    Internship: isDark
      ? "bg-purple-500/25 text-purple-100 border-purple-400/40"
      : "bg-teal-50 text-teal-700 border-teal-200",
    Project: isDark
      ? "bg-blue-500/20 text-blue-100 border-blue-400/40"
      : "bg-sky-50 text-sky-700 border-sky-200",
  };

  return (
    <div className="bg-page-light dark:bg-page-dark py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-purple-800/10 via-transparent to-purple-950/20"
            : "bg-gradient-to-br from-teal-50/60 via-transparent to-teal-100/20"
        }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── PROJECT JOURNEY ── */}

      

        {/* ── PROJECTS ── */}
        <div className="text-center mb-10">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-3 ${eyebrow}`}
          >
            Portfolio
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            My{" "}
            <span
              className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}
            >
              Projects
            </span>
          </h2>
          <div
            className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${borderColor} ${cardBg} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{
                boxShadow: isDark
                  ? "0 4px 30px rgba(88,28,135,0.18)"
                  : "0 4px 24px rgba(20,184,166,0.09)",
              }}
            >
              <div>
                {/* Title + Badge */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3
                      className={`text-lg font-bold leading-snug ${headingColor}`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-xs font-medium mt-0.5 ${accentText}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  {project.type === "backend" && (
                    <span
                      className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border flex-shrink-0 mt-0.5 ${
                        isDark
                          ? "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30"
                          : "bg-purple-50 text-purple-600 border-purple-200"
                      }`}
                    >
                      Backend
                    </span>
                  )}

                  {project.type === "live" && (
                    <span
                      className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border flex-shrink-0 mt-0.5 ${
                        isDark
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      ● Live
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mt-3 mb-5 ${textPrimary}`}
                >
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-medium border ${
                        isDark
                          ? "bg-white/5 text-purple-200 border-purple-400/20"
                          : "bg-teal-50 text-teal-700 border-teal-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {project.type === "live" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-white hover:scale-[1.02] active:scale-[0.98] ${
                    isDark
                      ? "bg-purple-500 hover:bg-purple-400"
                      : "bg-teal-600 hover:bg-teal-500"
                  }`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Visit Website
                </a>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isDark
                      ? "border-fuchsia-400/30 text-fuchsia-200 bg-fuchsia-500/10 hover:bg-fuchsia-500/20"
                      : "border-purple-200 text-purple-600 bg-purple-50 hover:bg-purple-100"
                  }`}
                >
                  <FaGithub className="text-sm" />
                  View on GitHub
                </a>
              ) : (
                <div
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border ${
                    isDark
                      ? "border-fuchsia-400/30 text-fuchsia-200 bg-fuchsia-500/10"
                      : "border-purple-200 text-purple-600 bg-purple-50"
                  }`}
                >
                  <FaServer className="text-xs" />
                  Backend / API Project
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
