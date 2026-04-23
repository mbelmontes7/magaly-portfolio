import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, PhoneCall } from 'lucide-react';

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
        icon: InstagramIcon
    },
    {
        label: 'GitHub',
        handle: 'github.com/mbelmontes7',
        href: 'https://github.com/mbelmontes7?tab=overview&from=2026-04-01&to=2026-04-13',
        icon: GitHubIcon
    },
    {
        label: 'LinkedIn',
        handle: 'linkedin.com/in/magaly-belmontes',
        href: 'https://www.linkedin.com/in/magaly-belmontes/',
        icon: LinkedInIcon
    }
];

const keypad = Array.from({ length: 12 });

const Contact = () =>
{
    const [isPickedUp, setIsPickedUp] = useState(false);

    return (
        <section id="contact" className="w-full border-t border-white/5 bg-[#01061a] px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
                            className="max-w-xl text-2xl font-black tracking-tight text-white md:text-3xl"
                        >
                            Pick Up The Phone
                        </Motion.h2>

                        <Motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300"
                        >
                            Tap the handset to open up my contact details.
                        </Motion.p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setIsPickedUp((current) => !current)}
                                className="inline-flex items-center gap-3 rounded-full border border-purple-300/25 bg-purple-400/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-400/25"
                            >
                                <PhoneCall size={18} />
                                {isPickedUp ? 'Set It Down' : 'Pick It Up'}
                            </button>

                            <a
                                href="mailto:Magaly.belmontes7788@gmail.com"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
                            >
                                <Mail size={18} />
                                Email Me
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[620px]">
                        <div className="absolute left-1/2 top-12 h-[76%] w-[78%] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />

                        <div className="relative min-h-[620px]">
                            <div className="absolute inset-x-10 bottom-8 h-12 rounded-full bg-black/35 blur-2xl" />

                            <AnimatePresence mode="wait">
                                {isPickedUp && (
                                    <Motion.div
                                        initial={{ opacity: 0, x: -18, y: 8 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, x: -18, y: 8 }}
                                        transition={{ duration: 0.28 }}
                                        className="absolute left-[6%] top-40 z-10 w-[58%] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,rgba(11,18,41,0.98),rgba(17,26,58,0.96),rgba(8,29,36,0.94))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                                    >
                                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                            <div>
                                                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
                                                    Contact Card
                                                </p>
                                                <p className="mt-1 text-lg font-black text-white">Magaly</p>
                                            </div>
                                            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-[0.55rem] font-black uppercase tracking-[0.14em] text-emerald-100">
                                                Connected
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-3">
                                                <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
                                                    Email
                                                </p>
                                                <a
                                                    href="mailto:Magaly.belmontes7788@gmail.com"
                                                    className="mt-2 flex w-full items-start justify-between gap-2 break-all text-sm font-semibold text-white transition hover:text-cyan-200"
                                                >
                                                    <span className="min-w-0 break-all">
                                                        Magaly.belmontes7788@gmail.com
                                                    </span>
                                                    <ArrowUpRight size={16} className="mt-0.5 shrink-0" />
                                                </a>
                                            </div>

                                            {socialLinks.slice(0, 3).map((item) =>
                                            {
                                                const Icon = item.icon;

                                                return (
                                                    <a
                                                        key={item.label}
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 transition hover:border-white/20 hover:bg-white/[0.07]"
                                                    >
                                                        <Icon className="h-5 w-5 text-cyan-100" />
                                                        <div className="min-w-0">
                                                            <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
                                                                {item.label}
                                                            </p>
                                                            <p className="truncate text-sm font-medium text-white">
                                                                {item.handle}
                                                            </p>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </Motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute left-1/2 top-12 z-30 w-[86%] -translate-x-1/2 rotate-[-14deg]">
                                <Motion.button
                                    type="button"
                                    onClick={() => setIsPickedUp((current) => !current)}
                                    animate={isPickedUp ? { rotate: -23, x: 78, y: -72 } : { rotate: 0, x: 0, y: 0 }}
                                    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                                    className="relative h-24 w-full rounded-full border border-white/15 bg-[linear-gradient(145deg,#6e4be3_0%,#2a58be_45%,#163f8e_100%)] shadow-[0_24px_45px_rgba(0,0,0,0.38)]"
                                    aria-label={isPickedUp ? 'Set down phone handset' : 'Pick up phone handset'}
                                >
                                    <div className="absolute inset-x-8 top-2 h-5 rounded-full bg-white/18 blur-sm" />
                                    <div className="absolute left-4 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-white/12 bg-[linear-gradient(145deg,#6944df,#2456aa)]" />
                                    <div className="absolute right-4 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-white/12 bg-[linear-gradient(145deg,#6944df,#2456aa)]" />
                                    <div className="absolute inset-x-16 top-3 bottom-3 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.15))]" />
                                </Motion.button>

                                <div className="pointer-events-none absolute left-[22%] top-3 h-16 w-44">
                                    <svg viewBox="0 0 176 64" className="h-full w-full">
                                        <path
                                            d="M8 10 C 40 42, 74 54, 108 44 C 134 36, 152 22, 168 14"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.72)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeDasharray="1 8"
                                        />
                                    </svg>
                                </div>

                                <Motion.div
                                    animate={isPickedUp ? { opacity: 1, pathLength: 1 } : { opacity: 0.8, pathLength: 0.82 }}
                                    transition={{ duration: 0.35 }}
                                    className="pointer-events-none absolute left-1/2 top-16 h-40 w-32 -translate-x-1/2"
                                >
                                    <svg viewBox="0 0 140 160" className="h-full w-full">
                                        <path
                                            d="M70 0 C 96 24, 102 56, 94 94 C 88 124, 74 142, 74 160"
                                            fill="none"
                                            stroke="rgba(177, 211, 255, 0.55)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Motion.div>
                            </div>

                            <div className="absolute left-1/2 top-32 h-[410px] w-[72%] -translate-x-1/2 rotate-[-14deg] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(160deg,#173975_0%,#152855_48%,#0c3941_100%)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
                                <div className="absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.16),transparent_22%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.14),transparent_20%)]" />
                                <div className="absolute inset-x-8 top-4 h-6 rounded-full bg-white/12 blur-md" />
                                <div className="absolute left-[18%] right-[18%] top-5 h-16 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,#173466,#112244)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />

                                <div className="absolute left-[23%] right-[23%] top-[5.2rem] h-12 rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,#0e1c38,#0b1630)] shadow-inner">
                                    <div className="absolute inset-x-4 top-2 h-px bg-cyan-200/20" />
                                    <p className="absolute left-4 top-3 font-mono text-[0.52rem] font-bold uppercase tracking-[0.16em] text-cyan-200">
                                        Display
                                    </p>
                                    <p className="absolute left-4 top-6 text-[0.72rem] font-black text-white/90">
                                        {isPickedUp ? 'Connected to Magaly' : 'Tap handset to connect'}
                                    </p>
                                </div>

                                <div className="absolute left-[24%] right-[24%] bottom-[3.2rem] top-[9.2rem] rounded-[1.4rem] border border-black/20 bg-[linear-gradient(180deg,#08111f,#0c1831)] p-3 shadow-[inset_0_10px_30px_rgba(0,0,0,0.35)]">
                                    <div className="grid h-full grid-cols-3 gap-2">
                                        {keypad.map((key) => (
                                            <span
                                                key={key}
                                                className="rounded-[0.65rem] border border-white/10 bg-[linear-gradient(180deg,#0f1b39,#122751)] shadow-[0_10px_18px_rgba(0,0,0,0.25)]"
                                            >
                                                <span className="mx-auto mt-3 block h-3 w-3 rounded-full bg-white/12" />
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute left-1/2 top-[4.1rem] h-8 w-28 -translate-x-1/2 rounded-b-2xl border border-white/10 bg-[linear-gradient(180deg,#203a74,#132754)]" />
                                <div className="absolute bottom-4 left-1/2 h-3 w-[58%] -translate-x-1/2 rounded-full bg-black/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
