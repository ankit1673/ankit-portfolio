import { motion } from "framer-motion";

export default function SoftSkills() {
  // Strengths exactly as listed in your resume [cite: 24, 74]
  const softSkills = [
    "Problem Solving", 
    "Analytical Thinking", 
    "Team Collaboration", 
    "Communication", 
    "Adaptability"
  ];

  return (
    <section id="strengths" className="py-20 px-6 bg-[#0f172a] border-t border-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10 text-center uppercase tracking-widest text-sm">
          Core <span className="text-cyan-400">Strengths</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-bold shadow-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Professional Personal Details [cite: 26, 28, 76, 78] */}
        <div className="mt-16 text-center border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
            Languages: <span className="text-slate-300">English, Hindi, Bhojpuri</span>
          </p>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-2">
            Nationality: <span className="text-slate-300">Indian</span>
          </p>
          <p className="text-cyan-500/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
            Available for full-time roles | Willing to relocate
          </p>
        </div>
      </div>
    </section>
  );
}