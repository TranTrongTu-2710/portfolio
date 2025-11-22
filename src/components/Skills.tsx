import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Database, Server, Globe, PenTool, Cpu, Leaf, Code, Network, Zap, Activity, Container, GitBranch, Terminal } from 'lucide-react';

// Helper to map string icon name to component
const IconMap: any = {
  Database, Server, Globe, PenTool, Cpu, Leaf, Code, Network, Zap, Activity, Container, GitBranch, Terminal
};

const Skills: React.FC = () => {
  // Group skills by category
  const categories = {
    backend: "Backend & Core",
    database: "Database & Caching",
    frontend: "Frontend & UI",
    tools: "DevOps & Tools"
  };

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
                Kỹ Năng & <span className="text-emerald-500">Công Nghệ</span>
            </h2>
            <p className="text-slate-400">Tech stack tôi sử dụng hàng ngày</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey, catIndex) => {
                const categorySkills = SKILLS.filter(s => s.category === catKey);
                
                return (
                    <motion.div 
                        key={catKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                        className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-emerald-500/30 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                            {catKey === 'backend' && <Server className="text-emerald-500" />}
                            {catKey === 'database' && <Database className="text-indigo-500" />}
                            {catKey === 'frontend' && <Globe className="text-pink-500" />}
                            {catKey === 'tools' && <PenTool className="text-orange-500" />}
                            {categories[catKey]}
                        </h3>

                        <div className="space-y-5">
                            {categorySkills.map((skill, idx) => {
                                const Icon = IconMap[skill.icon] || Terminal;
                                return (
                                    <div key={idx} className="group">
                                        <div className="flex justify-between mb-2">
                                            <div className="flex items-center gap-2 text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">
                                                <Icon size={16} />
                                                {skill.name}
                                            </div>
                                            <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                className={`h-full rounded-full ${
                                                    catKey === 'backend' ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
                                                    catKey === 'database' ? 'bg-gradient-to-r from-indigo-600 to-indigo-400' :
                                                    catKey === 'frontend' ? 'bg-gradient-to-r from-pink-600 to-pink-400' :
                                                    'bg-gradient-to-r from-orange-600 to-orange-400'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;