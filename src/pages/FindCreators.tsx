import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { User, Mail, Video } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

interface Creator {
    uid: string;
    displayName: string;
    bio: string;
    email: string;
}

export const FindCreators = () => {
    const [creators, setCreators] = useState<Creator[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const q = query(collection(db, "users"), where("role", "==", "creator"));
                const querySnapshot = await getDocs(q);
                const creatorsList = querySnapshot.docs.map(doc => doc.data() as Creator);
                setCreators(creatorsList);
            } catch (error) {
                console.error("Error fetching creators:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCreators();
    }, []);

    return (
        <div className="min-h-screen bg-dark-950 text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-white">
                        Find Inspiring <span className="text-primary text-glow">Creators</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Connect with visionaries who need your editing skills.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-primary animate-pulse">Loading creators...</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {creators.map((creator, i) => (
                            <SpotlightCard key={creator.uid} delay={i * 0.1}>
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{creator.displayName}</h3>
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">Creator</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 relative z-10">
                                    {creator.bio || "No bio available."}
                                </p>
                                <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary py-3 rounded-lg text-sm font-semibold transition-all relative z-10">
                                    <Mail className="w-4 h-4" /> Contact
                                </button>
                            </SpotlightCard>
                        ))}
                    </div>
                )}
                {!loading && creators.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        No creators found yet. Be the first to join!
                    </div>
                )}
            </div>
        </div>
    );
};
