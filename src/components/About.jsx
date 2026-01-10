export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="text-cyan-400 font-mono text-xl">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-400 space-y-6 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white">Detail-oriented BCA final-year student</span> with a strong foundation in core Computer Science and modern web technologies.
            </p>
            <p>
              Currently pursuing my degree at <span className="text-cyan-400">MGKVP University (2023-2026)</span> with a CGPA of 7.9. I am actively seeking entry-level software or IT roles to apply my problem-solving skills in a professional environment.
            </p>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 h-fit">
            <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Core Focus</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li>• Data Structures & Algorithms </li>
              <li>• OOPS & DBMS </li>
              <li>• Software Development Life Cycle </li>
              <li>• Manual Testing Basics </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}