import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-dark-900 text-white selection:bg-primary/30">
            <Navbar />
            <Hero />

            {/* Feature section placeholder */}
            <div className="py-24 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">How it Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['Post a Project', 'Match with Editors', 'Manage Workflow'].map((step, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-dark-700 border border-white/5">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step}</h3>
                                <p className="text-gray-400">Streamline your content creation process with our dedicated platform.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
