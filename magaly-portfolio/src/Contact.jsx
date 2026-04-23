import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
);

const GitHubIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.62c-2.65.58-3.21-1.13-3.21-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.46 2.25 1.04 2.8.8.08-.62.34-1.04.61-1.28-2.12-.24-4.36-1.06-4.36-4.71 0-1.04.37-1.89.98-2.56-.1-.24-.42-1.21.09-2.53 0 0 .8-.26 2.63.98a9.1 9.1 0 0 1 4.79 0c1.83-1.24 2.63-.98 2.63-.98.51 1.32.19 2.29.09 2.53.61.67.98 1.52.98 2.56 0 3.66-2.25 4.47-4.39 4.7.35.3.66.89.66 1.8v2.67c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
);

const LinkedInIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M6.94 8.5A1.44 1.44 0 1 0 6.9 5.62a1.44 1.44 0 0 0 .04 2.88ZM5.7 9.75h2.45v8.05H5.7V9.75Zm3.98 0h2.35v1.1h.03c.33-.62 1.13-1.28 2.33-1.28 2.5 0 2.96 1.64 2.96 3.77v4.46H14.9v-3.95c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08v4.02H9.68V9.75Z" />
    </svg>
);

const socialLinks = [
    {
        label: 'Instagram',
        handle: '@im_magaly_07',
        href: 'https://www.instagram.com/im_magaly_07/',
        icon: InstagramIcon,
        glow: 'from-fuchsia-500/25 via-pink-500/12 to-orange-300/8'
    },
    {
        label: 'GitHub',
        handle: 'github.com/mbelmontes7',
        href: 'https://github.com/mbelmontes7?tab=overview&from=2026-04-01&to=2026-04-13',
        icon: GitHubIcon,
        glow: 'from-slate-200/18 via-slate-400/10 to-slate-700/6'
    },
    {
        label: 'LinkedIn',
        handle: 'linkedin.com/in/magaly-belmontes',
        href: 'https://www.linkedin.com/in/magaly-belmontes/',
        icon: LinkedInIcon,
        glow: 'from-sky-500/24 via-blue-500/12 to-cyan-300/8'
    }
];

const Contact = () =>
{
    return (
        <section id="contact" className="w-full border-t border-white/5 bg-[#01061a] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(8,11,26,0.98),rgba(14,22,45,0.94))] p-8 shadow-[0_30px_90px_rgba(2,6,23,0.46)] md:p-12"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_100%)]" />
                    <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />
                    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div>
                            <Motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45 }}
                                className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-violet-200"
                            >
                                Contact Me
                            </Motion.p>

                            <Motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl"
                            >
                                Let&apos;s build something
                            </Motion.h2>

                            <Motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300"
                            >
                                I&apos;m always open to new projects, creative collaborations, and opportunities to grow. If you want to connect, start here.
                            </Motion.p>

                            <Motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className="mt-8 flex flex-wrap items-center gap-4"
                            >
                                <a
                                    href="mailto:youremail@example.com"
                                    className="inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-500/90 px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(168,85,247,0.26)] transition-all hover:-translate-y-0.5 hover:bg-purple-400"
                                >
                                    <Mail size={18} />
                                    Email Me
                                </a>

                                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                                    Magaly.belmontes7788@gmail.com
                                </div>
                            </Motion.div>
                        </div>

                        <div className="space-y-4">
                            {socialLinks.map((item, index) =>
                            {
                                const Icon = item.icon;

                                return (
                                    <Motion.a
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.08 }}
                                        whileHover={{ x: 6 }}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center gap-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-100`} />
                                        <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-white backdrop-blur-sm">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <div className="relative z-10 min-w-0 flex-1">
                                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                                            <p className="mt-1 truncate text-base font-medium text-white">{item.handle}</p>
                                        </div>

                                        <ArrowRight className="relative z-10 text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" size={18} />
                                    </Motion.a>
                                );
                            })}
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Contact;
