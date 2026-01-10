export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f172a] border-t border-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to <span className="text-cyan-400">Hire?</span></h2>
        <div className="bg-slate-900/60 p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <p className="text-slate-400 mb-10">Available for full-time roles and internships starting immediately.</p>
          <div className="flex flex-col gap-6 items-center">
            <a href="mailto:kumartiwariankit853@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              kumartiwariankit853@gmail.com 
            </a>
            <p className="text-slate-300 font-mono">+91-7352085345 </p>
            <div className="flex gap-8 mt-4">
              <a href="https://linkedin.com/in/ankit-kumar-tiwari-130a42303" target="_blank" className="text-slate-500 hover:text-white text-xs uppercase font-bold tracking-widest">LinkedIn </a>
              <a href="https://github.com/ankit1673" target="_blank" className="text-slate-500 hover:text-white text-xs uppercase font-bold tracking-widest">GitHub </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}