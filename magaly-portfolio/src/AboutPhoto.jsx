import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { BadgeCheck, Braces, ChevronDown, ChevronUp, Code2, Sparkles, Star } from 'lucide-react';

const skills = [
    'React',
    'JavaScript',
    'Tailwind',
    'UI Design',
    'Frontend',
    'Branding',
    'Motion',
    'Creative Dev'
];

const detailRows = [
    { label: 'Focus', value: 'Interactive interfaces' },
    { label: 'Style', value: 'Visual and polished' },
    { label: 'Energy', value: 'Curious and detail-led' }
];

const keepsakes = [
    { label: 'Creator', className: 'left-2 top-12 rotate-[-12deg] bg-[#1f4b78] text-white sm:left-2 sm:top-12' },
    { label: 'Code', className: 'right-1 top-8 rotate-[10deg] bg-[#7c58d5] text-white sm:right-0 sm:top-6' },
    { label: 'Build', className: 'left-5 bottom-12 rotate-[8deg] bg-[#e59f3a] text-slate-950 sm:left-2 sm:bottom-8' },
    { label: 'FIREBASE', className: 'right-3 bottom-16 rotate-[-10deg] bg-[#1f8d78] text-white sm:right-1 sm:bottom-12' }
];

const collageNotes = [
    { label: 'Tech Stack', className: 'left-1 top-28 rotate-[-10deg] sm:left-[-0.5rem] sm:top-24 sm:rotate-[-14deg]' },
    { label: 'FIREBASE', className: 'right-2 top-32 rotate-[9deg] sm:right-[-0.3rem] sm:top-28 sm:rotate-[13deg]' },
    { label: 'SQL', className: 'left-6 bottom-28 rotate-[7deg] sm:left-1 sm:bottom-21S sm:rotate-[9deg]' },
    { label: 'Visual UI', className: 'right-6 bottom-32 rotate-[-7deg] sm:right-8 sm:bottom-24 sm:rotate-[-8deg]' }
];

const stackLabels = ['React', 'Python', 'Tailwind', 'Java', 'Firebase', 'UI Design'];

