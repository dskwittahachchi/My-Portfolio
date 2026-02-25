import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-dark-bg">
            <div className="section-container">
                {/* Section heading */}
                <motion.div
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h1 className="section-heading">
                        About <span className="gradient-text">Me</span>
                    </h1>
                    <p className="section-subheading">Get to know the person behind the code</p>
                </motion.div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Avatar & quick facts */}
                    <motion.div
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col items-center lg:items-start gap-6"
                    >
                        {/* Profile photo */}
                        <div className="relative">
                            <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/30 ring-4 ring-primary-500/40">
                                <img
                                    src="/profile.png"
                                    alt="Shashil Kamira Wittahachchi"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <span className="absolute -bottom-3 -right-3 px-4 py-1.5 bg-accent-500 text-white rounded-xl text-sm font-semibold shadow-lg">
                                Available 🚀
                            </span>
                        </div>
                        {/* Quick info cards */}
                        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                            {[
                                { icon: '📍', label: 'Location', value: personalInfo.location },
                                { icon: '📧', label: 'Email', value: 'In contact section' },
                                { icon: '💼', label: 'Role', value: 'IT Undergraduate' },
                                { icon: '🌐', label: 'Focus', value: 'Full-Stack Dev' },
                            ].map(({ icon, label, value }) => (
                                <div key={label} className="glow-card p-4">
                                    <div className="text-2xl mb-1">{icon}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wide">{label}</div>
                                    <div className="font-medium text-sm text-slate-700 dark:text-slate-200 mt-0.5">{value}</div>
                                </div>
                            ))}
                        </div>


                    </motion.div>

                    {/* Right — Text content */}
                    <motion.div
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                        variants={{ ...fadeUp, hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } }}
                        className="space-y-8"
                    >
                        {/* Intro */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                                Who am I?
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                I am an IT undergraduate with a strong interest in building practical, real-world software
                                solutions that solve business problems. I focus on developing clean, scalable, and
                                user-friendly web applications using modern technologies, while maintaining a strong
                                understanding of system design and project workflows.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                                I have hands-on experience developing full-stack web applications using React.js, Spring Boot,
                                and MySQL, with a solid foundation in Java, HTML, CSS, and JavaScript. My projects include
                                administrative dashboards, reservation systems, and business websites, where I have applied
                                concepts such as RESTful APIs, authentication, role-based access control, and database design.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                                Beyond coding, I am highly interested in project management and enjoy working with structured
                                plans, clear documentation, and collaborative development processes. I value clean
                                architecture, maintainable code, and effective communication, which allows me to bridge the
                                gap between technical teams and business requirements.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                                I am continuously learning new technologies and best practices, and I am motivated to grow
                                into a professional role where I can contribute to impactful projects, gain industry
                                experience, and deliver high-quality software solutions.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="glow-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="font-bold text-slate-800 dark:text-white">Education</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <div className="font-semibold text-slate-800 dark:text-slate-100">Bachelor of Information Technology</div>
                                    <div className="text-primary-500 dark:text-primary-400">SLIIT University - Malabe · 2024 – Present</div>
                                    <div className="text-slate-500 dark:text-slate-400 mt-1">
                                        Specializing in Software Engineering, Database Management & Project Management
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 dark:border-dark-border pt-3">
                                    <div className="font-semibold text-slate-800 dark:text-slate-100">Certificate in Professional English &amp; Information Technology</div>
                                    <div className="text-primary-500 dark:text-primary-400">Aquinas College of Higher Studies · 2023</div>
                                </div>
                                <div className="border-t border-slate-100 dark:border-dark-border pt-3">
                                    <div className="font-semibold text-slate-800 dark:text-slate-100">Advanced Level — Physical Science</div>
                                    <div className="text-primary-500 dark:text-primary-400">Ananda Sasthralaya National College - Matugama · 2023</div>
                                </div>
                            </div>
                        </div>

                        {/* Career interests */}
                        <div className="glow-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent-400/20 text-accent-500">
                                    <Heart size={20} />
                                </div>
                                <h3 className="font-bold text-slate-800 dark:text-white">Career Interests</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Web Development',
                                    'Project Management',
                                    'System Design',
                                    'REST APIs',
                                    'Cloud Computing',
                                    'Software Architecture',
                                ].map(interest => (
                                    <span key={interest} className="tech-badge">{interest}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
