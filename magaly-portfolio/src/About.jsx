import React from 'react';
import { motion } from 'framer-motion'; // Importing the animation engine
import { Code, Heart, Coffee } from 'lucide-react'; // Importing icons
import AboutPhoto from './AboutPhoto'; // Importing the photo component


const About = () => 
{
    return (
        /* The 'id' is crucial. It allows your "About Me" button 
           in the Hero section to find this spot on the page.
        */
        <section id="about" className="min-h-screen w-full bg-[#01061a] py-20 px-6 flex items-center justify-center border-t border-white/5">

            <div className="container max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="flex-1 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            About <span className="text-purple-500">Me</span>
                        </motion.h2>


                    </div>
                    {/* RIGHT: Photo and Text group */}
                    <div className="flex-1 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-end">
                        <AboutPhoto />

                        <div className="flex flex-col space-y-4 max-w-md">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg text-slate-400 leading-relaxed text-center md:text-left"
                            >
                                I'm a software engineer that When I'm not coding, you can find me on the soccer field or enjoying a good cup of coffee.
                            </motion.p>

                            {/* ADDED HERE: hobbies */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Code className="text-blue-500 mb-2" size={20} />
                                    <h4 className="text-white font-bold text-sm">Developer</h4>
                                    <p className="text-[10px] text-slate-500">C#, Python, React</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Heart className="text-red-500 mb-2" size={20} />
                                    <h4 className="text-white font-bold text-sm">Athlete</h4>
                                    <p className="text-[10px] text-slate-500">Soccer & Fitness</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> {/* End of Top Grid Row */}

                {/* TECH STACK CARD: Placed in a new div so it spans the full width below */}
                <div className="mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full p-8 bg-slate-900/80 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm"
                    >
                        {/* CARD HEADER */}
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                            <Code className="text-blue-500" size={24} />
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                Tech Stack Overview
                            </h3>
                        </div>

                        {/* COLUMNS CONTAINER */}
                        <div className="grid grid-cols-3 gap-6">
                            {/* COLUMN 1: Frontend */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                                    <Code size={16} className="text-blue-400" /> Frontend
                                </h4>
                                <ul className="text-xs md:text-sm text-slate-400 space-y-1.5 list-disc list-inside marker:text-blue-600">
                                    <li>React</li><li>TypeScript</li><li>JavaScript</li><li>HTML</li><li>Tailwind</li>
                                </ul>
                            </div>

                            {/* COLUMN 2: Backend */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                                    <Code size={16} className="text-purple-400" /> Backend
                                </h4>
                                <ul className="text-xs md:text-sm text-slate-400 space-y-1.5 list-disc list-inside marker:text-purple-600">
                                    <li>Node.js</li><li>SQL</li><li>C#</li><li>Python</li>
                                </ul>
                            </div>

                            {/* COLUMN 3: Cloud */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                                    <Code size={16} className="text-green-400" /> Cloud
                                </h4>
                                <ul className="text-xs md:text-sm text-slate-400 space-y-1.5 list-disc list-inside marker:text-green-600">
                                    <li>AWS</li><li>Firebase</li><li>Vercel</li><li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div> {/* End of Container */}
        </section>
    );
};

export default About;