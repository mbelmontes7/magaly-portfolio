import React from 'react';
import { motion } from 'framer-motion';

const Hero = () =>
{
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#01061a] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#123ea8_0%,_transparent_70%)] opacity-30" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200">
                            Software Engineer + Creator
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                            Hi, I&apos;m <span className="text-purple-300">Magaly</span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            I build thoughtful web experiences, learn fast, and bring the same energy from the soccer field into every project I create.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href="#about"
                                className="px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                About me
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href="#projects"
                                className="px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                Projects
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contact"
                                className="px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                Contact me
                            </motion.a>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] aspect-video bg-slate-900 rounded-2xl border border-white/10 shadow-2xl p-2">
                            <div className="flex gap-1.5 mb-2 px-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>

                            <div className="w-full h-[calc(130%-14px)] rounded-xl overflow-hidden bg-black">
                                <video
                                    src="/coding.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
