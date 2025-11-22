import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Server, Code2, Images } from 'lucide-react';

const ProjectBook: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next (Project level)

  const currentProject = PROJECTS[currentProjectIndex];

  const nextStep = () => {
    if (currentImageIndex < currentProject.images.length - 1) {
      // Next image in same project
      setCurrentImageIndex((prev) => prev + 1);
    } else if (currentProjectIndex < PROJECTS.length - 1) {
      // Next project
      setDirection(1);
      setCurrentImageIndex(0);
      setCurrentProjectIndex((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentImageIndex > 0) {
      // Previous image in same project
      setCurrentImageIndex((prev) => prev - 1);
    } else if (currentProjectIndex > 0) {
      // Previous project
      setDirection(-1);
      const prevProjectIndex = currentProjectIndex - 1;
      setCurrentProjectIndex(prevProjectIndex);
      // Set to last image of previous project
      setCurrentImageIndex(PROJECTS[prevProjectIndex].images.length - 1);
    }
  };

  const isFirstStep = currentProjectIndex === 0 && currentImageIndex === 0;
  const isLastStep = currentProjectIndex === PROJECTS.length - 1 && currentImageIndex === currentProject.images.length - 1;

  const bookVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            Dự Án <span className="text-emerald-500">Đã Làm</span>
          </h2>
          <p className="text-slate-400">Tuyển tập các hệ thống và ứng dụng tôi đã xây dựng</p>
        </div>

        {/* Navigation Hint */}
        <div className="flex justify-center gap-2 mb-6 text-sm font-mono text-emerald-500/70">
           <span>Project: {currentProjectIndex + 1}/{PROJECTS.length}</span>
           <span>•</span>
           <span>Image: {currentImageIndex + 1}/{currentProject.images.length}</span>
        </div>

        {/* Book Container */}
        <div className="relative max-w-5xl mx-auto h-[650px] md:h-[550px] perspective-1000">
            
          <AnimatePresence initial={false} custom={direction} mode='wait'>
            <motion.div
              key={currentProjectIndex}
              custom={direction}
              variants={bookVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full flex flex-col md:flex-row bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
            >
                {/* Left Page (Image Gallery) */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative group bg-slate-950 overflow-hidden">
                    {/* Image Transition Wrapper */}
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={`${currentProjectIndex}-${currentImageIndex}`}
                            src={currentProject.images[currentImageIndex]} 
                            alt={currentProject.title} 
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-contain md:object-cover bg-black"
                        />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent z-10 pointer-events-none" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                        <div className="text-emerald-400 text-sm font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
                             <Server size={16} />
                             {currentProject.role}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{currentProject.title}</h3>
                        {currentProject.images.length > 1 && (
                            <div className="flex gap-1 mt-2">
                                {currentProject.images.map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-emerald-500' : 'w-2 bg-slate-600'}`} 
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Spine Effect for Desktop */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-slate-900/50 z-30 pointer-events-none" />
                </div>

                {/* Right Page (Details) */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-10 bg-slate-800 flex flex-col justify-between relative">
                     {/* Paper Texture/Glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-slate-500 font-mono text-sm">
                                Project ID: #00{currentProject.id}
                            </span>
                            <div className="h-px bg-slate-700 flex-1 mx-4" />
                            <Images size={16} className="text-slate-500" />
                        </div>
                        
                        <h4 className="text-emerald-500 font-bold mb-3 uppercase text-sm tracking-wide">Mô tả</h4>
                        <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">
                            {currentProject.description}
                        </p>

                        <h4 className="text-emerald-500 font-bold mb-3 uppercase text-sm tracking-wide flex items-center gap-2">
                             <Code2 size={16} /> Công nghệ
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {currentProject.techStack.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-md text-xs font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                        {currentProject.repoUrl && (
                            <a href={currentProject.repoUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-950 border border-slate-700 transition-all">
                                <Github size={18} /> Source
                            </a>
                        )}
                        {currentProject.demoUrl && (
                            <a href={currentProject.demoUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Outside the book) */}
          <div className="absolute top-1/2 -left-2 md:-left-16 transform -translate-y-1/2 z-10">
            <button 
                onClick={prevStep} 
                disabled={isFirstStep}
                className={`p-3 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 hover:bg-slate-700 transition-all shadow-lg z-50 ${isFirstStep ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            >
                <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-2 md:-right-16 transform -translate-y-1/2 z-10">
            <button 
                onClick={nextStep}
                disabled={isLastStep}
                className={`p-3 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 hover:bg-slate-700 transition-all shadow-lg z-50 ${isLastStep ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            >
                <ChevronRight size={24} />
            </button>
          </div>

        </div>
        
        <div className="text-center mt-12">
            <p className="text-slate-500 text-sm italic">
                Nhấn mũi tên để xem thêm ảnh. Hết ảnh sẽ tự động chuyển sang dự án tiếp theo.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectBook;