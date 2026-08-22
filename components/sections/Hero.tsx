"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const roles = [
    "Full-Stack Software Engineer",
    "Software Engineering Undergraduate",
    "React & Node.js Developer",
    "AI-Powered Web App Builder"
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center z-10 md:pr-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-cyber-cyan mb-4 tracking-widest text-sm"
        >
          HELLO, I'M
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 text-transparent bg-clip-text bg-hero-gradient drop-shadow-md"
        >
          DON SHASHIL<br />
          KASMIRA<br />
          WITTAHACHCHI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-8 mb-6 overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -32, -64, -96, 0] }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            className="flex flex-col text-xl md:text-2xl font-mono text-gray-300"
          >
            {roles.map((role, i) => (
              <span key={i} className="h-8 flex items-center">{role}</span>
            ))}
            <span className="h-8 flex items-center">{roles[0]}</span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-xl text-gray-400 text-lg mb-8"
        >
          I build secure, scalable and user-focused digital products —
          from polished interfaces to production-ready backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center gap-3 mb-10 text-sm font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-300">Available for Software Engineering Opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a href="#projects"><Button variant="primary">Explore Projects</Button></a>
          <a href="/cv.pdf" target="_blank"><Button variant="outline">Download CV</Button></a>
          
          <div className="flex items-center gap-2 ml-4">
            <a href="https://github.com/dskwittahachchi" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors rounded-md">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shashilwittahachchi" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-cyber-blue hover:text-cyber-blue transition-colors rounded-md">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@shashil.dev" className="p-2 border border-white/10 hover:border-cyber-purple hover:text-cyber-purple transition-colors rounded-md">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/message/BYHTT3LYEIU5A1" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-green-400 hover:text-green-400 transition-colors rounded-md">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Content / Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex-1 flex justify-center items-center relative min-h-[500px] mt-12 md:mt-0 z-10"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Cyber scanner rings */}
          <div className="absolute inset-0 rounded-full border border-cyber-cyan/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-20px] rounded-full border border-dashed border-cyber-purple/20 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-[-40px] rounded-full border border-cyber-blue/10 animate-[spin_20s_linear_infinite]" />
          
          {/* Profile Photo Placeholder - Apply rim lighting via shadow */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-cyber-cyan/50 shadow-[0_0_30px_rgba(0,245,255,0.3)] bg-cyber-darkest flex items-center justify-center">
             <img src="/profile.jpeg" alt="Shashil Wittahachchi" className="w-full h-full object-cover" />
          </div>

          {/* Floating HUD Cards */}
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-12 top-1/4 glass-panel px-3 py-1.5 text-xs font-mono text-cyber-cyan border-l-2 border-l-cyber-cyan">
            FULL STACK
          </motion.div>
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-8 top-1/3 glass-panel px-3 py-1.5 text-xs font-mono text-cyber-purple border-r-2 border-r-cyber-purple">
            REACT & NODE.JS
          </motion.div>
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 left-1/4 glass-panel px-3 py-1.5 text-xs font-mono text-cyber-blue border-b-2 border-b-cyber-blue">
            TYPESCRIPT
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest font-mono text-gray-500">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-cyan to-transparent animate-pulse" />
      </motion.div>

    </section>
  );
}
