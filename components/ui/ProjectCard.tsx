import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  number: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link?: string;
  className?: string;
}

export function ProjectCard({ number, type, title, description, tech, github, link, className }: ProjectCardProps) {
  return (
    <div className={cn("project-card group relative glass-panel rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-cyber-cyan/50", className)}>
      
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/0 via-cyber-purple/0 to-cyber-blue/0 group-hover:from-cyber-cyan/10 group-hover:via-transparent group-hover:to-cyber-blue/10 transition-colors duration-500 pointer-events-none" />

      {/* Placeholder for Screenshot - In a real app, this would be an Image component */}
      <div className="w-full h-48 md:h-64 bg-[#0a0f1c] relative overflow-hidden border-b border-white/5 flex items-center justify-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Mock UI Frame */}
        <div className="w-3/4 h-3/4 bg-cyber-dark border border-white/10 rounded-t-lg shadow-2xl relative translate-y-4 group-hover:translate-y-2 group-hover:scale-[1.03] transition-all duration-500 overflow-hidden">
          <div className="h-6 border-b border-white/10 flex items-center px-2 gap-1.5 bg-white/5">
             <div className="w-2 h-2 rounded-full bg-white/20" />
             <div className="w-2 h-2 rounded-full bg-white/20" />
             <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <div className="p-4 flex items-center justify-center h-full">
            <span className="font-heading font-bold text-2xl text-white/20 group-hover:text-cyber-cyan/30 transition-colors">{title}</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 relative z-10 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-16rem)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-cyber-cyan">{number}</span>
            <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">{type}</span>
          </div>
          <a href={link || "#"} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyber-cyan group-hover:text-cyber-cyan group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-col gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="px-2 py-1 text-[10px] font-mono text-gray-400 bg-white/5 rounded border border-white/5 group-hover:border-white/20 group-hover:text-gray-300 transition-colors">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <a href={link || "#"} className="text-sm font-mono text-white hover:text-cyber-cyan transition-colors flex items-center gap-2">
              ↗ View Case Study
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-2 ml-auto">
              <Github className="w-4 h-4" /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
