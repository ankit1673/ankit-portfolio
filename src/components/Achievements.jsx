export default function Achievements() {
  const certifications = [
    { 
      name: "Technology Consulting Virtual Experience", 
      org: "Deloitte (Forage)", 
      year: "2025", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_skillbuild-activity-7413635118726254592-YYrh" 
    },
    { 
      name: "Artificial Intelligence Fundamentals", 
      org: "IBM SkillsBuild", 
      year: "2025", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_ibm-activity-7352746974384644096-Kk0H" 
    },
    { 
      name: "Data Visualization Virtual Experience", 
      org: "Tata (Forage)", 
      year: "2025", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_forage-activity-7320492549645758465-eXr-" 
    },
    { 
      name: "C++ Programming Internship", 
      org: "CodeSoft", 
      year: "2025", 
      link: "https://www.linkedin.com/posts/ankit-kumar-tiwari-130a42303_codsoft-virtual-internship-activity-7320491572553277440-mNvG" 
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Certifications & <span className="text-cyan-400">Verifications</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-400/50 transition-all group">
              <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400">{cert.name}</h4>
              <p className="text-slate-500 text-xs mt-2">{cert.org} • {cert.year}</p>
              <span className="text-cyan-500 text-[10px] mt-4 block uppercase font-bold tracking-widest">Verify Certificate ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}