import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Add shadow when scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-dark-surface/90 backdrop-blur-lg shadow-lg shadow-black/10'
                : 'bg-transparent'
                }`}
            role="banner"
        >
            <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        S
                    </span>
                    <span className="font-bold text-lg gradient-text">Shashil</span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-1" role="list">
                    {navLinks.map(({ label, to }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === to
                                    ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-white/10'
                                    }`}
                                aria-current={location.pathname === to ? 'page' : undefined}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Theme toggle + Hamburger */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={isDark ? 'sun' : 'moon'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.span>
                        </AnimatePresence>
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-dark-surface/95 backdrop-blur-lg border-t border-slate-200 dark:border-dark-border"
                    >
                        <ul className="section-container py-4 flex flex-col gap-1" role="list">
                            {navLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${location.pathname === to
                                            ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                                            }`}
                                        aria-current={location.pathname === to ? 'page' : undefined}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
