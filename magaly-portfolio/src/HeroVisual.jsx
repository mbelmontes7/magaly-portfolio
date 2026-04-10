const HeroVisual = () =>
{
    return (
        <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.35)] transition-transform duration-300 hover:scale-105">
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
    );
};

export default HeroVisual;