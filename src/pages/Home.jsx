import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/* ── Animated "floating" background shapes ── */
function FloatingShape({ className, delay = 0 }) {
    return (
        <motion.div
            className={`absolute rounded-full opacity-20 blur-3xl ${className}`}
            animate={{
                y: [0, -30, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
    );
}

/* ── Stagger animation variants ── */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16" id="home">

            {/* Background blobs */}
            <FloatingShape className="w-96 h-96 bg-primary-500 top-10 -left-20" delay={0} />
            <FloatingShape className="w-80 h-80 bg-purple-500 bottom-20 -right-10" delay={2} />
            <FloatingShape className="w-64 h-64 bg-accent-500 top-1/2 left-1/2" delay={4} />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Hero content */}
            <motion.div
                className="section-container relative z-10 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* ── Left: text content ── */}
                <div className="flex-1 text-center lg:text-left">
                    {/* Status pill */}
                    <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
                        <br />
                        <span className="text-slate-800 dark:text-white">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        variants={item}
                        className="text-lg sm:text-xl text-primary-500 dark:text-primary-400 font-semibold mb-6 max-w-xl"
                    >
                        {personalInfo.title}
                    </motion.p>

                    {/* Bio */}
                    <motion.p
                        variants={item}
                        className="text-slate-600 dark:text-slate-300 text-base max-w-lg leading-relaxed mb-8"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                        <Link to="/projects" className="btn-primary">
                            View Projects <ArrowRight size={16} />
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            Contact Me <Mail size={16} />
                        </Link>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={item} className="flex justify-center lg:justify-start gap-4">
                        {[
                            { label: 'GitHub', href: personalInfo.github, Icon: Github },
                            { label: 'LinkedIn', href: personalInfo.linkedin, Icon: Linkedin },
                            { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: Mail },
                        ].map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={label !== 'Email' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="group p-3 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border
                                 text-slate-600 dark:text-slate-300 hover:text-white
                                 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-600
                                 hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30
                                 transition-all duration-300"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* ── Right: profile photo ── */}
                <motion.div
                    variants={item}
                    className="flex-shrink-0 flex justify-center"
                >
                    {/* Outer glow ring */}
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary-500 via-purple-500 to-accent-500 opacity-60 blur-sm"
                        />
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-2xl shadow-primary-500/40">
                            <img
                                src="/profile.png"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Floating badge */}
                        <span className="absolute -bottom-2 -right-2 px-4 py-1.5 bg-accent-500 text-white rounded-xl text-sm font-semibold shadow-lg">
                            Available 🚀
                        </span>
                    </div>
                </motion.div>
            </motion.div>


            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative z-10 w-full bg-white/70 dark:bg-dark-surface/70 backdrop-blur-md border-t border-slate-200 dark:border-dark-border"
            >
                <div className="section-container py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {[
                        { label: 'Projects Built', value: '10+' },
                        { label: 'Technologies', value: '12+' },
                        { label: 'Years Learning', value: '3+' },
                        { label: 'Certifications', value: '2+' },
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <div className="text-3xl font-bold gradient-text">{value}</div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
