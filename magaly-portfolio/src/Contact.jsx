import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, MessageCircleMore } from 'lucide-react';

const contactLinks = [
    {
        label: 'Email',
        title: 'Send me a message',
        value: 'youremail@example.com',
        href: 'mailto:youremail@example.com',
        icon: Mail,
        accent: 'from-pink-500/25 to-purple-500/10'
    },
    {
        label: 'LinkedIn',
        title: 'Let’s connect professionally',
        value: 'linkedin.com/in/yourprofile',
        href: 'https://linkedin.com/in/yourprofile',
        icon: Globe,
        accent: 'from-sky-500/25 to-cyan-500/10'
    },
    {
        label: 'Instagram',
        title: 'Follow my creative side',
        value: '@yourhandle',
        href: 'https://instagram.com/yourhandle',
        icon: MessageCircleMore,
        accent: 'from-fuchsia-500/25 to-orange-400/10'
    }
];

const Contact = () =>
{
    return (
        <section id="contact" className="w-full border-t border-white/5 bg-[#01061a] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/65 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-sm md:p-12"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.18),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(3,7,18,0.92))]" />
                    <motion.div
                        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-purple-500/12 blur-3xl"
                    />
                    <motion.div
                        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
                    />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 max-w-2xl"
                        >
                            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-purple-200">Contact Me</p>
                            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                                Let&apos;s make something that feels exciting.
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-300">
                                Whether it&apos;s a project, internship, collaboration, or just a quick hello, these are the best ways to reach me.
                            </p>
                        </motion.div>

                        <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {contactLinks.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.a
                                        key={item.label}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -8, scale: 1.01 }}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="group relative min-h-[180px] w-[240px] flex-none overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20 hover:bg-white/[0.08] md:flex-1"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%,transparent_60%,rgba(255,255,255,0.05))]" />

                                        <div className="relative z-10 flex h-full flex-col">
                                            <div className="mb-8 flex items-start justify-between">
                                                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
                                                    <Icon className="text-white" size={22} />
                                                </div>
                                                <ArrowUpRight className="text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" size={20} />
                                            </div>

                                            <div className="mt-auto">
                                                <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                                                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                                                <p className="mt-3 break-words text-sm text-slate-200">{item.value}</p>
                                            </div>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