const AboutPhoto = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[560px]"
        >
            <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#07101f_0%,#0b1527_100%)] px-3 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:min-h-[660px] sm:px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_45%)]" />
                <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-[#e7d7af]/12 blur-3xl" />

                {keepsakes.map((item, index) => (
                    <Motion.div
                        key={item.label}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : 18,
                            scale: isOpen ? 1 : 0.9,
                            rotate: isOpen ? undefined : 0
                        }}
                        transition={{ duration: 0.45, delay: isOpen ? 0.12 + (index * 0.04) : 0 }}
                        className={`absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 font-mono text-[0.52rem] font-black uppercase tracking-[0.12em] shadow-[0_12px_24px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16 sm:text-[0.58rem] ${item.className}`}
                    >
                        {item.label}
                    </Motion.div>
                ))}

                {collageNotes.map((item, index) => (
                    <Motion.div
                        key={item.label}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : 12,
                            scale: isOpen ? 1 : 0.92
                        }}
                        transition={{ duration: 0.45, delay: isOpen ? 0.18 + (index * 0.05) : 0 }}
                        className={`absolute z-10 rounded-full border border-[#eadbb6]/45 bg-[linear-gradient(180deg,#fff7e8_0%,#f0ddbb_100%)] px-2.5 py-1.5 font-mono text-[0.5rem] font-black uppercase tracking-[0.14em] text-[#6c5432] shadow-[0_12px_24px_rgba(0,0,0,0.16)] sm:px-3 sm:text-[0.58rem] ${item.className}`}
                    >
                        {item.label}
                    </Motion.div>
                ))}

                <div className="relative z-11 mx-auto mt-4 flex max-w-[420px] items-center justify-between gap-3 rounded-full border border-[#eadbb6]/30 bg-[#eadbb6]/12 px-4 py-2 text-[#f4ead4] backdrop-blur-sm">
                    <div className="min-w-0">
                        <p className="font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#eadbb6]">
                            Skill Envelope
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                            Open to see what I build with
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto mt-10 w-full max-w-[440px] pt-24 sm:mt-12 sm:pt-28">
                    <Motion.div
                        animate={{
                            y: isOpen ? -70 : 110,
                            rotate: isOpen ? -1 : -3,
                            scale: isOpen ? 0.97 : 0.96,
                            opacity: isOpen ? 0.88 : 0.28
                        }}
                        transition={{ duration: 0.62, delay: isOpen ? 0.18 : 0, ease: 'easeOut' }}
                        className="absolute left-1/2 top-0 z-10 w-[82%] -translate-x-1/2"
                    >
                        <div className="relative rounded-[1.4rem] border border-[#d9c9a2] bg-[linear-gradient(180deg,#fffdf7_0%,#f3ead5_100%)] px-5 pb-5 pt-6 text-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:px-6 sm:pb-6 sm:pt-7">
                            <div className="absolute right-4 top-4 flex items-center gap-1 text-[#8f7248]">
                                <Sparkles size={14} />
                                <span className="font-mono text-[0.54rem] font-black uppercase tracking-[0.18em]">
                                    Selected
                                </span>
                            </div>

                            <p className="font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#8d7147]">
                                About Me
                            </p>
                            <h3 className="mt-2 text-[1.9rem] font-black leading-none text-slate-950 sm:text-[2.2rem]">
                                Skills & Style
                            </h3>
                            <p className="mt-3 max-w-[28rem] text-sm leading-relaxed text-slate-600">
                                I like building interfaces that feel clean, expressive, and thoughtful from the first interaction to the final polish.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[#d8c7a3] bg-[#f8f1e4] px-3 py-1.5 font-mono text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#5a472d]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 grid gap-2 sm:grid-cols-3">
                                {detailRows.map((row) => (
                                    <div key={row.label} className="rounded-2xl border border-[#deceb0] bg-white/55 p-3">
                                        <p className="font-mono text-[0.52rem] font-black uppercase tracking-[0.16em] text-[#8c724d]">
                                            {row.label}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-800">
                                            {row.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        animate={{
                            y: isOpen ? -34 : 96,
                            rotate: isOpen ? -3 : -4,
                            opacity: isOpen ? 1 : 0,
                            scale: isOpen ? 1.02 : 0.94
                        }}
                        transition={{ duration: 0.58, delay: isOpen ? 0.08 : 0, ease: 'easeOut' }}
                        className="absolute left-1/2 top-[3.8rem] z-20 w-[76%] -translate-x-1/2 sm:top-[4.2rem]"
                    >
                        <div className="relative rounded-[1.35rem] border border-purple-300/30 bg-[linear-gradient(140deg,#050b1d_0%,#111044_48%,#061f32_100%)] p-3 text-white shadow-[0_22px_45px_rgba(0,0,0,0.28)] sm:p-3.5">
                            <div className="absolute inset-x-5 top-3 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
                            <div className="absolute right-4 top-4 hidden font-mono text-[0.52rem] font-black uppercase tracking-[0.18em] text-cyan-200/70 sm:block">
                                ID 2026
                            </div>

                            <div className="relative grid grid-cols-[84px_1fr] gap-3 sm:grid-cols-[0.78fr_1fr] sm:gap-4">
                                <div className="relative h-24 overflow-hidden rounded-xl border border-cyan-200/35 bg-black sm:h-36 sm:max-w-28">
                                    <img
                                        src="/magaly.jpg"
                                        alt="Magaly - Software Engineer"
                                        className="h-full w-full object-cover object-[42%_28%] sm:object-[38%_22%]"
                                    />
                                    <div className="absolute inset-x-1 bottom-1 rounded-md bg-slate-950/80 px-1 py-0.5 text-center font-mono text-[0.38rem] font-black uppercase tracking-normal text-cyan-100 backdrop-blur sm:inset-x-2 sm:bottom-2 sm:px-2 sm:py-1 sm:text-[0.46rem] sm:tracking-[0.12em]">
                                        Developer Access
                                    </div>
                                </div>

                                <div className="flex min-h-24 flex-col justify-between sm:min-h-32">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-purple-100 sm:gap-2 sm:pr-12">
                                            <Code2 size={18} strokeWidth={2.7} className="sm:h-[22px] sm:w-[22px]" />
                                            <p className="text-[0.95rem] font-black uppercase leading-none tracking-normal min-[380px]:text-lg sm:text-[1.35rem]">
                                                Coding Card
                                            </p>
                                        </div>

                                        <div className="mt-2 hidden rounded-md border border-purple-300/25 bg-purple-300/10 px-2 py-1 font-mono text-[0.52rem] font-black uppercase tracking-[0.13em] text-purple-100 sm:inline-flex">
                                            Authorized Builder
                                        </div>

                                        <div className="mt-2 grid grid-cols-2 gap-1.5 font-mono text-[0.48rem] uppercase text-slate-100 sm:mt-3 sm:gap-2 sm:text-[0.56rem]">
                                            <div className="border-y border-white/15 py-1">
                                                <span className="block text-cyan-200/75">Name</span>
                                                Magaly
                                            </div>
                                            <div className="border-y border-white/15 py-1">
                                                <span className="block text-cyan-200/75">Role</span>
                                                Engineer
                                            </div>
                                            <div className="border-y border-white/15 py-1">
                                                <span className="block text-cyan-200/75">Style</span>
                                                Visual
                                            </div>
                                            <div className="border-y border-white/15 py-1">
                                                <span className="block text-cyan-200/75">Focus</span>
                                                Frontend & backend
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2 flex items-center justify-between gap-2 border-t border-white/15 pt-2">
                                        <span className="flex items-center gap-1 font-mono text-[0.42rem] font-black uppercase tracking-[0.08em] text-emerald-100 sm:text-[0.48rem] sm:tracking-[0.12em]">
                                            <BadgeCheck size={10} className="text-emerald-300 sm:h-3 sm:w-3" />
                                            Active
                                        </span>
                                        <span className="flex items-center gap-1 font-mono text-[0.42rem] font-black uppercase tracking-[0.08em] text-purple-100 sm:text-[0.48rem] sm:tracking-[0.12em]">
                                            <Braces size={10} className="text-purple-300 sm:h-3 sm:w-3" />
                                            Full Stack
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Motion.div>

                    <div className="relative z-20 mx-auto w-full max-w-[440px]">
                        <Motion.button
                            type="button"
                            onClick={() => setIsOpen((current) => !current)}
                            animate={isOpen ? { y: 0, scale: 1 } : { y: [0, -3, 0], scale: [1, 1.03, 1] }}
                            transition={isOpen ? { duration: 0.25 } : { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                            className="absolute right-3 top-[11.4rem] z-40 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border border-[#b08c57]/55 bg-[radial-gradient(circle_at_30%_30%,#fff3da_0%,#b67b37_40%,#8a5425_100%)] font-mono text-[0.52rem] font-black uppercase tracking-[0.12em] text-[#fff8ed] shadow-[0_18px_32px_rgba(0,0,0,0.24)] transition hover:brightness-[1.03] sm:right-5 sm:top-[12.2rem] sm:h-[74px] sm:w-[74px]"
                            aria-label={isOpen ? 'Close skill envelope' : 'Open skill envelope'}
                        >
                            <span className="absolute inset-[8px] rounded-full border border-[#f2dcb7]/25" />
                            <span className="absolute top-[10px] h-2.5 w-2.5 rounded-full bg-[#f7e6c5]/60 blur-[1px]" />
                            <span className="relative leading-none">{isOpen ? 'Close' : 'Open'}</span>
                            <span className="relative mt-1 leading-none">Here</span>
                            <span className="relative mt-1">
                                {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                            </span>
                        </Motion.button>

                        <Motion.div
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                y: isOpen ? 0 : 10
                            }}
                            transition={{ duration: 0.45, delay: isOpen ? 0.2 : 0 }}
                            className="absolute left-1/2 top-[8.8rem] z-10 flex w-[92%] -translate-x-1/2 items-center justify-between px-2 text-[#f3e8cf] sm:top-[9.4rem]"
                        >
                            <span className="rounded-full border border-[#eadbb6]/35 bg-[#eadbb6]/10 px-2.5 py-1 font-mono text-[0.48rem] font-black uppercase tracking-[0.14em] sm:px-3 sm:text-[0.54rem] sm:tracking-[0.16em]">
                                Tech Stack
                            </span>
                            <span className="rounded-full border border-[#eadbb6]/35 bg-[#eadbb6]/10 px-2.5 py-1 font-mono text-[0.48rem] font-black uppercase tracking-[0.14em] sm:px-3 sm:text-[0.54rem] sm:tracking-[0.16em]">
                                My Tools
                            </span>
                        </Motion.div>

                        <Motion.div
                            animate={{ rotateX: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                            className="absolute inset-x-6 top-0 z-30 h-40 sm:inset-x-8 sm:h-44"
                        >
                            <div
                                className="h-full w-full bg-[linear-gradient(180deg,#f0e5c8_0%,#dfcc9d_100%)] shadow-[0_16px_35px_rgba(0,0,0,0.16)]"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                                    backfaceVisibility: 'hidden'
                                }}
                            />
                        </Motion.div>

                        <Motion.div
                            animate={isOpen ? { y: 0 } : { y: [0, -4, 0] }}
                            transition={isOpen ? { duration: 0.25 } : { duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                            className="relative h-[360px] sm:h-[390px]"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-[265px] rounded-[1.6rem] border border-[#dbc9a1] bg-[linear-gradient(180deg,#f4ead0_0%,#ead9b2_100%)] shadow-[0_24px_50px_rgba(0,0,0,0.18)]" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-[265px] bg-[linear-gradient(180deg,#f5edd9_0%,#ebdbbc_100%)]"
                                style={{ clipPath: 'polygon(0 0, 50% 46%, 100% 0, 100% 100%, 0 100%)' }}
                            />
                            <div
                                className="absolute bottom-0 left-0 h-[225px] w-[52%] border-r border-[#d8c7a3]/70 bg-[linear-gradient(180deg,#f7efdc_0%,#efe0c1_100%)]"
                                style={{ clipPath: 'polygon(0 0, 100% 44%, 100% 100%, 0 100%)' }}
                            />
                            <div
                                className="absolute bottom-0 right-0 h-[225px] w-[52%] border-l border-[#d8c7a3]/70 bg-[linear-gradient(180deg,#f7efdc_0%,#efe0c1_100%)]"
                                style={{ clipPath: 'polygon(0 44%, 100% 0, 100% 100%, 0 100%)' }}
                            />

                            <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full border border-black/10 bg-white/20 px-4 py-1 text-sm italic text-[#4d3d26]">
                                2025
                            </div>

                            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 text-[#8d7147]">
                                <Star size={12} fill="currentColor" />
                                <span className="font-mono text-[0.52rem] font-black uppercase tracking-[0.18em]">
                                    {isOpen ? 'Close Me' : 'Open Me'}
                                </span>
                                <Star size={12} fill="currentColor" />
                            </div>
                        </Motion.div>

                        {stackLabels.map((label, index) =>
                        {
                            const positions = [
                                'left-3 top-3 sm:left-1 sm:top-2',
                                'right-4 top-2 sm:right-1 sm:top-2',
                                'left-0 top-16 sm:left-[-0.2rem] sm:top-16',
                                'right-0 top-16 sm:right-[-0.2rem] sm:top-16',
                                'left-8 bottom-20 sm:left-10 sm:bottom-20',
                                'right-8 bottom-20 sm:right-10 sm:bottom-20'
                            ];

                            return (
                                <Motion.span
                                    key={label}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        y: isOpen ? 0 : 8,
                                        scale: isOpen ? 1 : 0.92
                                    }}
                                    transition={{ duration: 0.35, delay: isOpen ? 0.22 + (index * 0.04) : 0 }}
                                    className={`absolute z-10 rounded-full border border-[#eadbb6]/30 bg-[#eadbb6]/8 px-2 py-1 font-mono text-[0.44rem] font-black uppercase tracking-[0.14em] text-[#eadbb6] sm:px-2.5 sm:text-[0.5rem] ${positions[index]}`}
                                >
                                    {label}
                                </Motion.span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Motion.div>
    );
};

export default AboutPhoto;
