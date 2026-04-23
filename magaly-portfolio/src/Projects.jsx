import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const projects = [
    {
        title: 'Not sure yet',
        subtitle: 'Personal brand and web portfolio',
        accent: 'bg-[linear-gradient(135deg,#6dc7ff_0%,#8b5cf6_55%,#ec4899_100%)]',
        art: (
            <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.28),transparent_18%),linear-gradient(135deg,#55d6ff_0%,#5097ff_45%,#9055ff_80%,#ff61b6_100%)]" />
                <div className="absolute -left-2 bottom-0 h-24 w-24 rotate-12 rounded-[1.5rem] bg-yellow-300/80 shadow-lg" />
                <div className="absolute left-24 top-12 h-24 w-32 -rotate-3 rounded-[1.7rem] border-4 border-slate-900/10 bg-white/90 shadow-lg" />
                <div className="absolute right-10 top-10 h-28 w-28 rounded-[1.7rem] bg-fuchsia-400/90 shadow-lg" />
                <div className="absolute inset-x-8 bottom-8 text-left">
                    <p className="text-4xl font-black uppercase tracking-tight text-white drop-shadow-md"></p>
                    <p className="text-3xl font-black uppercase tracking-tight text-slate-950/80"></p>
                </div>
            </div>
        )
    },
    {
        title: 'Creator Hub',
        subtitle: 'Soccer and content platform concept',
        accent: 'bg-[linear-gradient(135deg,#155eef_0%,#246bff_55%,#4da3ff_100%)]',
        art: (
            <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#1662ea_0%,#2478ff_55%,#5eb4ff_100%)]" />
                <div className="absolute left-8 top-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl font-black text-blue-500">
                    M
                </div>
                <div className="absolute left-8 top-28 text-white">
                    <p className="text-3xl font-black">Creator</p>
                    <p className="text-xl font-semibold text-blue-100">Hub</p>
                </div>
                <div className="absolute right-10 bottom-0 h-44 w-28 rounded-t-[3rem] bg-slate-900/85" />
                <div className="absolute right-14 top-10 h-16 w-16 rounded-full bg-[#f2c29b]" />
                <div className="absolute right-16 top-26 h-24 w-20 rounded-[2rem] bg-slate-800" />
                <div className="absolute right-8 bottom-8 h-6 w-12 rounded-full bg-slate-950/80" />
                <div className="absolute right-20 bottom-8 h-6 w-12 rounded-full bg-slate-950/80" />
            </div>
        )
    },
    {
        title: 'Sharkie App',
        subtitle: 'Interactive game or media project',
        accent: 'bg-[linear-gradient(135deg,#1f6fd6_0%,#2fb6d8_40%,#6938ef_100%)]',
        art: (
            <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#32b7dd_0%,#1f7bd1_38%,#312e81_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_20%_40%,rgba(34,197,94,0.75),transparent_25%),radial-gradient(circle_at_70%_35%,rgba(168,85,247,0.7),transparent_22%),linear-gradient(180deg,transparent_0%,rgba(17,24,39,0.55)_100%)]" />
                <div className="absolute right-14 top-8 h-10 w-16 rounded-full bg-cyan-200" />
                <div className="absolute right-10 top-9 h-8 w-8 rounded-full bg-cyan-200" />
                <div className="absolute right-12 top-7 h-3 w-3 rounded-full bg-slate-950" />
                <div className="absolute right-20 top-6 h-3 w-3 rounded-full bg-slate-950" />
                <div className="absolute left-10 top-20 text-white">
                    <p className="text-4xl font-black tracking-tight">Sharkie</p>
                </div>
                <div className="absolute left-12 bottom-10 h-4 w-24 rounded-full bg-lime-400/90" />
            </div>
        )
    },
    {
        title: 'WebGL Particles',
        subtitle: 'Generative motion and visual experiments',
        accent: 'bg-[linear-gradient(135deg,#001a12_0%,#012417_100%)]',
        art: (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.7rem] bg-[#00180f]">
                <div className="h-28 w-52 rounded-full border border-emerald-400/40 opacity-80 blur-[1px]" />
                <div className="absolute h-28 w-52 rotate-90 rounded-full border border-emerald-400/40 opacity-80 blur-[1px]" />
                <div className="absolute h-36 w-64 rounded-full border border-emerald-300/20 blur-sm" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(52,211,153,0.26)_0%,transparent_62%)]" />
            </div>
        )
    },
];

const Projects = () =>
{
    return (
        <section id="projects" className="w-full bg-[#01061a] px-6 py-20 text-white border-t border-white/5">
            <div className="mx-auto max-w-6xl">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="mb-4 inline-flex -rotate-3 bg-[#CE8FFF] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                        View My Work
                    </div>
                    <h2 className="text-5xl font-black tracking-tight sm:text-6xl text-white">Projects</h2>
                </Motion.div>

                <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {projects.map((project, index) => (
                        <Motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group w-[220px] flex-none sm:w-[250px]"
                        >
                            <div
                                className={`relative aspect-[1.55/1] overflow-hidden rounded-[1.5rem] shadow-[0_18px_50px_rgba(46,32,19,0.08)] ${project.accent}`}
                            >
                                {project.isPlaceholder ? (
                                    <div className="flex h-full items-center justify-center">
                                        <Plus size={54} strokeWidth={1.5} className="text-[#746657]" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]">
                                            {project.art}
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                                    </>
                                )}
                            </div>

                            <div className="pt-3">
                                <h3 className="text-[1.35rem] font-black leading-none tracking-tight text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
                            </div>
                        </Motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
