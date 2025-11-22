import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Terminal, ChevronDown, MapPin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-emerald-500/30">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 relative"
          >
            <div className="w-60 h-60 rounded-full border-4 border-emerald-500/20 p-1 relative">
              <img 
                src="./avatar.jpg" 
                alt="Avatar" 
                className="w-full h-full rounded-full object-cover hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-2 w-6 h-6 bg-emerald-500 border-4 border-slate-950 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 mb-6 backdrop-blur-sm"
          >
            <Terminal size={14} className="text-emerald-400" />
            <span className="text-sm text-emerald-400 font-mono">Sinh viên năm 4 ĐH Công Nghiệp Hà Nội</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{PROFILE.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-slate-400 font-light mb-8"
          >
            {PROFILE.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl text-slate-400 leading-relaxed mb-10 text-lg"
          >
            {PROFILE.about}
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap justify-center gap-6 text-slate-400"
          >
            <div className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-default">
                <MapPin size={18} />
                <span>{PROFILE.location}</span>
            </div>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail size={18} />
                <span>{PROFILE.email}</span>
            </a>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;