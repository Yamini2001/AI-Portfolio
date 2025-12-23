import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Travel Planner",
    description:
      "An AI-powered travel planner using Gemini AI to generate personalized itineraries.",
    tech: ["React", "Gemini AI", "Firebase"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Portfolio",
    description:
      "A futuristic analytics dashboard with real-time data visualization.",
    tech: ["React", "Tailwind", "Charts"],
    live: "#",
    github: "#",
  },
  {
    title: "Lead Management System",
    description:
      "Full-stack lead management app with authentication and CRUD operations.",
    tech: ["MERN", "MySQL", "Express"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#030014] px-6 sm:px-10 lg:px-24 py-28 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            A selection of projects showcasing my skills in AI, full-stack
            development, and modern UI design.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-[28px] p-6 bg-white/5 border border-white/10
                         hover:border-white/30 transition-all backdrop-blur-xl"
            >
              {/* Glow */}
              <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-purple-600 to-cyan-400 blur opacity-0 group-hover:opacity-30 transition duration-700" />

              <div className="relative flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-white/10 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl
                               bg-gradient-to-r from-purple-500 to-cyan-400
                               text-black text-sm font-semibold
                               hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl
                               bg-white/10 border border-white/20
                               text-white text-sm font-semibold
                               hover:bg-white/20 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
