export default function Education() {
  const edu = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      score: "CGPA: 7.9 (79%)",
      inst: "Saraswati Uchcha Shiksha Awam Takniki Snatkottar Mahavidyalay, Varanasi",
      univ: "Affiliated to Mahatma Gandhi Kashi Vidyapeeth University",
      date: "2023 — 2026"
    },
    {
      degree: "Class XII (Bihar Board)",
      score: "69%",
      inst: "Bihar School Examination Board",
      date: "2023"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12"><span className="text-cyan-400 font-mono">02.</span> Education</h2>
        <div className="space-y-8">
          {edu.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="text-cyan-400 text-sm mt-1">{item.inst}</p>
                  {item.univ && <p className="text-slate-500 text-xs mt-1">{item.univ}</p>}
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="text-slate-500 font-mono text-sm">{item.date}</span>
                  <p className="text-white font-bold mt-1">{item.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}