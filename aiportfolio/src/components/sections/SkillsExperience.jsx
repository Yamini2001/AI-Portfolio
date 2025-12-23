import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Brain,
  Layers,
  Briefcase,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 />, level: "Advanced" },
  { name: "React.js", icon: <Layers />, level: "Advanced" },
  { name: "Node.js", icon: <Cpu />, level: "Intermediate" },
  { name: "Python", icon: <Brain />, level: "Advanced" },
  { name: "MySQL", icon: <Database />, level: "Intermediate" },
  { name: "AI / ML", icon: <Brain />, level: "Intermediate" },
];

const experiences = [
  {
    role: "Software Developer",
    company: "BeSingular Academy",
    duration: "Apr 2023 – Oct 2023",
    description:
      "Built interactive web applications using React, JavaScript, and REST APIs. Worked on AI-based projects and mentored students.",
  },
  {
    role: "Web Developer",
    company: "Spriax Pvt Ltd",
    duration: "Jan 2023 – Mar 2023",
    description:
      "Developed responsive UI components and optimized website performance using modern frontend practices.",
  },
];

export default function SkillsExperience() {
  return (
    <section
      id="skills"
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
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            Technologies I work with and my professional journey so far.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="group relative rounded-2xl p-5 bg-white/5 border border-white/10
                             hover:border-white/30 transition-all text-center"
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-400 blur opacity-0 group-hover:opacity-30 transition duration-700" />

                  <div className="relative flex flex-col items-center gap-3">
                    <div className="text-cyan-400">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-xs text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>

            <div className="relative pl-8 space-y-12">

  {/* Vertical timeline line */}
  <div className="absolute left-[7px] top-0 bottom-0 w-px 
    bg-gradient-to-b from-cyan-400/60 via-purple-500/30 to-transparent" />

  {experiences.map((exp, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="relative"
    >

      {/* Glowing animated dot */}
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0px rgba(34,211,238,0.6)",
            "0 0 14px rgba(34,211,238,0.9)",
            "0 0 0px rgba(34,211,238,0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -left-[14px] top-2
          w-4 h-4 rounded-full
          bg-gradient-to-r from-purple-500 to-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.8)]
        "
      />

      {/* Content */}
      <h4 className="font-semibold text-lg text-white">
        {exp.role}
      </h4>

      <p className="text-sm text-cyan-400 font-medium">
        {exp.company}
      </p>

      <p className="text-xs text-gray-400 mb-3">
        {exp.duration}
      </p>

      <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
        {exp.description}
      </p>

    </motion.div>
  ))}
</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
