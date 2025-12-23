import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin,Instagram,
  Facebook, } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#030014] px-6 sm:px-10 lg:px-24 py-28 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.15),transparent_60%)]" />

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
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            Have an idea, project, or just want to say hello? Let’s connect and
            build something impactful together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                  <Mail size={20} />
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  yaminikhurana2001@email.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                  <Phone size={20} />
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  +91 9306195528
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-yellow-400">
                  <MapPin size={20} />
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  Gurugram, India
                </span>
              </div>
            </div>

            {/* Social Icons */}
           <div className="flex flex-wrap gap-4 pt-6">
  {[
    { Icon: Github, color: "text-white", link: "https://github.com/Yamini2001" },
    { Icon: Linkedin, color: "text-cyan-400", link: "https://www.linkedin.com/in/yamini-khurana-4934b61b1/" },
    { Icon: Instagram, color: "text-pink-400", link: "https://www.instagram.com/yaminikhurana2001/" },
    { Icon: Facebook, color: "text-blue-500", link: "https://www.facebook.com/yamini.khurana.944" },
  ].map(({ Icon, color, link }, i) => (
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
</div>

          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-400 blur opacity-20" />

            <div className="relative space-y-6">
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3
                             text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3
                             text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3
                             text-sm resize-none focus:outline-none focus:border-cyan-400"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-gradient-to-r from-purple-500 to-cyan-400
                           text-black font-semibold tracking-wide"
              >
                Send Message <Send size={18} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
