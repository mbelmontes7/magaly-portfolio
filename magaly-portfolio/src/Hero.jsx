import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const headlineText = "Hi, I'm Magaly";

const Hero = () =>
{
    const [typedHeadline, setTypedHeadline] = useState('');

    useEffect(() =>
    {
        let currentIndex = 0;
        let isDeleting = false;
        let timeoutId;

        const typeLoop = () =>
        {
            if (isDeleting)
            {
                currentIndex -= 1;
            }
            else
            {
                currentIndex += 1;
            }

            setTypedHeadline(headlineText.slice(0, currentIndex));

            if (currentIndex === headlineText.length)
            {
                isDeleting = true;
                timeoutId = window.setTimeout(typeLoop, 1600);
                return;
            }

            if (currentIndex === 0)
            {
                isDeleting = false;
                timeoutId = window.setTimeout(typeLoop, 450);
                return;
            }

            timeoutId = window.setTimeout(typeLoop, isDeleting ? 45 : 85);
        };

        timeoutId = window.setTimeout(typeLoop, 300);

        return () => window.clearTimeout(timeoutId);
    }, []);

    const magalyIndex = typedHeadline.indexOf('Magaly');
    const typedIntro = magalyIndex === -1 ? typedHeadline : typedHeadline.slice(0, magalyIndex);
    const typedName = magalyIndex === -1 ? '' : typedHeadline.slice(magalyIndex);

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#01061a] overflow-hidden">
            <div className="container relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left space-y-6">


                        <h1
                            className="min-h-[7.4rem] text-5xl font-extrabold tracking-tight text-white md:min-h-[10rem] md:text-7xl"
                            aria-label={headlineText}
                        >
                            <span aria-hidden="true">
                                {typedIntro}
                                <span className="text-purple-300">{typedName}</span>
                                <span className="ml-1 inline-block w-[0.08em] animate-pulse bg-cyan-200 align-[-0.08em] h-[0.9em]" />
                            </span>

                            <div className="text-lg text-slate-400 max-w-lg  lg:mx-0 leading-relaxed">
                                I build stuff for the web. I love creating things that live on the internet, whether that be websites, applications, or content.
                            </div>
                        </h1>




                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[560px] pb-24 sm:pb-24">
                            <div className="absolute left-1/2 top-8 h-[82%] w-[72%] -translate-x-1/2 rounded-[2.5rem] bg-black/30 blur-2xl" />
                            <div className="absolute bottom-2 left-1/2 h-12 w-[96%] -translate-x-1/2 rounded-full bg-black/35 blur-xl" />

                            <div className="relative mx-auto w-[86%] rounded-[2.1rem] border border-white/20 bg-[linear-gradient(145deg,#d8d1c5_0%,#f2eadc_46%,#bfb8aa_100%)] p-4 shadow-[0_32px_70px_rgba(0,0,0,0.38)] sm:p-5">
                                <div className="absolute inset-x-12 top-3 hidden h-5 rounded-full bg-white/25 sm:block" />
                                <div className="absolute right-5 top-12 hidden h-28 w-7 rounded-full bg-[repeating-linear-gradient(180deg,rgba(15,23,42,0.32)_0_2px,transparent_2px_6px)] sm:block" />

                                <div className="relative rounded-[1.5rem] border border-slate-950/25 bg-[#e8dfcf] p-4 shadow-inner sm:p-5">
                                    <div className="rounded-[1.15rem] border-[10px] border-[#423f36] bg-black p-1 shadow-[inset_0_0_28px_rgba(0,0,0,0.85)] sm:border-[14px]">
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#06120f]">
                                            <video
                                                src="/coding.mp4"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="h-full w-full object-cover opacity-80 saturate-[0.8] contrast-125"
                                            />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_55%,rgba(0,0,0,0.55)_100%)]" />
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_5px] opacity-30 mix-blend-screen" />

                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between gap-4 px-2">
                                        <div className="flex items-center gap-1">
                                            <span className="h-3 w-1.5 rounded-sm bg-red-500" />
                                            <span className="h-3 w-1.5 rounded-sm bg-yellow-300" />
                                            <span className="h-3 w-1.5 rounded-sm bg-emerald-400" />
                                        </div>
                                        <div className="h-2 flex-1 rounded-full bg-slate-950/25" />
                                        <div className="h-5 w-5 rounded-full border border-slate-950/30 bg-slate-800/20 shadow-inner" />
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 left-1/2 h-10 w-28 -translate-x-1/2 rounded-b-2xl border border-white/15 bg-[linear-gradient(180deg,#bfb8aa,#8e887d)] shadow-lg" />
                            </div>

                            <div className="absolute bottom-0 left-[43%] z-20 w-[78%] -translate-x-1/2 rounded-[1.1rem] border border-white/15 bg-[linear-gradient(180deg,#e9e2d6,#c7bfb2)] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:left-[42%] sm:w-[76%]">
                                <div className="grid [grid-template-columns:repeat(14,minmax(0,1fr))] gap-1">
                                    {Array.from({ length: 42 }).map((_, index) => (
                                        <span
                                            key={index}
                                            className={`${index % 13 === 0 ? 'col-span-2' : ''} h-3 rounded-[0.2rem] bg-white/55 shadow-[inset_0_-1px_0_rgba(15,23,42,0.18)]`}
                                        />
                                    ))}
                                </div>
                                <div className="mx-auto mt-1 h-3 w-32 rounded-[0.25rem] bg-white/55 shadow-[inset_0_-1px_0_rgba(15,23,42,0.18)]" />
                            </div>

                            <div className="absolute bottom-0 right-1 z-30 w-28 sm:right-0 sm:w-32">
                                <div className="absolute -inset-x-2 bottom-[-0.35rem] h-14 rounded-[1.1rem] bg-[linear-gradient(145deg,#172033,#0a1020)] shadow-[0_16px_30px_rgba(0,0,0,0.35)]" />
                                {/* the smalle connector here */}
                                {/* <div className="absolute left-4 -top-1 h-5 w-3 rounded-full bg-[#e8dcc0] shadow-[inset_0_-2px_0_rgba(15,23,42,0.12)] sm:left-6" /> */}
                                <div className="relative ml-auto h-12 w-[4.5rem] rotate-[-5deg] rounded-[0.65rem] border border-[#8f866f]/50 bg-[linear-gradient(145deg,#fff4d8_0%,#d6c7a9_65%,#a99d86_100%)] shadow-[0_12px_24px_rgba(0,0,0,0.34)] sm:h-14 sm:w-20">
                                    <div className="absolute inset-x-2 bottom-1 h-2 rounded-b-lg bg-[#8f866f]/35" />
                                    <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-[#7b705c]/35" />
                                    <div className="absolute left-[12px] top-0 h-6 w-[22px] rounded-b-md bg-[linear-gradient(180deg,#eadfc5,#b9ad96)] shadow-[inset_0_-2px_0_rgba(15,23,42,0.16)] sm:left-[14px] sm:h-7 sm:w-[25px]" />
                                    <div className="absolute right-[12px] top-0 h-6 w-[22px] rounded-b-md bg-[linear-gradient(180deg,#eadfc5,#b9ad96)] shadow-[inset_0_-2px_0_rgba(15,23,42,0.16)] sm:right-[14px] sm:h-7 sm:w-[25px]" />
                                    <div className="absolute left-1/2 top-6 h-2 w-7 -translate-x-1/2 rounded-b-full bg-[#8f866f]/25" />
                                    <div className="absolute inset-x-3 top-9 h-px bg-white/35" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
