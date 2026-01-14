import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PLANS = [
    {
        name: "Starter",
        price: "₹199",
        desc: "Perfect for new creators.",
        features: ["1 Short Form Video", "2 Round of Revisions", "Basic Color Grading", "48h Delivery"],
        highlight: false
    },
    {
        name: "Viral",
        price: "₹999",
        desc: "For serious growth.",
        features: ["3 Short Form Videos", "Unlimited Revisions", "Advanced Sound Design", "Motion Graphics", "24h Priority Delivery"],
        highlight: true
    },
    {
        name: "Team",
        price: "₹2499",
        desc: "Scale your production.",
        features: ["10 Short Form Videos", "Dedicated Editor", "Source Files Included", "Slack Integration", "Same Day Delivery"],
        highlight: false
    }
];

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
    const words = text.split(" ");
    if (text.startsWith("₹")) {
        return (
            <span className={`inline-block ${className} font-display tracking-tight`}>
                {text}
            </span>
        );
    }
    return (
        <div className={`overflow-hidden flex flex-wrap gap-1 ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4, ease: "easeOut" }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-dark-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary font-medium tracking-wide uppercase text-xs mb-6"
                    >
                        <Star className="w-3 h-3 fill-current" /> Unbeatable Value
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                        <span className="block text-white">Choose your</span>
                        <span className="text-highlight-magma">Velocity</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Premium editing shouldn't break the bank. Unlock Hollywood-grade post-production for the price of a coffee.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="relative group"
                        >
                            {plan.highlight && (
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-yellow-500 to-primary-end rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
                            )}
                            <div className={`
                                relative h-full backdrop-blur-3xl border rounded-2xl p-8 flex flex-col transition-all duration-500 group-hover:transform group-hover:-translate-y-2
                                ${plan.highlight ? 'bg-dark-900/90 border-primary/50 shadow-2xl shadow-primary/20 scale-105 z-10' : 'bg-dark-950/80 border-white/10 hover:border-white/20'}
                            `}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/40">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">{plan.name}</h3>
                                <div className="text-5xl font-black mb-4 flex items-baseline gap-1 text-white">
                                    <AnimatedText text={plan.price} />
                                    <span className="text-sm font-medium text-gray-500">/video</span>
                                </div>
                                <AnimatedText text={plan.desc} className="text-gray-400 text-sm mb-8 border-b border-white/5 pb-8" />

                                <div className="space-y-5 mb-10 flex-grow">
                                    {plan.features.map((feat, j) => (
                                        <div key={j} className="flex items-start gap-4 text-sm group/item">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${plan.highlight ? 'bg-primary text-white' : 'bg-white/10 text-white group-hover/item:bg-primary group-hover/item:text-white'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-gray-300 group-hover/item:text-white transition-colors">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-4 rounded-xl font-bold transition-all btn-shine-effect tracking-wide text-sm uppercase ${plan.highlight
                                    ? 'bg-gradient-to-r from-primary to-primary-end text-white shadow-lg shadow-primary/30 hover:shadow-primary/50'
                                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                                    }`}>
                                    Get {plan.name}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
