export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Certifications", href: "#certifications" },
   
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-tighter">
          ANKIT KUMAR <span className="text-cyan-400">TIWARI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-slate-400 hover:text-cyan-400 text-xs font-bold uppercase tracking-widest transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/Ankit_Kumar_Tiwari_BCA_2026.pdf" target="_blank" className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-md text-xs font-bold uppercase hover:bg-cyan-400/10 transition-all">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}