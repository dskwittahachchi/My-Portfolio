"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  const educationList = [
    {
      institution: "Sri Lanka Institute of Information Technology — SLIIT",
      degree: "BSc in Information Technology",
      focus: "Software Engineering-focused undergraduate",
      year: "2023 — Present",
      status: "3rd Year",
      location: "Malabe, Sri Lanka"
    },
    {
      institution: "Ananda Sasthralaya National College",
      degree: "Advanced Level",
      focus: "",
      year: "2020 — 2023",
      status: "Completed",
      location: "Matugama, Sri Lanka"
    }
  ];

  return (
    <section id="education" className="relative z-10 scroll-mt-24">
      <SectionHeading number="06" title="Education" />

      <div className="relative pl-8 max-w-4xl">
        <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-blue to-transparent" />

        <div className="flex flex-col gap-12">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
              
              <div className="glass-panel p-6 rounded-lg border border-white/5 hover:border-cyber-blue/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{edu.institution}</h3>
                    <div className="text-lg text-cyber-cyan font-medium">{edu.degree}</div>
                  </div>
                  <div className="flex flex-col md:items-end font-mono text-sm text-gray-500">
                    <div className="text-cyber-purple">{edu.year}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
                
                {edu.focus && (
                  <p className="text-gray-400 mt-2 font-mono text-sm">
                    &gt; {edu.focus}
                  </p>
                )}
                <div className="mt-4 inline-block px-3 py-1 bg-white/5 rounded text-xs font-mono text-gray-300 border border-white/10">
                  {edu.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
