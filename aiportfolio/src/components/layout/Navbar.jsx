import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="group cursor-pointer">
          <h1 className="text-xl font-black tracking-tighter text-white">
            Yamini <span className="text-purple-400 group-hover:text-cyan-400 transition-colors">Khurana</span>
          </h1>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
            {['Home', 'About', 'Projects'].map((item) => (
              <li key={item} className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-all group">
                {item}
                <ChevronDown size={14} className="text-gray-500 group-hover:text-cyan-400 transition-transform group-hover:rotate-180 duration-300" />
              </li>
            ))}
            <li className="hover:text-white cursor-pointer transition-all">Contact</li>
          </ul>

          {/* --- UPDATED DOWNLOAD CV BUTTON --- */}
         <button className="relative group/btn overflow-hidden px-7 py-2.5 rounded-full border border-white/60 bg-purple-500/15 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-purple-500/25 hover:border-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10">Download CV</span>
          </button>
        </div>

      </div>
    </nav>
  );
}