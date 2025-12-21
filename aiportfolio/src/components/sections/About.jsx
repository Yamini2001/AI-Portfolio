import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg";
import { Sparkles, Cpu, Zap, Globe, Leaf } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Sparkles size={20} />, color: "text-yellow-400" },
    { icon: <Cpu size={20} />, color: "text-blue-400" },
    { icon: <Zap size={20} />, color: "text-yellow-500" },
    { icon: <Globe size={20} />, color: "text-cyan-400" },
    { icon: <Leaf size={20} />, color: "text-green-400" },
  ];

  return (
    <section className="relative pt-1 pb-24 px-6 lg:px-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING ON THE LEFT --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black tracking-tighter text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: REDUCED HEIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#050110] border border-white/10 rounded-[38px] overflow-hidden shadow-2xl"
            >
              {/* Reduced height to h-[400px] to prevent cutting off head */}
              <div className="relative h-[570px] w-full bg-black">
                <img
                  src={aboutImg}
                  alt="Yamini"
                  className="h-full w-full object-cover object-top brightness-110 contrast-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%]">
                  <button className="w-full py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white hover:bg-white/10 transition-all">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PARA -> ICONS -> PROJECTS -> VIEW ALL */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Paragraph starts beside/aligned with top of image area */}
              <p className="text-lg text-gray-400 leading-relaxed font-medium mb-25 max-w-md">
                I’m a passionate web developer specializing in responsive websites 
                and high-performance digital experiences. Let’s build something amazing together.
              </p>

              {/* Skill Icons Group */}
              <div className="flex gap-4 mb-12">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${skill.color} hover:bg-white/10 hover:scale-110 transition-all cursor-pointer shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>

              {/* Recent Projects Stack */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">Recent Projects</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['AI Dashboard', 'E-commerce'].map((proj, i) => (
                    <div key={i} className="group p-4 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500">
                       <div className="aspect-video rounded-[24px] mb-4 overflow-hidden bg-white/5 border border-white/5">
                          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                       </div>
                       <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 ml-1">{proj}</h4>
                       <button className="w-full py-2 bg-white/5 border border-white/10 rounded-xl text-[8px] font-bold uppercase tracking-widest text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                          View Project
                       </button>
                    </div>
                  ))}
                </div>

                {/* View All Button at the very bottom */}
                <div className="pt-4">
                  <button className="px-10 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 transition-all shadow-xl">
                    View All
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}