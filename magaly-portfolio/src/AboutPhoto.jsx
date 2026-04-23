import React, { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { BadgeCheck, Braces, ChevronLeft, ChevronRight, Code2, Database, FolderOpen, Terminal } from 'lucide-react';

const toolkitPages = [
    {
        title: 'Frontend',
        number: '01',
        icon: Code2,
        file: 'frontend.jsx',
        iconClass: 'text-cyan-300',
        borderClass: 'border-cyan-300/35',
        chipClass: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-50',
        stampClass: 'border-cyan-300/55 bg-cyan-300/10 text-cyan-100',
        stamp: 'Interface Approved',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'Tailwind']
    },
    {
        title: 'Backend',
        number: '02',
        icon: Terminal,
        file: 'backend.cs',
        iconClass: 'text-purple-300',
        borderClass: 'border-purple-300/35',
        chipClass: 'border-purple-300/25 bg-purple-300/10 text-purple-50',
        stampClass: 'border-purple-300/55 bg-purple-300/10 text-purple-100',
        stamp: 'Logic Approved',
        skills: ['Node.js', 'SQL', 'C#', 'Python', 'Java']
    },
    {
        title: 'Cloud + Data',
        number: '03',
        icon: Database,
        file: 'cloud.json',
        iconClass: 'text-emerald-300',
        borderClass: 'border-emerald-300/35',
        chipClass: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-50',
        stampClass: 'border-emerald-300/55 bg-emerald-300/10 text-emerald-100',
        stamp: 'Deploy Approved',
        skills: ['AWS', 'Firebase', 'Vercel', 'MongoDB', 'APIs']
    }
];

const barcodeBars = [4, 9, 5, 13, 7, 11, 4, 15, 6, 12, 8, 5, 14, 9, 4, 11];

