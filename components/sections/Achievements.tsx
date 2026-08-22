"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Target } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "School Record Holder",
      subtitle: "110m Hurdles",
      year: "2022",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "1st Runner-Up",
      subtitle: "Volleyball (Sri Lanka–India Tour)",
      year: "2016",
      icon: <Activity className="w-6 h-6 text-green-400" />
    },
    {
      title: "3rd Place",
      subtitle: "All-Island Chess Championship",
      year: "2015",
      icon: <Target className="w-6 h-6 text-cyber-cyan" />
    }
  ];

  return (
    <section className="relative z-10">
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 glass-panel p-4 rounded-lg border border-white/5 group hover:bg-white/5 transition-colors"
          >
            <div className="p-3 bg-white/5 rounded-lg shrink-0">
              {ach.icon}
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm">{ach.title}</h4>
              <p className="text-xs text-gray-400">{ach.subtitle}</p>
              <div className="text-[10px] font-mono text-cyber-purple mt-1">{ach.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
