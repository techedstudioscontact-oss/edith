import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';

const FEATURES = [
    {
        title: "Lightning Fast Turnaround",
        desc: "Never miss a trend. Get your edits back in as little as 24 hours. Our global network of editors works around the clock so you don't have to.",
        icon: Zap,
        image: "linear-gradient(135deg, #1e1e24 0%, #0b0b0f 100%)",
        link: "pricing"
    },
    {
        title: "Enterprise Grade Security",
        desc: "Your footage is precious. We use bank-level encryption for file transfers and enforce strict NDAs with every editor on our platform.",
        icon: ShieldCheck,
        image: "linear-gradient(135deg, #1e1e24 0%, #0b0b0f 100%)",
        link: "trust"
    },
    {
        title: "Top 1% Talent Only",
        desc: "We vet thousands of editors so you don't have to. Only the top 1% make it through our rigorous testing process.",
        icon: Award,
        image: "linear-gradient(135deg, #1e1e24 0%, #0b0b0f 100%)",
        link: "showcase"
    }
];

export const FeatureBlocks = () => {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="features" className="py-24 bg-dark-950 overflow-hidden relative">
            {/* Background Mesh */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {FEATURES.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-32 last:mb-0`}
                    >
                        {/* Text Side */}
                        <div className="flex-1 text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 shadow-[0_0_30px_-10px_rgba(255,138,0,0.3)]">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{feature.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">{feature.desc}</p>

                            <button
                                onClick={() => handleScroll(feature.link)}
                                className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-primary transition-colors"
                            >
                                Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        {/* Visual Side */}
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] rounded-3xl border border-white/5 bg-dark-900 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 shadow-2xl">
                                <div className={`absolute inset-0 opacity-50`} style={{ background: feature.image }} />

                                {/* Geometric Decorations */}
                                <div className="absolute inset-0 bg-grid-white/[0.03]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />

                                {/* Mock UI Elements - 3D Tilt */}
                                <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                                    <div className="w-3/4 h-3/4 bg-dark-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform group-hover:rotate-y-6 group-hover:rotate-x-6 transition-transform duration-700 shadow-2xl">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-full h-4 bg-white/10 rounded shimmer-effect" />
                                            <div className="w-5/6 h-4 bg-white/10 rounded shimmer-effect delay-100" />
                                            <div className="w-4/6 h-4 bg-white/10 rounded shimmer-effect delay-200" />
                                        </div>
                                        <div className="mt-8 flex gap-4">
                                            <div className="flex-1 h-32 bg-white/5 rounded-xl border border-white/5" />
                                            <div className="flex-1 h-32 bg-white/5 rounded-xl border border-white/5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
