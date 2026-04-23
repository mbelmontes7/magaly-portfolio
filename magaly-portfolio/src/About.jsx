import React from 'react';
import { motion as Motion } from 'framer-motion';
import AboutPhoto from './AboutPhoto';


const About = () => 
{
    return (
        <section id="about" className="min-h-screen w-full overflow-x-hidden bg-[#01061a] px-4 py-20 sm:px-6 flex items-center justify-center border-t border-white/5">

            <div className="container max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

                    <div className="flex-1 flex flex-col justify-center">
                        <Motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-black tracking-tight text-white"
                        >
                            About <span className="text-purple-300">Me</span>
                        </Motion.h2>

                        <Motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
                        >
                            I am a software engineer who likes turning ideas into web experiences.

                        </Motion.p>
                    </div>


                    <AboutPhoto />

                </div>

            </div> {/* End of Container */}
        </section>
    );
};

export default About;