const AboutPhoto = () =>
{
    const [pageIndex, setPageIndex] = useState(0);
    const page = toolkitPages[pageIndex];
    const PageIcon = page.icon;

    const goToPreviousPage = () =>
    {
        setPageIndex((current) => (current === 0 ? toolkitPages.length - 1 : current - 1));
    };

    const goToNextPage = () =>
    {
        setPageIndex((current) => (current + 1) % toolkitPages.length);
    };

    return (
        <Motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-full sm:max-w-[520px]"
        >
            <div className="relative min-h-[610px] sm:min-h-[560px]">
                <div className="absolute inset-x-6 top-8 h-80 rotate-2 rounded-[1.2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,#12264d,#0b1f3f)] shadow-xl shadow-blue-950/30 sm:inset-x-10 sm:top-10" />
                <div className="absolute inset-x-4 top-5 h-80 -rotate-1 rounded-[1.2rem] border border-purple-300/18 bg-[linear-gradient(180deg,#1b1a4f,#0d2e43)] shadow-xl shadow-blue-950/30 sm:inset-x-8 sm:top-7" />
                <div className="absolute left-[34%] top-0 h-12 w-36 rounded-t-2xl border border-purple-300/25 bg-[linear-gradient(145deg,#35226d,#0b4551)] shadow-md sm:w-44" />

                <div className="absolute inset-x-0 top-20 rounded-[1.6rem] border border-cyan-300/20 bg-[linear-gradient(145deg,#071a39_0%,#0b2550_52%,#06332d_100%)] p-4 pt-20 text-white shadow-2xl shadow-blue-950/45 sm:top-24 sm:p-5 sm:pt-24">
                    <div className="absolute left-6 top-[-28px] h-16 w-52 rounded-t-2xl border border-cyan-300/20 bg-[linear-gradient(145deg,#0b2a5f,#084139)] shadow-lg shadow-blue-950/30">
                        <div className="flex h-full items-start gap-2 px-4 pt-3 font-mono text-[0.58rem] font-black uppercase tracking-[0.12em] text-cyan-100">
                            <FolderOpen size={13} className="text-purple-300" />
                            /src/magaly
                        </div>
                    </div>

                    <div className="absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(90deg,rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(rgba(167,139,250,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-400/70" />
                            <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
                            <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                        </div>
                        <span className="font-mono text-[0.52rem] font-bold text-cyan-100/75">code-folder/toolkit</span>
                    </div>

                    <div className="relative mt-20 rounded-[1.2rem] border border-white/10 bg-[#030918]/90 p-3 shadow-inner sm:mt-16">
                        <div className="mb-3 flex items-center justify-between">
                            <div>
                                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-cyan-200">
                                    Code Folder
                                </p>
                                <h3 className="mt-1 text-2xl font-black leading-none tracking-normal text-white sm:text-3xl">
                                    Tech Stack
                                </h3>
                            </div>
                            <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 font-mono text-[0.55rem] font-black uppercase tracking-[0.14em] text-emerald-100">
                                Stack File
                            </span>
                        </div>

                        <div className="relative min-h-[244px] overflow-hidden rounded-2xl bg-black/20 p-3">
                            <div className="absolute left-4 top-4 hidden w-28 rounded-xl border border-white/10 bg-white/[0.035] p-2 font-mono text-[0.55rem] font-bold text-slate-400 sm:block">
                                <div className="mb-1 text-cyan-200">src</div>
                                <div className="pl-2 text-purple-200">About.jsx</div>
                                <div className="pl-2 text-emerald-200">skills.js</div>
                                <div className="pl-2 text-cyan-100">stack.json</div>
                            </div>
                            <div className="absolute inset-x-8 top-8 h-[210px] rotate-1 rounded-2xl border border-white/8 bg-white/6" />
                            <div className="absolute inset-x-6 top-6 h-[210px] -rotate-1 rounded-2xl border border-white/8 bg-white/8" />

                            <AnimatePresence mode="wait">
                                <Motion.div
                                    key={page.title}
                                    initial={{ opacity: 0, rotateY: -34, x: 28 }}
                                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                    exit={{ opacity: 0, rotateY: 34, x: -28 }}
                                    transition={{ duration: 0.32, ease: 'easeOut' }}
                                    className={`relative min-h-[210px] overflow-hidden rounded-2xl border ${page.borderClass} bg-[linear-gradient(145deg,rgba(8,16,36,0.98),rgba(13,26,58,0.96))] p-4 shadow-[0_22px_50px_rgba(0,0,0,0.32)]`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                                    <div className={`absolute right-0 top-0 h-14 w-14 border-b border-l ${page.borderClass} bg-white/5`} />
                                    <div className="absolute right-0 top-0 h-0 w-0 border-l-[30px] border-t-[30px] border-l-transparent border-t-white/10" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                                            <div>
                                                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                                                    {page.file}
                                                </p>
                                                <h4 className="mt-2 text-[1.45rem] font-black leading-none tracking-normal text-white sm:text-3xl">
                                                    {page.title}
                                                </h4>
                                            </div>
                                            <PageIcon size={32} className={page.iconClass} strokeWidth={2.4} />
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            {page.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`rounded-full border px-2.5 py-2 text-center font-mono text-[0.6rem] font-black uppercase tracking-normal sm:px-3 sm:text-[0.68rem] sm:tracking-[0.08em] ${page.chipClass}`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className={`mt-4 inline-flex rotate-[-2deg] rounded-md border px-3 py-1.5 font-mono text-[0.52rem] font-black uppercase tracking-[0.12em] sm:px-4 sm:py-2 sm:text-[0.62rem] sm:tracking-[0.16em] ${page.stampClass}`}>
                                            {page.stamp}
                                        </div>

                                        <div className="absolute bottom-0 right-0 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/35">
                                            {page.number} / 03
                                        </div>
                                    </div>
                                </Motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
                            <button
                                type="button"
                                onClick={goToPreviousPage}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-cyan-100 transition hover:bg-white/10"
                                aria-label="Previous toolkit page"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <div className="flex items-center gap-2">
                                {toolkitPages.map((item, index) => (
                                    <button
                                        key={item.title}
                                        type="button"
                                        onClick={() => setPageIndex(index)}
                                        className={`h-2 rounded-full transition-all ${index === pageIndex ? 'w-8 bg-purple-300' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                                        aria-label={`Open ${item.title} toolkit page`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={goToNextPage}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-cyan-100 transition hover:bg-white/10"
                                aria-label="Next toolkit page"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative z-30 mx-auto w-[94%] rounded-2xl border border-purple-300/25 bg-[linear-gradient(140deg,#050b1d_0%,#111044_48%,#061f32_100%)] p-2.5 text-white shadow-2xl shadow-blue-950/50 sm:absolute sm:left-1/2 sm:top-24 sm:w-[88%] sm:max-w-[430px] sm:-translate-x-1/2 sm:-rotate-2 sm:p-3.5">
                    <div className="absolute inset-x-5 top-3 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
                    <div className="absolute right-4 top-4 hidden font-mono text-[0.52rem] font-black uppercase tracking-[0.18em] text-cyan-200/70 sm:block">
                        ID 2026
                    </div>

                    <div className="relative grid grid-cols-[86px_1fr] gap-3 sm:grid-cols-[0.78fr_1fr] sm:gap-4">
                        <div className="relative h-24 overflow-hidden rounded-xl border border-cyan-200/35 bg-black sm:h-40 sm:max-w-32">
                            <img
                                src="/magaly.jpg"
                                alt="Magaly - Software Engineer"
                                className="h-full w-full object-cover object-[42%_28%] sm:object-[38%_22%]"
                            />
                            <div className="absolute inset-x-1 bottom-1 rounded-md bg-slate-950/80 px-1 py-0.5 text-center font-mono text-[0.38rem] font-black uppercase tracking-normal text-cyan-100 backdrop-blur sm:inset-x-2 sm:bottom-2 sm:px-2 sm:py-1.5 sm:text-[0.48rem] sm:tracking-[0.12em]">
                                Developer Access
                            </div>
                        </div>

                        <div className="flex min-h-24 flex-col justify-between sm:min-h-36">
                            <div>
                                <div className="flex items-center gap-1.5 text-purple-100 sm:gap-2 sm:pr-16">
                                    <Code2 size={18} strokeWidth={2.7} className="sm:h-[22px] sm:w-[22px]" />
                                    <p className="text-[1rem] font-black uppercase leading-none tracking-normal min-[380px]:text-lg sm:text-[1.55rem]">
                                        Coding License
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
                                </div>
                            </div>

                            <div>
                                <div className="mt-2 flex items-center justify-between gap-2 border-t border-white/15 pt-1.5 sm:mt-0 sm:pt-2.5">
                                    <span className="flex items-center gap-1 font-mono text-[0.42rem] font-black uppercase tracking-[0.08em] text-emerald-100 sm:text-[0.48rem] sm:tracking-[0.12em]">
                                        <BadgeCheck size={10} className="text-emerald-300 sm:h-3 sm:w-3" />
                                        Valid
                                    </span>
                                    <span className="flex items-center gap-1 font-mono text-[0.42rem] font-black uppercase tracking-[0.08em] text-purple-100 sm:text-[0.48rem] sm:tracking-[0.12em]">
                                        <Braces size={10} className="text-purple-300 sm:h-3 sm:w-3" />
                                        Full Stack
                                    </span>
                                </div>
                                <div className="hidden h-6 items-end justify-between gap-1 overflow-hidden sm:flex">
                                    {barcodeBars.map((height, index) => (
                                        <span
                                            key={`${height}-${index}`}
                                            className="w-0.5 rounded-t-sm bg-cyan-100/70"
                                            style={{ height: `${height * 2}px` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>
    );
};

export default AboutPhoto;
