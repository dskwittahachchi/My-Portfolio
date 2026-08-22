"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Database, Layout, Server, Settings, ShieldCheck, Terminal, Webhook } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "border-cyber-cyan text-cyber-cyan",
      bg: "bg-cyber-cyan/5",
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Zod"],
      color: "border-cyber-blue text-cyber-blue",
      bg: "bg-cyber-blue/5",
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "MongoDB Atlas"],
      color: "border-green-400 text-green-400",
      bg: "bg-green-400/5",
    },
    {
      title: "Testing",
      icon: <ShieldCheck className="w-5 h-5" />,
      skills: ["Vitest", "Supertest"],
      color: "border-yellow-400 text-yellow-400",
      bg: "bg-yellow-400/5",
    },
    {
      title: "Cloud & Deployment",
      icon: <Webhook className="w-5 h-5" />,
      skills: ["Vercel", "Railway", "Cloudflare Workers"],
      color: "border-cyber-purple text-cyber-purple",
      bg: "bg-cyber-purple/5",
    },
    {
      title: "UI / UX",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Figma", "Wireframing", "Rapid Prototyping", "User Interface Design"],
      color: "border-pink-400 text-pink-400",
      bg: "bg-pink-400/5",
    },
    {
      title: "Tools",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["Git", "GitHub", "Postman"],
      color: "border-orange-400 text-orange-400",
      bg: "bg-orange-400/5",
    },
    {
      title: "APIs & Integrations",
      icon: <Settings className="w-5 h-5" />,
      skills: ["OpenAI API", "Gemini API", "Stripe API"],
      color: "border-white text-white",
      bg: "bg-white/5",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="stack" className="relative z-10 scroll-mt-24">
      <SectionHeading number="03" title="Tools I Build With" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`glass-panel p-6 rounded-lg border-t-2 ${cat.color} group hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className={`w-10 h-10 rounded flex items-center justify-center mb-4 ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
              {cat.icon}
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded hover:border-cyber-cyan hover:text-cyber-cyan transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
