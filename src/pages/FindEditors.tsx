import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, MapPin, Star, MessageSquare, Mail } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { DrivePlayer } from '../components/DrivePlayer';

interface Editor {
    id: string;
    displayName: string;
    bio: string;
    photoURL?: string;
    role: 'editor';
    portfolioUrl?: string;
    driveLink?: string; // New field
    email?: string;
}

export const FindEditors = () => {
    const [editors, setEditors] = useState<Editor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEditors = async () => {
            try {
                const q = query(collection(db, "users"), where("role", "==", "editor"));
                const querySnapshot = await getDocs(q);
                const editorsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Editor[];
                setEditors(editorsData);
            } catch (error) {
                console.error("Error fetching editors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEditors();
    }, []);

    const handleContact = (email: string | undefined) => {
        if (email) {
            window.location.href = `mailto:${email}?subject=Project Inquiry via EDITH`;
        } else {
            alert("No email contact available for this user.");
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-primary/30">
            <Navbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Find World-Class <span className="text-highlight-magma">Editors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Discover the talent that will take your content to the next level.
                    </motion.p>
                </div>

                {/* Search Bar (Placeholder for now) */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by skill (e.g., 'VFX', 'Sound Design')"
                        className="w-full bg-dark-900 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-glow"
                    />
                </div>

                {/* Editors Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {editors.map((editor, i) => (
                            <SpotlightCard key={editor.id} delay={i * 0.1} className="h-full">
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header: Avatar & Name */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-2xl font-bold uppercase text-gray-400 overflow-hidden">
                                            {editor.photoURL ? (
                                                <img src={editor.photoURL} alt={editor.displayName} className="w-full h-full object-cover" />
                                            ) : (
                                                editor.displayName.charAt(0)
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white leading-tight">{editor.displayName}</h3>
                                            <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
                                                <MapPin className="w-3 h-3" /> <span>Remote</span>
                                            </div>
                                        </div>
                                        <div className="ml-auto w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Star className="w-4 h-4 fill-primary" />
                                        </div>
                                    </div>

                                    {/* Video Showcase */}
                                    {editor.driveLink ? (
                                        <div className="mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                            <DrivePlayer url={editor.driveLink} />
                                        </div>
                                    ) : (
                                        <div className="mb-6 h-40 bg-dark-800/50 rounded-xl border border-white/5 flex items-center justify-center text-gray-600 text-sm">
                                            No portfolio video
                                        </div>
                                    )}

                                    {/* Bio */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {editor.bio || "No bio available."}
                                    </p>

                                    {/* Actions */}
                                    <div className="flex gap-3 mt-auto">
                                        <button
                                            onClick={() => handleContact(editor.email)}
                                            className="flex-1 bg-white text-dark-950 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" /> Contact
                                        </button>
                                        <button className="flex-1 bg-white/5 text-white font-bold py-3 rounded-lg hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2">
                                            <MessageSquare className="w-4 h-4" /> Portolio
                                        </button>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};
