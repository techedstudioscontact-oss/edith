import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
    "Netflix", "YouTube", "Twitch", "Adobe", "Discord", "Spotify", "Amazon", "Google"
];

export const SocialProof = () => {
    return (
        <section className="py-10 bg-dark-950 border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-dark-950/80 z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex relative z-0">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-16 px-8 whitespace-nowrap"
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-default">
                            {/* Placeholder Icon */}
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                            </div>
                            <span className="text-xl font-display font-bold text-white/30 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-20" />
        </section>
    );
};
