import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const socials = [
    { Icon: Github, link: "https://github.com/Yamini2001", color: "text-white" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/yamini-khurana-4934b61b1/", color: "text-cyan-400" },
    { Icon: Instagram, link: "https://www.instagram.com/yaminikhurana2001/", color: "text-pink-400" },
    { Icon: Facebook, link: "https://www.facebook.com/yamini.khurana.944", color: "text-blue-500" },
  ];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#030014] text-white px-6 sm:px-10 lg:px-24 pt-20 pb-10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-extrabold tracking-tight">
              Yamini{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Khurana
              </span>
            </h3>
            <p className="mt-2 text-gray-400 text-sm max-w-sm">
              AI & Software Engineer crafting futuristic digital experiences
              with clean code and creativity.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socials.map(({ Icon, link, color }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 30px rgba(168,85,247,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-2xl bg-white/5 border border-white/10
                            hover:border-white/30 transition-all ${color}`}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Yamini Khurana. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-white/5 border border-white/10
                       hover:bg-white/10 transition"
          >
            Back to top <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
