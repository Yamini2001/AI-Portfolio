import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg";
import { Code2, Brain, Atom } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#030014] px-6 sm:px-10 lg:px-24 py-28 overflow-hidden text-white"
    >
      {/* ✨ STAR BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Me
            </span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Passionate about crafting scalable web apps, pushing the boundaries of AI,
            and continuously learning new things. Let’s connect and innovate together!
          </p>
        </motion.div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ===== IMAGE CARD ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-purple-600 to-cyan-400 blur opacity-40" />

            <div className="relative rounded-[28px] overflow-hidden border border-white/20 bg-black shadow-[0_0_80px_rgba(168,85,247,0.4)]">
              <img
                src={aboutImg}
                alt="Yamini Khurana"
                className="w-[280px] sm:w-[340px] h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </motion.div>

          {/* ===== CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <h3 className="text-3xl sm:text-4xl font-bold">
              I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Yamini Khurana
              </span>
              ,
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              an AI and Full Stack Developer with a passion for creating scalable
              web applications and AI-driven solutions. I specialize in JavaScript,
              Python, and modern frameworks to build efficient and impactful tech.
            </p>

            {/* ===== SKILL BADGES ===== */}
            <div className="flex flex-wrap gap-4 mt-2">

              <SkillBadge
                icon={<Code2 size={18} />}
                text="React Developer"
                gradient="from-yellow-400 to-orange-400"
              />

              <SkillBadge
                icon={<Atom size={18} />}
                text="Python Enthusiast"
                gradient="from-cyan-400 to-blue-400"
              />

              <SkillBadge
                icon={<Brain size={18} />}
                text="AI Researcher"
                gradient="from-purple-400 to-pink-400"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE BADGE ===== */
function SkillBadge({ icon, text, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex items-center gap-3 px-5 py-3 rounded-xl
      bg-gradient-to-r ${gradient} text-black font-semibold text-sm
      shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
    >
      {icon}
      {text}
    </motion.div>
  );
}
