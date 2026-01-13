import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/landing/SocialProof';
import { HowItWorks } from '../components/landing/HowItWorks';
import { FeatureBlocks } from '../components/landing/FeatureBlocks';
import { Showcase } from '../components/landing/Showcase';
import { Pricing } from '../components/landing/Pricing';
import { Trust } from '../components/landing/Trust';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-white selection:bg-primary/30 font-sans">
            <Navbar />

            <main>
                <Hero />
                <div id="social-proof"><SocialProof /></div>
                <div id="how-it-works"><HowItWorks /></div>
                <div id="features"><FeatureBlocks /></div>
                <div id="showcase"><Showcase /></div>
                <div id="pricing"><Pricing /></div>
                <div id="trust"><Trust /></div>
            </main>

            <Footer />
        </div>
    );
};
