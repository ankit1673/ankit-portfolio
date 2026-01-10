export default function Skills() {
  const skillGroups = [
    { 
      title: "Programming", 
      skills: ["C", "C++", "JavaScript"] 
    },
    { 
      title: "Web Technologies", 
      skills: ["HTML5", "CSS3", "React (Basic)", "Tailwind CSS", "Bootstrap"] 
    },
    { 
      title: "Core Computer Science", 
      skills: ["Data Structures", "OOPS", "DBMS & SQL", "Operating Systems", "Networking", "SDLC"] 
    },
    { 
      title: "Tools & Testing", 
      skills: ["Git", "GitHub", "Vite", "VS Code", "Manual Testing"] 
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical <span className="text-cyan-400">Toolkit</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-xs rounded-md border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}