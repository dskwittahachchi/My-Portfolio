"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 scroll-mt-24">
      <SectionHeading number="02" title="Where I'm Building" />

      <div className="relative pl-8 md:pl-0">
        {/* Animated Timeline Line for Mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 md:hidden">
          <motion.div 
            className="absolute top-0 w-full bg-cyber-cyan"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Animated Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div 
              className="absolute top-0 w-full bg-cyber-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Experience Card */}
          <div className="glass-panel p-6 md:p-8 rounded-lg relative overflow-hidden group border-white/10 hover:border-cyber-cyan/50 transition-colors">
            {/* Timeline Dot */}
            <div className="absolute -left-2 md:-left-[45px] top-8 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-cyan z-10 shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">Full-Stack Software Engineer Intern</h3>
                <div className="text-xl text-gray-300 font-medium">SLT-MOBITEL</div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-xs font-mono text-cyber-cyan">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
                  </span>
                  CURRENT
                </div>
                <div className="text-sm font-mono text-gray-500">Aug 2026 — Present</div>
              </div>
            </div>

            <div className="text-sm font-mono text-cyber-purple mb-6 uppercase tracking-wider">
              Digital Platforms Division
            </div>

            <p className="text-gray-400 leading-relaxed max-w-3xl">
              Working within the Digital Platforms Division on full-stack software development and core IT tasks. Contributing to modern web applications and software modules while strictly adhering to enterprise security guidelines and professional software engineering practices.
            </p>
            
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
               <span className="font-heading text-8xl font-black">01</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
