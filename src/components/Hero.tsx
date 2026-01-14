import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Sparkles, Zap, Video, MousePointer2 } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse Parallax (simplified)
    const ref = useRef<HTMLDivElement>(null);

    return (
        <header ref={ref} className="relative overflow-hidden bg-dark-950 pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center justify-center selection:bg-primary/30 perspective-1000">
            {/* God Level Background Effects */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-10 mix-blend-overlay" />

            {/* Aurora Magma */}
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-primary/20 blur-[150px] rounded-full animate-aurora-1 mix-blend-screen opacity-40 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-purple-500/10 blur-[150px] rounded-full animate-aurora-2 mix-blend-screen opacity-30 pointer-events-none" />

            {/* Floating 3D Elements */}
            <motion.div style={{ y: y1, rotate: -10 }} className="absolute top-40 left-[10%] p-4 bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-2xl z-0 hidden lg:block animate-float-ethereal">
                <Video className="w-12 h-12 text-primary" />
                <div className="absolute -bottom-6 right-0 bg-white text-dark-950 text-xs font-bold px-2 py-1 rounded shadow-lg">4K RAW</div>
            </motion.div>

            <motion.div style={{ y: y2, rotate: 15 }} className="absolute bottom-40 right-[10%] p-4 bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-2xl z-0 hidden lg:block animate-float-ethereal" transition={{ delay: 1 }}>
                <Zap className="w-12 h-12 text-yellow-400" />
                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">+200% Views</div>
            </motion.div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">

                {/* Preheadline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-8 shadow-glow"
                >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    The #1 Marketplace for Creators
                </motion.div>

                {/* Headline - Stacked & Clamped */}
                <h1 className="font-display font-black text-white mb-8 text-clamp-hero leading-[0.85] tracking-tighter relative drop-shadow-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 60, rotateX: -40 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                        className="block relative z-10"
                    >
                        CREATE
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 60, rotateX: -40 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.15, type: "spring", bounce: 0.5 }}
                        className="block relative z-10"
                    >
                        CONTENT
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 60, rotateX: -40 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
                        className="block relative z-10"
                    >
                        THAT <span className="text-highlight-magma inline-block relative">
                            ERUPTS
                            <div className="absolute inset-0 blur-xl bg-primary/30 -z-10 animate-pulse" />
                        </span>
                    </motion.span>
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="mx-auto max-w-2xl text-gray-400 font-light mb-12 text-lg sm:text-xl md:text-2xl leading-relaxed"
                >
                    Stop editing. Connect with elite editors who turn raw footage into <span className="text-white font-semibold">viral masterpieces</span>.
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-6 items-center"
                >
                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-10 py-5 bg-gradient-to-r from-primary to-primary-end text-white font-bold text-xl rounded-2xl overflow-hidden shadow-glow transition-all hover:shadow-glow-lg hover:scale-105 w-full sm:w-auto btn-shine-effect"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Started Now <MousePointer2 className="w-5 h-5 fill-white" />
                        </span>
                    </button>

                    <button className="px-10 py-5 rounded-2xl text-white font-semibold border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto backdrop-blur-sm group">
                        <Play className="w-5 h-5 fill-white group-hover:text-primary transition-colors" /> Watch 30s Demo
                    </button>
                </motion.div>

            </div>
        </header>
    );
};
