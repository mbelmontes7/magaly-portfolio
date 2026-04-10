import React from 'react';
import { motion } from 'framer-motion';

const AboutPhoto = () =>
{
    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            /* CHANGE: Removed 'aspect-square' and 'w-full'. 
               ADDED: 'w-fit' so the background only wraps around the image.
            */
            className="relative w-fit bg-slate-900/80 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden p-4"
        >

            {/* Background Glows scaled down to match small size */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-2 right-2 w-12 h-12 rounded-full bg-blue-600/20 blur-xl"
            />

            {/* THE PHOTO: Kept at w-40 h-40 as you requested */}
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-white/5 bg-black z-10">
                <img
                    src="magaly.jpg"
                    alt="Magaly - Software Engineer"
                    className="w-full h-full object-cover"
                />
            </div>

        </motion.div>
    );
};

export default AboutPhoto;