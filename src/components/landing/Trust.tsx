import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Quote, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from '../SpotlightCard';

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Lifestyle Vlogger (2M+ Subs)",
        content: "I was spending 20 hours a week editing. Now I just film and upload. EDITH literally saved my channel.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Mark Davis",
        role: "Tech Reviewer",
        content: "The quality of editors here is unmatched. My retention rate went up by 40% after my first hire.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const FAQS = [
    { q: "How does the matching process work?", a: "We analyze your content style, niche, and pacing requirements to match you with editors who specialize in your specific format. It's not just a directory; it's a curated match." },
    { q: "What if I don't like the edit?", a: "Revisions are unlimited on Pro plans. satisfied or your money back. We hold the payment until you approve the final cut." },
    { q: "Are the file transfers secure?", a: "Yes, we use enterprise-grade encryption for all file uploads and storage. Your raw footage is never shared publicly." },
    { q: "Can I hire an editor full-time?", a: "Absolutely. Many creators start with a single project and move to a retainer model. We handle the contracts and billing for you." }
];

export const Trust = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="trust" className="py-32 bg-dark-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Trusted by <span className="text-highlight-magma">Creators</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Join thousands of creators who claim back their time and scale their content with EDITH.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {TESTIMONIALS.map((t, i) => (
                        <SpotlightCard key={i} className="h-full">
                            <div className="relative z-10 flex flex-col h-full">
                                <Quote className="absolute top-0 right-0 text-white/5 w-16 h-16 -mr-4 -mt-4 transform rotate-12" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, r) => (
                                        <Star key={r} className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                                    ))}
                                </div>

                                <p className="text-xl text-gray-200 italic mb-8 leading-relaxed font-light">"{t.content}"</p>

                                <div className="mt-auto flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-white/20" />
                                    <div>
                                        <div className="font-bold text-white flex items-center gap-2">
                                            {t.name} <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                                        </div>
                                        <div className="text-sm text-primary font-medium">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Support</span>
                        <h3 className="text-3xl font-display font-bold">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="group bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <span className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors pr-8">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'text-gray-500 group-hover:bg-white/10'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
