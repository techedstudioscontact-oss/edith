import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Showcase = () => {
    return (
        <section className="py-24 bg-dark-950 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-gradient-liquid">Masterpieces</span></h2>
                        <p className="text-gray-400 max-w-lg">See what's possible when you work with the top 1%. Millions of views generated for our creators.</p>
                    </div>
                    <button className="text-white font-semibold border-b border-primary hover:text-primary transition-colors">
                        View Full Portfolio
                    </button>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[9/16] bg-dark-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20">
                                    <Play className="w-6 h-6 fill-current" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary text-white">VIRAL</span>
                                    <span className="text-xs text-gray-300">2.5M Views</span>
                                </div>
                                <h3 className="text-lg font-bold text-white">The Future of AI Gaming</h3>
                                <p className="text-sm text-gray-400">Edited by @AlexPro</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
