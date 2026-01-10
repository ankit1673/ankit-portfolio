export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12"><span className="text-cyan-400 font-mono">04.</span> Experience</h2>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Frontend Developer Intern</h3>
              <p className="text-cyan-400 font-bold">BR Softech Technology</p>
            </div>
            <span className="text-slate-500 font-mono text-sm">Apr 2025 — Jun 2025</span>
          </div>
          <ul className="space-y-3">
            <li className="text-slate-400 text-sm flex gap-2"><span>•</span> Developed responsive UI components using React, Tailwind CSS, and Bootstrap</li>
            <li className="text-slate-400 text-sm flex gap-2"><span>•</span> Converted functional requirements into reusable frontend components</li>
            <li className="text-slate-400 text-sm flex gap-2"><span>•</span> Followed SDLC practices and performed basic manual UI testing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}