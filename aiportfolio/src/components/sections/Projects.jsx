import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className="py-24 px-16">
      <h2 className="text-4xl font-bold mb-12">Recent Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-3">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>

            <button className="mt-6 text-purple-400">
              View Project →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
