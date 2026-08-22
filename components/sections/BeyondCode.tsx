"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, User, Shield } from "lucide-react";

export default function BeyondCode() {
  const activities = [
    {
      role: "Batch Representative",
      org: "Sri Lanka Institute of Information Technology",
      year: "2024 — Present",
      icon: <Users className="w-5 h-5" />
    },
    {
      role: "Active Member",
      org: "Rotaract Club of SLIIT",
      year: "2026 — Present",
      icon: <User className="w-5 h-5" />
    },
    {
      role: "Sports Captain",
      org: "Ananda Sasthralaya National School",
      year: "2023",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <section id="leadership" className="relative z-10 scroll-mt-24">
      <SectionHeading number="08" title="Beyond Code" subtitle="Leadership, teamwork, and communication outside the IDE." />

      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel p-6 rounded-lg border border-white/5 hover:border-cyber-cyan/30 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyber-cyan/10 group-hover:text-cyber-cyan transition-colors">
                {act.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-cyber-cyan transition-colors">{act.role}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{act.org}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-cyber-purple tracking-wider">
              {act.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
