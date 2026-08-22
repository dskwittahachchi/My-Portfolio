"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="relative z-10 scroll-mt-24">
      <SectionHeading number="09" title="Contact" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-hero-gradient">REMARKABLE.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed"
          >
            I'm open to software engineering internships, full-stack opportunities, and interesting collaborations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="mailto:contact@shashil.dev">
               <Button variant="outline" icon={<Mail className="w-4 h-4 ml-2" />}>Send Email</Button>
            </a>
            <a href="https://www.linkedin.com/in/shashilwittahachchi" target="_blank" rel="noopener noreferrer">
               <Button variant="ghost" icon={<Linkedin className="w-4 h-4 ml-2" />}>LinkedIn</Button>
            </a>
            <a href="https://github.com/dskwittahachchi" target="_blank" rel="noopener noreferrer">
               <Button variant="ghost" icon={<Github className="w-4 h-4 ml-2" />}>GitHub</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-xl border border-white/5 flex flex-col gap-4">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                id="subject"
                required
                className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {formStatus === "success" ? (
              <div className="font-mono text-green-400 text-sm py-3 px-4 bg-green-400/10 border border-green-400/30 rounded flex items-center gap-2">
                <span className="animate-pulse">_</span> MESSAGE TRANSMITTED SUCCESSFULLY
              </div>
            ) : (
              <Button type="submit" variant="primary" className="w-full" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "TRANSMITTING..." : "Transmit Message →"}
              </Button>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
