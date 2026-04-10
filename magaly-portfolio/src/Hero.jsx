


const Hero = () =>
{
    return (
        <section className="min-h-screen w-full overflow-hidden text-white bg-[radial-gradient(circle_at_center,_#123ea8_0%,_#071b55_35%,_#020b2d_75%,_#01061a_100%)] flex items-center justify-center">
            <div className="w-30 max-w-8xl px-8 md:px-30 lg:px-10">
                <div className="flex flex-row items-center gap-0 mx-auto max-w-3xl justify-center">
                    {/* Left Side */}
                    <div className="text-center md:text-left md:items-start">

                        <h1 className="text-20xl font-extrabold leading-tight sm:text-30xl lg:text-10xl">
                            Magaly
                        </h1>

                        <div className="mt-0 justify-center md:justify-start">
                            <span className="inline-block -rotate-[5deg] rounded-[9px] bg-[#2348C7] px-4 py-10 text-lg font-extrabold uppercase tracking-[0.18em] text-white shadow-md sm:text-base">
                                Developer
                            </span>
                        </div>

                        <p className="mt-20 text-base text-slate-300 text-lg lg:text-xl">
                            Software engineer building creative projects with code.
                        </p>
                    </div>


                    {/* Right Side  on the video */}
                    <div className="flex flex-shrink-0">
                        {/* video css */}
                        <div className="relative max-w-[189px] sm:max-w-[100px] md:max-w-[10px]">
                            {/* <div className="absolute inset-0 scale-110 rounded-[2rem] bg-blue-500/20 blur-3xl" /> */}
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.35)]">
                                <video
                                    className="block h-full w-full object-cover"
                                    src="/coding.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Hero;