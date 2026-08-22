"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Trophy } from "lucide-react";

export default function Credentials() {
  const certs = [
    {
      title: "Certificate in Professional English & Information Technology",
      issuer: "Aquinas College of Higher Studies",
      year: "2023",
      icon: <Award className="w-6 h-6 text-cyber-cyan" />
    },
    {
      title: "Information & Communication Technology Competition",
      issuer: "Zonal Education Office, Matugama",
      year: "",
      achievements: [
        "1st Place — Divisional Level, Presentation Software",
        "2nd Place — Zonal Level"
      ],
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <section id="credentials" className="relative z-10 scroll-mt-24">
      <SectionHeading number="07" title="Credentials" />

      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel p-6 rounded-lg border border-white/5 hover:border-cyber-purple/30 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyber-purple/50 transition-colors">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight mb-2 group-hover:text-cyber-cyan transition-colors">{cert.title}</h3>
                <div className="text-gray-400 text-sm mb-1">{cert.issuer}</div>
                {cert.year && <div className="text-cyber-purple font-mono text-xs">{cert.year}</div>}
                
                {cert.achievements && (
                  <ul className="mt-3 space-y-2">
                    {cert.achievements.map((ach, j) => (
                      <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-cyber-cyan mt-1 font-mono text-[10px]">&gt;</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
