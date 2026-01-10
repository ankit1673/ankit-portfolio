import React from 'react';
import { motion } from 'framer-motion';

// This matches your filename. 
// IMPORTANT: Check if it is .jpg or .png in your folder and match it here!
import profileImg from '../assets/Ankit_Kumar_Tiwari_Photo.jpeg'; 

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6 pt-20">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Photo Section */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-cyan-400 rounded-2xl rotate-6 opacity-20"></div>
            <img 
              src={profileImg} 
              alt="Ankit Kumar Tiwari" 
              className="relative w-full h-full object-cover rounded-2xl border-2 border-cyan-400/50 transition-all duration-500"
              onError={(e) => {
                // Safety net: prevents blank screen if path is still wrong
                e.target.src = "https://ui-avatars.com/api/?name=Ankit+Tiwari&background=0ea5e9&color=fff&size=128";
              }}
            />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Ankit Kumar <span className="text-cyan-400">Tiwari</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            BCA Final Year Student at <span className="text-white">MGKVP University</span>. 
            Focused on Frontend Development with a <span className="text-cyan-400">7.9 CGPA</span>.
          </p>

          {/* Awards & Stats Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-xl">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                HackerRank: 4★ C++
              </span>
            </div>
            <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-xl">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                BCA CGPA: 7.9
              </span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a href="#projects" className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-700 text-white font-bold rounded-lg hover:border-cyan-400 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}