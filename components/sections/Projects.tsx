"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      number: "01",
      type: "FULL STACK",
      title: "Trackly",
      description: "Full-stack job application pipeline manager featuring a six-stage Kanban/table workflow, advanced filtering, pagination and six-month visual activity metrics.",
      tech: ["React 19", "TypeScript", "Node.js", "Express 5", "MongoDB", "Zod", "Vitest"],
      github: "https://github.com/dskwittahachchi/Job-Application-Tracker",
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      number: "02",
      type: "E-COMMERCE",
      title: "Élan Atelier",
      description: "Premium editorial clothing storefront with product variants, inventory management, persistent cart/wishlist and protected administrative workflows.",
      tech: ["React 19", "TypeScript", "Express 5", "MongoDB", "Zod", "JWT"],
      github: "https://github.com/dskwittahachchi/ecommerce-clothing-store",
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      number: "03",
      type: "SYSTEM ARCHITECTURE",
      title: "NovaCare",
      description: "Multi-role appointment scheduling system for patients, providers and administrators featuring server-side booking conflict detection and dynamic provider working-hour calculations.",
      tech: ["React 19", "TypeScript", "Node.js", "Express 5", "MongoDB"],
      github: "https://github.com/dskwittahachchi/appointment-booking-system",
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      number: "04",
      type: "AI INTEGRATION",
      title: "Finora",
      description: "Personal finance platform for expense management, recurring payments, budgeting and intelligent financial insights with interactive Recharts dashboards.",
      tech: ["React", "TypeScript", "Express", "MongoDB", "Recharts"],
      github: "https://github.com/dskwittahachchi/expense-budget-manager",
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      number: "05",
      type: "PLATFORM",
      title: "Lumina",
      description: "Modern role-aware Learning Management System featuring immersive lessons, quizzes, learning dashboards, instructor analytics, and an AI Study Coach interface.",
      tech: ["React 19", "TypeScript", "Vite", "Cloudflare Workers"],
      github: "https://github.com/dskwittahachchi/Learning-Management-System",
      className: "md:col-span-full lg:col-span-3"
    }
  ];

  return (
    <section id="projects" className="relative z-10 scroll-mt-24">
      <SectionHeading 
        number="04" 
        title="Selected Engineering Work" 
        subtitle="Products built from interface to infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={project.className}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
