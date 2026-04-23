import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const projects = [
    {
        id: 'portfolio',
        title: 'Portfolio OS',
        spineLabel: 'Portfolio OS',
        subtitle: 'Personal brand and web portfolio',
        accent: 'from-cyan-300/40 via-blue-400/30 to-cyan-200/30',
        bookColor: 'bg-[linear-gradient(180deg,#93d5ff_0%,#5678d8_100%)]',
        edgeColor: 'bg-[#3657b7]',
        textColor: 'text-slate-950',
        number: '01',
        description: 'A personal portfolio built to showcase projects, design ideas, and interactive UI experiments in one place.',
        link: 'https://your-project-link.com',
        tags: ['React', 'Vite', 'Tailwind']
    },
    {
        id: 'creator-hub',
        title: 'Creator Hub',
        spineLabel: 'Creator Hub',
        subtitle: 'Soccer and content platform concept',
        accent: 'from-purple-300/40 via-fuchsia-400/25 to-purple-200/25',
        bookColor: 'bg-[linear-gradient(180deg,#c7a8ff_0%,#7d56d7_100%)]',
        edgeColor: 'bg-[#6443bc]',
        textColor: 'text-slate-950',
        number: '02',
        description: 'A concept platform mixing sports, creator content, and community features into one clean experience.',
        link: 'https://your-project-link.com',
        tags: ['UI Design', 'Branding', 'Frontend']
    },
    {
        id: 'sharkie',
        title: 'Sharkie App',
        spineLabel: 'Sharkie App',
        subtitle: 'Interactive game or media project',
        accent: 'from-blue-300/40 via-cyan-400/30 to-emerald-300/25',
        bookColor: 'bg-[linear-gradient(180deg,#79d5ef_0%,#2b7fd7_100%)]',
        edgeColor: 'bg-[#1f5fab]',
        textColor: 'text-slate-950',
        number: '03',
        description: 'An interactive concept focused on playful visuals, motion, and a more character-driven digital experience.',
        link: 'https://your-project-link.com',
        tags: ['Interaction', 'Motion', 'Concept']
    },
    {
        id: 'particles',
        title: 'WebGL Particles',
        spineLabel: 'WebGL Particles',
        subtitle: 'Generative motion and visual experiments',
        accent: 'from-emerald-300/35 via-cyan-300/20 to-blue-300/20',
        bookColor: 'bg-[linear-gradient(180deg,#74d6b0_0%,#0f6f67_100%)]',
        edgeColor: 'bg-[#0d5450]',
        textColor: 'text-slate-950',
        number: '04',
        description: 'A visual experiments project exploring generative motion, atmosphere, and immersive graphics for the web.',
        link: 'https://your-project-link.com',
        tags: ['WebGL', 'Creative Code', 'Animation']
    },
    {
        id: 'study-sync',
        title: 'Study Sync',
        spineLabel: 'Study Sync',
        subtitle: 'Productivity and focus app concept',
        accent: 'from-sky-300/35 via-cyan-300/25 to-purple-300/20',
        bookColor: 'bg-[linear-gradient(180deg,#b7e3ff_0%,#5ba9d8_100%)]',
        edgeColor: 'bg-[#3a84af]',
        textColor: 'text-slate-950',
        number: '05',
        description: 'A study and focus tool concept for organizing tasks, sessions, and habits in a cleaner way.',
        link: 'https://your-project-link.com',
        tags: ['Productivity', 'UX', 'Frontend']
    },
    {
        id: 'match-day',
        title: 'Match Day',
        spineLabel: 'Match Day',
        subtitle: 'Sports schedule and fan experience concept',
        accent: 'from-emerald-300/35 via-lime-300/20 to-cyan-300/20',
        bookColor: 'bg-[linear-gradient(180deg,#b8efb4_0%,#51a270_100%)]',
        edgeColor: 'bg-[#3f8058]',
        textColor: 'text-slate-950',
        number: '06',
        description: 'A sports-centered concept for following games, updates, and fan content in one place.',
        link: 'https://your-project-link.com',
        tags: ['Sports', 'Concept', 'UI']
    }
];

