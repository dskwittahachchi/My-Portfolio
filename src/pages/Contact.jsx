import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/* Simple front-end validation */
function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
}

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const formRef = useRef(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errs = validate(form);
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus('loading');
        try {
            /* ─── EmailJS integration ──────────────────────────────────────
               Replace the values below with your real EmailJS credentials.
               Set them in a .env file as VITE_EMAILJS_SERVICE_ID etc.
               ─────────────────────────────────────────────────────────── */
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Only attempt real send if real credentials are set
            if (serviceId !== 'YOUR_SERVICE_ID') {
                const emailjs = (await import('@emailjs/browser')).default;
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            } else {
                // Demo / placeholder delay
                await new Promise(r => setTimeout(r, 1500));
            }

            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    }

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-surface border
     ${errors[field]
            ? 'border-rose-400 dark:border-rose-500'
            : 'border-slate-200 dark:border-dark-border focus:border-primary-400 dark:focus:border-primary-500'}
     text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500
     focus:outline-none focus:ring-2 focus:ring-primary-400/30 transition-all`;

    return (
        <main className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-dark-bg">
            <div className="section-container">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="section-heading">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="section-subheading">Have a project in mind? Let&apos;s talk!</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left — Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                            Let&apos;s build something amazing together
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            I&apos;m currently open to internship opportunities, freelance projects,
                            and full-time roles. Whether you have a question, collaboration, or just
                            want to say hi — my inbox is always open!
                        </p>

                        {[
                            { Icon: Mail, label: 'Email', value: personalInfo.email },
                            { Icon: Phone, label: 'Phone', value: personalInfo.phone },
                            { Icon: MapPin, label: 'Location', value: personalInfo.location },
                        ].map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-center gap-4 glow-card p-4">
                                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex-shrink-0">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">{label}</div>
                                    <div className="font-medium text-slate-800 dark:text-slate-100">{value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Availability */}
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
                                <span className="font-semibold text-slate-800 dark:text-white">Available for Work</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Currently looking for internship and junior developer opportunities.
                                Response time is usually within 24 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="glow-card p-8 space-y-5"
                            noValidate
                            aria-label="Contact form"
                        >
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Full Name <span className="text-rose-400">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={inputClass('name')}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && <p id="name-error" className="text-xs text-rose-500 mt-1" role="alert">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Email Address <span className="text-rose-400">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className={inputClass('email')}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && <p id="email-error" className="text-xs text-rose-500 mt-1" role="alert">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Message <span className="text-rose-400">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    className={`${inputClass('message')} resize-none`}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                />
                                {errors.message && <p id="message-error" className="text-xs text-rose-500 mt-1" role="alert">{errors.message}</p>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                aria-live="polite"
                            >
                                {status === 'loading' ? (
                                    <><Loader size={16} className="animate-spin" /> Sending…</>
                                ) : status === 'success' ? (
                                    <><CheckCircle size={16} /> Message Sent!</>
                                ) : (
                                    <><Send size={16} /> Send Message</>
                                )}
                            </button>

                            {/* Status messages */}
                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-accent-500 text-sm bg-accent-500/10 rounded-xl p-3" role="status">
                                    <CheckCircle size={16} />
                                    Thanks! I&apos;ll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-rose-500 text-sm bg-rose-500/10 rounded-xl p-3" role="alert">
                                    <AlertCircle size={16} />
                                    Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
