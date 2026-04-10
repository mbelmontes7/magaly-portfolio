import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu } from 'lucide-react';

const Hero = () =>
{
    // Animation settings for the "fade up" effect
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#01061a]">
            return (
            <section className="relative min-h-screen w-full flex items-center justify-center bg-[#01061a] overflow-hidden">

                {/* LAYER 1: THE BACKGROUND (Strictly decorative) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#123ea8_0%,_transparent_70%)] opacity-30" />
                    {/* This grid helps ground the design */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                </div>

                {/* LAYER 2: THE CONTENT (Z-10 keeps it above the background) */}
                <div className="container relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">



                        {/* LEFT: Text Column */}
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <h1 className="  text-5xl md:text-7xl font-extrabold text-green tracking-tight">
                                <div className="h-20 w-20 bg-purple-500 text-white"> Hi</div>
                                <span className="text-purple-300"> I'm Magaly</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Software engineer + Soccer player. I build things for the web and the pitch. Let's create something amazing together.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="className= px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                                >
                                    Aboout me
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="className= px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                                >
                                    View my work
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="className= px-8 py-3 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                                >
                                    Contact me
                                </motion.button>


                            </div>
                        </div>

                        {/* RIGHT: The Video "Window" (This is where the mess was!) */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            {/* THE BOX: This limits how big the video can get */}
                            <div className="relative w-full max-w-[600px] aspect-video bg-slate-900 rounded-2xl border border-white/10 shadow-2xl p-2">

                                {/* Header / Dots */}
                                <div className="flex gap-1.5 mb-2 px-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>

                                {/* THE VIDEO: Now forced to stay inside the box */}
                                <div className="w-full h-[calc(160%-30px)] rounded-xl overflow-hidden bg-black">
                                    <video
                                        src="/coding.mp4"
                                        autoPlay muted loop playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            );



        </section >
    );
};

export default Hero;