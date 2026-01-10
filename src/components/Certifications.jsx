import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    { 
      name: "Technology Consulting Virtual Experience", 
      org: "Deloitte (Forage)", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_skillbuild-activity-7413635118726254592-YYrh" 
    },
    { 
      name: "Artificial Intelligence Fundamentals", 
      org: "IBM SkillsBuild", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_ibm-activity-7352746974384644096-Kk0H" 
    },
    { 
      name: "Frontend Development Internship", 
      org: "BR Softech", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_web-development-activity-7347183758325809153-mVn3" 
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Verified <span className="text-cyan-400">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center"
            >
              <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                ✓
              </div>
              <h4 className="text-white text-sm font-bold mb-2">{cert.name}</h4>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-4">{cert.org}</p>
              <span className="text-cyan-500 text-[10px] font-bold border-b border-cyan-500/30 pb-1">Verify Link</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}