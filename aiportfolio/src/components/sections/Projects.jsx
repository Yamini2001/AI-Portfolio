import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Trip Planner",
    description:
      "An AI-powered travel planning application that generates personalized itineraries using Gemini AI, featuring secure authentication and a responsive modern UI.",
    tech: ["React", "Gemini AI", "Firebase", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/Yamini2001/AI-Trip-Planner",
  },
  {
    title: "AI Portfolio — Yamini Khurana",
    description:
      "A futuristic, animated, and performance-optimised AI portfolio website showcasing skills, projects, and experience with a dark-neon UI, smooth animations, and fully responsive design.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    live: "https://ai-portfolio-ko0argk79-tech-team3.vercel.app/",
    github: "https://github.com/Yamini2001/AI-Portfolio",
  },
  {
    title: "LogicLoom — Visual Pipeline DAG Validator",
    description:
      "A visual workflow builder that allows users to create, visualize, and validate node-based pipelines, ensuring they form a valid Directed Acyclic Graph (DAG) using real-time cycle detection.",
    tech: ["React", "React Flow", "FastAPI", "Python", "Zustand"],
    live: "https://logicloom-di5f1do37-tech-team3.vercel.app",
    github: "https://github.com/Yamini2001/LogicLoom-Visual-Pipeline-DAG-Validator",
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
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

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

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/Yamini2001"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl
                       bg-white/10 border border-white/20 backdrop-blur-xl
                       text-white font-semibold
                       hover:bg-white/20 hover:scale-105
                       transition-all duration-300"
          >
            <Github className="group-hover:rotate-12 transition" size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
