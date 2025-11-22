import React from 'react';
import Hero from './components/Hero';
import ProjectBook from './components/ProjectBook';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Hero />
      <ProjectBook />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;