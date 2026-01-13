import React from 'react';
import { motion } from 'framer-motion';
import { Upload, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { SpotlightCard } from '../SpotlightCard';

const STEPS = [
    {
        title: "Upload Raw Clip",
        desc: "Drop your footage. Any format. We handle the heavy lifting.",
        icon: Upload,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        title: "Match with Elite",
        desc: "Our AI pairs you with the perfect editor for your niche in seconds.",
        icon: UserCheck,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
    },
    {
        title: "Review & Publish",
        desc: "Get your viral-ready edit in 24h. Revisions included.",
        icon: CheckCircle,
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 bg-dark-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-dark-950 z-0" />
            <div className="absolute top-[-20%] right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-semibold tracking-wide uppercase text-sm"
                    >
                        Seamless Workflow
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4"
                    >
                        From Raw to <span className="text-highlight-magma">Viral</span>
                    </motion.h2>

                    {/* Floating Decor */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden lg:block"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Streamlined for speed. Built for quality. Designed for creators who refuse to compromise.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {STEPS.map((step, i) => (
                        <SpotlightCard key={i} delay={i * 0.1} className="h-full">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 ${step.bg} ${step.border} border rounded-2xl flex items-center justify-center mb-6`}>
                                    <step.icon className={`w-7 h-7 ${step.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{step.desc}</p>

                                <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                    Step 0{i + 1} <div className="h-px bg-white/10 flex-grow" />
                                </div>

                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${step.bg} blur-[60px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

            </div>
        </section>
    );
};