const Projects = () =>
{
    const [activeProjectId, setActiveProjectId] = useState(projects[1].id);
    const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];

    return (
        <section id="projects" className="w-full border-t border-white/5 bg-[#01061a] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-6xl">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="mb-4 inline-flex -rotate-2 border border-purple-300/20 bg-purple-400/15 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-purple-200">
                        Shelf View
                    </div>
                    <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">Projects</h2>
                </Motion.div>

                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,36,0.98),rgba(7,12,28,0.98))] p-3 shadow-[0_24px_80px_rgba(2,6,23,0.42)] sm:p-6">
                    <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,23,52,0.9),rgba(8,14,34,0.96))] p-3 sm:p-6">
                        <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-6 h-4 bg-[linear-gradient(180deg,rgba(78,48,21,0.05),rgba(78,48,21,0.28))]" />

                        <div className="grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:items-end">
                            <div className="min-w-0">
                                <div className="mb-3 flex items-center gap-3 text-cyan-200">
                                    <BookOpen size={18} />
                                    <p className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em]">
                                        Click A Book To Pull It Out
                                    </p>
                                </div>

                                <div className="relative overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    <div className="flex min-h-[330px] items-end gap-[3px] pl-2 pr-4 sm:gap-1 sm:pr-8">
                                        {projects.map((project, index) =>
                                        {
                                            const isActive = project.id === activeProjectId;
                                            const heights = ['h-[248px]', 'h-[284px]', 'h-[268px]', 'h-[294px]'];
                                            const heightClass = heights[index % heights.length];

                                            return (
                                                <button
                                                    key={project.id}
                                                    type="button"
                                                    onClick={() => setActiveProjectId(project.id)}
                                                    className={`group relative flex w-[60px] flex-none origin-bottom flex-col justify-between overflow-hidden rounded-t-[0.65rem] border border-white/10 px-2 py-3 text-left shadow-[0_16px_35px_rgba(0,0,0,0.34)] transition duration-300 sm:w-[70px] sm:px-2.5 ${heightClass} ${project.bookColor} ${isActive ? '-translate-y-5 rotate-[1.2deg] shadow-[0_30px_55px_rgba(0,0,0,0.45)]' : 'hover:-translate-y-2'}`}
                                                >
                                                    <div className={`absolute right-0 top-0 h-full w-[7px] ${project.edgeColor} opacity-85`} />
                                                    <div className="absolute left-0 top-0 h-full w-[3px] bg-white/18" />
                                                    <div className="absolute inset-x-[6px] top-0 h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_14%,transparent_86%,rgba(15,23,42,0.16))]" />
                                                    <div className={`absolute inset-0 bg-gradient-to-b ${project.accent} opacity-35`} />
                                                    <div className="absolute inset-x-2 top-5 h-px bg-white/18" />
                                                    <div className="absolute inset-x-2 bottom-8 h-px bg-slate-950/10" />

                                                    <div className="relative z-10 flex h-full flex-col justify-between">
                                                        <div className={`font-serif text-[0.72rem] leading-tight sm:text-[0.82rem] ${project.textColor}`}>
                                                            <div className="origin-top-left rotate-180 [writing-mode:vertical-rl]">
                                                                <span className="font-black tracking-tight">{project.spineLabel}</span>
                                                            </div>
                                                        </div>

                                                        <div className={`font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] ${project.textColor}`}>
                                                            {project.number}
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 h-4 rounded-full bg-[linear-gradient(180deg,#6d4928_0%,#533218_100%)] shadow-[0_6px_12px_rgba(0,0,0,0.25)]" />
                                    <div className="absolute inset-x-0 bottom-3 h-px bg-[#8b623d]/50" />
                                </div>
                            </div>

                            <div className="relative min-w-0">
                                <AnimatePresence mode="wait">
                                    <Motion.article
                                        key={activeProject.id}
                                        initial={{ opacity: 0, x: 28, y: 12 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, x: -18, y: 8 }}
                                        transition={{ duration: 0.28, ease: 'easeOut' }}
                                        className="relative w-full max-w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(160deg,rgba(11,18,41,0.98),rgba(17,26,58,0.96),rgba(8,29,36,0.94))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[1.5rem] sm:p-6"
                                    >
                                        <div className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-br ${activeProject.accent} opacity-20 sm:rounded-[1.5rem]`} />
                                        <div className="relative min-w-0">
                                            <div className="mb-4 flex flex-col items-start gap-3 border-b border-white/10 pb-4 sm:mb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                                                <div className="min-w-0">
                                                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-200">
                                                        Pulled From Shelf
                                                    </p>
                                                    <h3 className="mt-2 break-words text-[1.75rem] font-black leading-none tracking-tight text-white sm:text-4xl">
                                                        {activeProject.title}
                                                    </h3>
                                                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
                                                        {activeProject.subtitle}
                                                    </p>
                                                </div>
                                                <div className={`shrink-0 self-start rounded-full px-3 py-1 font-mono text-[0.6rem] font-black uppercase tracking-[0.16em] ${activeProject.bookColor} ${activeProject.textColor}`}>
                                                    {activeProject.number}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                                                {activeProject.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[0.64rem] font-bold uppercase tracking-[0.08em] text-slate-200 sm:py-2 sm:text-[0.68rem]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="rounded-[1rem] border border-white/10 bg-black/15 p-3.5 sm:p-4">
                                                    <p className="mb-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
                                                        Project Description
                                                    </p>
                                                    <p className="text-sm leading-relaxed text-slate-300">
                                                        {activeProject.description}
                                                    </p>
                                                </div>

                                                <div className="rounded-[1rem] border border-white/10 bg-black/15 p-3.5 sm:p-4">
                                                    <p className="mb-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
                                                        Project Link
                                                    </p>
                                                    <a
                                                        href={activeProject.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex max-w-full flex-wrap items-center gap-2 break-all text-sm font-semibold text-purple-200 transition hover:text-white"
                                                    >
                                                        {activeProject.link}
                                                        <ArrowUpRight size={16} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Motion.article>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
