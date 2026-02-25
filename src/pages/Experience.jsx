import { motion } from 'framer-motion';
import { timeline } from '../data/portfolioData';

const typeColors = {
    education: 'bg-primary-500',
    project: 'bg-purple-500',
    certification: 'bg-accent-500',
    internship: 'bg-amber-500',
};

const typeLabels = {
    education: 'Education',
    project: 'Project',
    certification: 'Certification',
    internship: 'Internship',
};

function TimelineItem({ entry, index }) {
    const isLeft = index % 2 === 0;

    return (
        <div className={`relative flex items-start gap-4 md:gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Icon — left side on mobile, center on md+ */}
            <div className="flex-shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white dark:bg-dark-card border-2 border-primary-400 shadow-lg shadow-primary-500/20 flex items-center justify-center text-lg md:text-xl"
                    aria-hidden="true"
                >
                    {entry.icon}
                </motion.div>
            </div>

            {/* Content card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 glow-card p-5 md:p-6 md:max-w-[calc(50%-2rem)]"
            >
                {/* Type badge */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3 ${typeColors[entry.type]}`}>
                    {typeLabels[entry.type]}
                </span>
                <div className="text-sm font-mono text-primary-500 dark:text-primary-400 mb-1">
                    {entry.year}
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-800 dark:text-white mb-1">{entry.title}</h3>
                <div className="text-primary-500 dark:text-primary-400 text-sm font-medium mb-2">{entry.organization}</div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{entry.description}</p>
            </motion.div>

            {/* Spacer for opposite side on desktop */}
            <div className="hidden md:block flex-1" />
        </div>
    );
}

export default function Experience() {
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
                        Experience &amp; <span className="gradient-text">Education</span>
                    </h1>
                    <p className="section-subheading">My journey so far</p>
                </motion.div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(typeLabels).map(([key, label]) => (
                        <span key={key} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className={`w-3 h-3 rounded-full ${typeColors[key]}`} />
                            {label}
                        </span>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line — left on mobile, center on md+ */}
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-500 rounded-full" aria-hidden="true" />

                    <div className="flex flex-col gap-10">
                        {timeline.map((entry, i) => (
                            <TimelineItem key={i} entry={entry} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
