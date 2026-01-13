import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Lifestyle Vlogger",
        content: "I was spending 20 hours a week editing. Now I just film and upload. EDITH literally saved my channel.",
        rating: 5
    },
    {
        name: "Mark Davis",
        role: "Tech Reviewer",
        content: "The quality of editors here is unmatched. My retention rate went up by 40% after my first hire.",
        rating: 5
    }
];

const FAQS = [
    { q: "How does the matching process work?", a: "We analyze your content style and requirements to match you with editors who specialize in your niche." },
    { q: "What if I don't like the edit?", a: "Revisions are unlimited on Pro plans. satisfied or your money back." },
    { q: "Are the file transfers secure?", a: "Yes, we use enterprise-grade encryption for all file uploads and storage." }
];

export const Trust = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-dark-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-dark-950 p-8 rounded-2xl border border-white/5 relative">
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, r) => (
                                    <Star key={r} className="w-5 h-5 text-primary fill-current" />
                                ))}
                            </div>
                            <p className="text-xl text-gray-200 italic mb-6">"{t.content}"</p>
                            <div>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-sm text-primary">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="bg-dark-950 border border-white/5 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180 text-primary' : 'text-gray-500'}`} />
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-400">
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
