import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const quickLinks = [
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
];

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border"
            role="contentinfo"
        >
            <div className="section-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-md">
                                S
                            </span>
                            <span className="font-bold text-lg gradient-text">Shashil</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            {personalInfo.bio.slice(0, 120)}…
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 text-sm uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-2" role="list">
                            {quickLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 text-sm uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex gap-3 mb-4">
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
                                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300
                             hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 dark:hover:text-primary-400
                             transition-all duration-200 hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{personalInfo.email}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">📍 {personalInfo.location}</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>© {year} {personalInfo.name}. All rights reserved.</span>
                    <span className="flex items-center gap-1.5">
                        Built with <Heart size={13} className="text-rose-500 fill-rose-500" /> using React &amp; Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}
