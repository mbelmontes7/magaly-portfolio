import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

const SectionNav = () =>
{
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() =>
    {
        const observers = [];

        sections.forEach(({ id }) =>
        {
            const element = document.getElementById(id);

            if (!element)
            {
                return;
            }

            const observer = new IntersectionObserver(
                ([entry]) =>
                {
                    if (entry.isIntersecting)
                    {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: '-35% 0px -45% 0px',
                    threshold: 0.2
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () =>
        {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-[999] flex justify-center px-2 sm:px-4">
            <nav className="pointer-events-auto flex max-w-full items-center gap-1 rounded-full border border-white/10 bg-slate-950/80 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.28)] backdrop-blur-md">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <Motion.a
                            key={section.id}
                            href={`#${section.id}`}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative rounded-full px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em] ${isActive ? 'text-white' : 'text-slate-300'}`}
                        >
                            {isActive && (
                                <Motion.span
                                    layoutId="active-section-pill"
                                    className="absolute inset-0 rounded-full border border-purple-400/30 bg-purple-500/80 shadow-[0_10px_24px_rgba(168,85,247,0.24)]"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                        </Motion.a>
                    );
                })}
            </nav>
        </div>
    );
};

export default SectionNav;
