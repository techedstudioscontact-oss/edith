import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-dark-900 pt-16">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-hover text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        The #1 Marketplace for Creator-Editor Collaboration
                    </span>
                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
                        Create content that{' '}
                        <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            goes viral
                        </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-400">
                        Connect with top-tier video editors who understand your style.
                        Streamline your workflow, scale your production, and focus on what you do best—creating.
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <a
                            href="#"
                            className="group rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover transition-all flex items-center gap-2"
                        >
                            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#"
                            className="group rounded-lg px-8 py-3 text-sm font-semibold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            <Play className="w-4 h-4 fill-white" /> Watch Demo
                        </a>
                    </div>
                </motion.div>

                {/* Floating cards animation could go here */}
            </div>
        </div>
    );
};
