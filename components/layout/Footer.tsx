"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-cyber-dark/80 backdrop-blur-md relative z-10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="font-heading font-bold text-xl text-white">
          SW<span className="text-cyber-cyan">.</span>
        </div>

        <div className="text-gray-400 text-sm flex flex-col items-center">
          <p>Designed & engineered by Shashil Wittahachchi</p>
          <div className="mt-2 flex items-center gap-2 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM STATUS: ONLINE
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a href="https://github.com/dskwittahachchi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shashilwittahachchi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <button onClick={scrollToTop} className="ml-4 flex items-center justify-center w-8 h-8 border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors group">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
