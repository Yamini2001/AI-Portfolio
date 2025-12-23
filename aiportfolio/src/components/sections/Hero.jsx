import { motion } from "framer-motion";
import aiHead from "../../assets/ai-head.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#030014] via-[#070018] to-[#030014]
      text-white px-6 sm:px-12 lg:px-24 py-10 flex flex-col justify-start"
    >

      {/* ================= AI BACKGROUND IMAGE ================= */}
      <motion.div
        className="absolute top-[8%] right-[-12%] w-full h-[85%] 
        pointer-events-none z-0 flex justify-end items-start"
        animate={{ y: [0, -25, 0], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      >
        <div
          className="relative w-[90%] max-w-[1000px] h-full"
          style={{
            maskImage:
              "radial-gradient(circle at 60% 50%, black 45%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at 60% 50%, black 45%, transparent 85%)",
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-[160px] rounded-full" />

          <img
            src={aiHead}
            alt="AI Head"
            className="w-full h-full object-contain 
            mix-blend-screen contrast-125"
          />
        </div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-24">

        {/* ================= TEXT ================= */}
        <div className="max-w-4xl pt-32 lg:pt-48 flex flex-col gap-8">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-[92px] 
            font-black leading-[1.1] tracking-tighter"
          >
            <span className="block text-gray-400 font-medium 
            text-xl sm:text-4xl mb-6">
              Hi, I’m
            </span>

            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-[#b58bff] via-[#7ee0ff] to-[#caa8ff]
            drop-shadow-[0_0_45px_rgba(126,224,255,0.45)]">
              Yamini Khurana
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 font-medium 
            text-lg sm:text-xl lg:text-2xl 
            tracking-wide max-w-xl"
          >
            Creative Web Developer crafting scalable web apps,
            AI-powered solutions, and solving real-world problems
            with clean UI & Data Structures.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >

            {/* LET’S CONNECT */}
            <motion.button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
  whileHover={{
    scale: 1.12,
    boxShadow: "0 0 70px rgba(111,92,255,0.8)",
  }}
  whileTap={{ scale: 0.95 }}
  className="
    relative group overflow-hidden
    px-10 py-4 rounded-full
    border border-white/30
    bg-gradient-to-r from-[#6f5cff] via-[#7ee0ff] to-[#3be0ff]
    font-bold text-sm tracking-[0.22em] uppercase
    text-white
    transition-all duration-300
    focus:outline-none
  "
>
  {/* Shine animation */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-700
    "
  />

  {/* Text */}
  <span className="relative z-10">Let’s Connect</span>
</motion.button>

            {/* LEETCODE PROFILE */}
            <motion.a
              href="https://leetcode.com/u/yaminikhurana2001/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(255,161,22,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4
              rounded-full border-2 border-[#FFA116]
              bg-[#FFA116]/10 font-bold text-sm uppercase
              tracking-[0.2em] text-white"
            >
              {/* LeetCode Icon */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.16 9.15a1.375 1.375 0 1 0 1.94 1.943L14.467 2.34A1.375 1.375 0 0 0 13.483 0Z" />
              </svg>

              <span>LeetCode</span>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            {/* DOWNLOAD CV */}
            <motion.a
              href="/FullStack Developer Yamini Resume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden px-8 py-4
              rounded-2xl bg-white/5 border border-white/20
              backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r
              from-transparent via-cyan-400/25 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-center gap-3">
                {/* File Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-cyan-400"
                >
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M5 20h14a2 2 0 002-2V8l-6-6H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span className="text-sm font-bold tracking-widest uppercase">
                  Download CV
                </span>

                {/* Animated Arrow */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 text-cyan-300"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4"
                  />
                </motion.svg>
              </div>
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
