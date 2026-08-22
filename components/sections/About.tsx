"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const stats = [
    { label: "Years of Study", value: "03+" },
    { label: "Featured Projects", value: "05+" },
    { label: "Primary Focus", value: "FULL STACK" },
    { label: "Industry Experience", value: "2026" }
  ];

  const codeSnippet = `const developer = {
  name: "Shashil Wittahachchi",
  role: "Full-Stack Software Engineer",
  focus: [
    "Web Applications",
    "Backend Systems",
    "UI/UX",
    "AI Integration"
  ],
  currentlyLearning: "Advanced Software Engineering",
  status: "Building..."
};`;

  return (
    <section id="about" className="relative z-10 scroll-mt-24">
      <SectionHeading number="01" title="Engineering Digital Experiences" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a Software Engineering-focused IT undergraduate with a deep passion for building robust digital solutions. By combining modern frontend experiences with scalable backend architecture, I create applications that look exceptional and perform flawlessly.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My approach bridges the gap between design and infrastructure. Whether I'm optimizing a MongoDB query, building a real-time React interface, or designing an intuitive user experience, my goal remains the same: delivering premium, production-ready software.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-panel p-4 border border-white/5 hover:border-cyber-cyan/30 transition-colors">
                <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative glass-panel rounded-xl overflow-hidden">
            <div className="bg-[#0f111a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-gray-500">developer.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              <code className="text-gray-300" dangerouslySetInnerHTML={{
                __html: codeSnippet
                  .replace(/const|name|role|focus|currentlyLearning|status/g, match => `<span class="text-cyber-cyan">${match}</span>`)
                  .replace(/"[^"]*"/g, match => `<span class="text-green-400">${match}</span>`)
                  .replace(/\[|\]|\{|\}/g, match => `<span class="text-cyber-purple">${match}</span>`)
              }} />
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
