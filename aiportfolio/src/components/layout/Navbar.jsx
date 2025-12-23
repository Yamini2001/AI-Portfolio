import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      // Fallback: scroll to top if home section not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-6 py-0.1 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => handleScroll("home")}
            className="cursor-pointer group"
          >
            <img
              src={logo}
              alt="AI Portfolio Logo"
              className="
                h-12 w-auto
                md:h-14
                lg:h-16
                xl:h-20
                object-contain
                bg-transparent
                mix-blend-lighten
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              <li onClick={() => handleScroll("home")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => handleScroll("about")} className="cursor-pointer hover:text-white">About</li>
              <li onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-white">Projects</li>
              <li onClick={() => handleScroll("skills")} className="cursor-pointer hover:text-white">Skills</li>
              <li onClick={() => handleScroll("contact")} className="cursor-pointer hover:text-white">Contact</li>
            </ul>

            {/* DOWNLOAD CV BUTTON */}
            <a
              href="/FullStack Developer Yamini Resume.pdf"
              download
              className="relative group overflow-hidden px-7 py-3 rounded-full
                         border border-white/60 bg-purple-500/15
                         text-[10px] font-black uppercase tracking-[0.3em] text-white
                         transition-all duration-300
                         hover:-translate-y-0.5
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                               -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100
                               bg-gradient-to-r from-purple-500 to-cyan-400 blur transition duration-300" />
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 z-50"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl flex items-center justify-center transition-all duration-500 md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center gap-10 text-lg font-bold uppercase tracking-[0.4em] text-gray-400">
          <li onClick={() => handleScroll("home")} className="hover:text-cyan-400">Home</li>
          <li onClick={() => handleScroll("about")} className="hover:text-cyan-400">About</li>
          <li onClick={() => handleScroll("projects")} className="hover:text-cyan-400">Projects</li>
          <li onClick={() => handleScroll("skills")} className="hover:text-cyan-400">Skills</li>
          <li onClick={() => handleScroll("contact")} className="hover:text-cyan-400">Contact</li>
        </ul>
      </div>
    </>
  );
}
