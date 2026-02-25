import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

/* ── Animated progress bar ── */
function SkillBar({ name, level, delay = 0 }) {
    return (
        <div className="group">
            <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
                <span className="text-xs font-semibold text-primary-500">{level}%</span>
            </div>
            <div className="h-2.5 bg-slate-200 dark:bg-dark-border rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500 relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: 'easeOut' }}
                >
                    {/* Shimmer overlay */}
                    <span className="absolute inset-0 progress-shimmer rounded-full" />
                </motion.div>
            </div>
        </div>
    );
}

/* ── Category card ── */
function CategoryCard({ category, icon, items, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glow-card p-6 space-y-5"
        >
            <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-hidden="true">{icon}</span>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{category}</h3>
            </div>
            <div className="space-y-4">
                {items.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-dark-bg">
            <div className="section-container">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="section-heading">
                        Technical <span className="gradient-text">Skills</span>
                    </h1>
                    <p className="section-subheading">Technologies I work with on a daily basis</p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {skills.map((group, i) => (
                        <CategoryCard key={group.category} {...group} index={i} />
                    ))}
                </div>

                {/* Tools / tech pill cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-14 glass-card p-8"
                >
                    <h2 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-6">
                        Technologies I&apos;ve Worked With
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'React.js', 'Spring Boot', 'Java', 'PHP', 'Node.js',
                            'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
                            'Git', 'GitHub', 'Postman', 'VS Code', 'REST APIs',
                            'Maven', 'IntelliJ IDEA', 'XAMPP',
                        ].map(tech => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="tech-badge cursor-default select-none text-sm px-4 py-2"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
