import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects, categories } from '../data/portfolioData';

/* ── Single project card ── */
function ProjectCard({ project, index }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glow-card overflow-hidden group"
            aria-label={project.title}
        >
            {/* Card top gradient bar */}
            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            {project.featured && (
                                <span className="flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                                    <Star size={10} fill="currentColor" /> Featured
                                </span>
                            )}
                            <span className="text-xs text-slate-400 dark:text-slate-500">{project.category}</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                        <span key={t} className="tech-badge text-xs">{t}</span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    >
                        <Github size={14} /> Code
                    </a>
                    {project.demo !== '#' && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all"
                        >
                            <ExternalLink size={14} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <main className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-dark-bg">
            <div className="section-container">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h1 className="section-heading">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="section-subheading">A selection of what I&apos;ve built</p>
                </motion.div>

                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            role="tab"
                            aria-selected={active === cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${active === cat
                                ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-slate-200 dark:border-dark-border'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 text-center"
                >
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                        Want to see more? Check out my GitHub profile.
                    </p>
                    <a
                        href="https://github.com/dskwittahachchi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <Github size={16} /> View GitHub Profile
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
