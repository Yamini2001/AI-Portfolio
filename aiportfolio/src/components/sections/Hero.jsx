import { motion } from "framer-motion";
import aiHead from "../../assets/ai-head.png";
import profileImg from "../../assets/about.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030014] text-white px-6 lg:px-24 py-10 overflow-hidden flex flex-col justify-start">
      
      {/* --- BACKGROUND AI-HEAD (Higher, No Visible Corners) --- */}
      <div className="absolute top-[5%] right-[-5%] w-full h-[90%] pointer-events-none z-0 flex justify-end items-start">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="relative w-[87%] max-w-[1150px] h-full"
          style={{ 
            maskImage: 'radial-gradient(circle at 60% 50%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 40%, transparent 85%)' 
          }}
        >
          <div className="absolute inset-0 bg-purple-600/20 blur-[150px] rounded-full scale-75"></div>
          <img 
            src={aiHead} 
            alt="AI Hologram" 
            className="w-full h-full object-contain mix-blend-screen contrast-135" 
          />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-28">
        
        {/* TEXT SECTION (Chat-style spacing) */}
        <div className="max-w-4xl pt-32 lg:pt-48"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl lg:text-[95px] font-black leading-[1.1] tracking-tighter">
              <span className="text-gray-400 font-medium text-4xl lg:text-5xl block mb-6">Hi, I’m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58bff] via-[#7ee0ff] to-[#caa8ff] drop-shadow-[0_0_40px_rgba(126,224,255,0.4)]">
                Yamini Khurana
              </span>
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-gray-400 font-medium tracking-wide max-w-xl">
              Creative Web Developer
            </p>
            
            <div className="flex items-center gap-8 mt-12">
              {/* LET'S CONNECT BUTTON: Solid White Border */}
              <button className="relative group overflow-hidden px-12 py-4 rounded-full border-2 border-white bg-gradient-to-r from-[#6f5cff] to-[#3be0ff] font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(111,92,255,0.6)]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10 text-white">Let’s Connect</span>
              </button>
              <span className="relative z-36 text-white">|</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: PROFILE & PROJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* PROFILE CARD */}
          {/* <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-cyan-400 via-purple-600 to-transparent rounded-[35px] opacity-50 blur-[1px]"></div>
            <div className="relative bg-[#050110]/80 backdrop-blur-3xl rounded-[34px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative h-[480px] flex items-end">
                <img src={profileImg} alt="Yamini" className="w-full h-full object-cover brightness-[0.85] contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050110] via-transparent to-transparent opacity-100"></div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] text-center">
                  <div className="bg-white/5 backdrop-blur-3xl border border-white/20 py-4 rounded-2xl shadow-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-100">Yamini Khurana</p>
                  </div>
              </div>
            </div>
          </div> */}

          {/* PROJECTS */}
          {/* <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-6">
              <h3 className="text-3xl font-bold tracking-tight">Recent Projects</h3>
              <div className="flex-1 h-[1px] bg-white/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['AI Dashboard', 'E-commerce', 'Portfolio'].map((title, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-500 cursor-pointer">
                  <div className="aspect-video bg-[#0d0d2b] rounded-xl mb-5 overflow-hidden border border-white/5">
                     <div className="w-full h-full bg-gradient-to-tr from-purple-500/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                  </div>
                  <h4 className="font-bold text-gray-200 text-sm mb-2">{title}</h4>
                  <div className="w-8 h-[1px] bg-purple-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}