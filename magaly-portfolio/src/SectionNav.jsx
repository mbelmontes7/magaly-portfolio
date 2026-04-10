import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4">
            <nav className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/55 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.28)] backdrop-blur-md">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                        <motion.a
                            key={section.id}
                            href={`#${section.id}`}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-4 sm:text-xs ${isActive ? 'text-white' : 'text-slate-300'}`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-section-pill"
                                    className="absolute inset-0 rounded-full border border-purple-400/30 bg-purple-500/80 shadow-[0_10px_24px_rgba(168,85,247,0.24)]"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                        </motion.a>
                    );
                })}
            </nav>
        </div>
    );
};

export default SectionNav;
