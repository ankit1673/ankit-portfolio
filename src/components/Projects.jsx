import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Blinkit Clone",
      tech: "React, Tailwind CSS",
      desc: "Developed a responsive e-commerce frontend focused on product listing and cart UI usability. Optimized layout consistency and performance.",
      link: "https://github.com/ankit1673"
    },
    {
      title: "Professional React Portfolio",
      tech: "React, Vite, Framer Motion",
      desc: "Designed and developed this high-performance personal brand site to showcase my BCA background and 7.9 CGPA.",
      link: "https://github.com/ankit1673"
    },
    {
      title: "Explore the World",
      tech: "HTML, CSS, JavaScript",
      desc: "Interactive tourism website showcasing travel destinations[cite: 60, 61]. Developed responsive UI with a focus on frontend structuring.",
      link: "https://github.com/ankit1673"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-cyan-400 font-mono text-xl">05.</span> Technical Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-cyan-500 text-[10px] font-bold uppercase tracking-widest">{proj.tech}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                View Source Code →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}