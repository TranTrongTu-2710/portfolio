import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-200 mb-6">Sẵn sàng cho thử thách mới?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Tôi đang tìm kiếm cơ hội việc làm Java Backend Developer. Nếu bạn quan tâm đến profile của tôi, hãy liên hệ ngay.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
                <Github size={24} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 transition-all">
                <Linkedin size={24} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-3 rounded-full bg-slate-800 text-emerald-400 hover:bg-slate-700 hover:text-emerald-300 transition-all">
                <Mail size={24} />
            </a>
        </div>

        <div className="text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Spring vibes.
        </div>
      </div>
    </footer>
  );
};

export default Contact;