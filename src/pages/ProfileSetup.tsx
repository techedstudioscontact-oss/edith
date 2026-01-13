import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, User, Briefcase, Link as LinkIcon, Check } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { DrivePlayer } from '../components/DrivePlayer';

export const ProfileSetup = () => {
    const [role, setRole] = useState<'creator' | 'editor' | null>(null);
    const [bio, setBio] = useState('');
    const [driveLink, setDriveLink] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!auth.currentUser || !role) return;

        setLoading(true);
        try {
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName || auth.currentUser.email?.split('@')[0],
                role,
                bio,
                driveLink, // Save Drive Link
                createdAt: new Date().toISOString()
            });
            navigate(role === 'creator' ? '/find-editors' : '/find-creators');
        } catch (error) {
            console.error("Error saving profile:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl glow-box relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                        <User className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Complete Your Profile</h2>
                    <p className="text-gray-400">Tell us who you are so we can connect you with the right people.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Role Selection */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setRole('creator')}
                            className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-4 group ${role === 'creator'
                                ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,107,0,0.2)]'
                                : 'border-white/10 hover:border-primary/50 hover:bg-white/5'
                                }`}
                        >
                            <div className={`p-4 rounded-full ${role === 'creator' ? 'bg-primary text-white' : 'bg-dark-800 text-gray-400 group-hover:text-primary transition-colors'}`}>
                                <Video className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-1">I'm a Creator</h3>
                                <p className="text-sm text-gray-400">I make content and need editors.</p>
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setRole('editor')}
                            className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-4 group ${role === 'editor'
                                ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,107,0,0.2)]'
                                : 'border-white/10 hover:border-primary/50 hover:bg-white/5'
                                }`}
                        >
                            <div className={`p-4 rounded-full ${role === 'editor' ? 'bg-primary text-white' : 'bg-dark-800 text-gray-400 group-hover:text-primary transition-colors'}`}>
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-1">I'm an Editor</h3>
                                <p className="text-sm text-gray-400">I edit videos and am looking for work.</p>
                            </div>
                        </button>
                    </div>

                    {/* Bio Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Bio / Skills</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about your experience..."
                            className="w-full h-24 bg-dark-800 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                        />
                    </div>

                    {/* Drive Link Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Portfolio Video <span className="text-gray-500">(Google Drive Link)</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LinkIcon className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="url"
                                value={driveLink}
                                onChange={(e) => setDriveLink(e.target.value)}
                                placeholder="https://drive.google.com/file/d/..."
                                className="w-full bg-dark-800 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                            Make sure to change the Drive link settings to "Anyone with the link".
                        </p>
                    </div>

                    {/* Drive Player Preview */}
                    {driveLink && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                        >
                            <label className="block text-sm font-medium text-gray-400">Preview</label>
                            <DrivePlayer url={driveLink} />
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={!role || loading}
                        className="w-full bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-lg uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                        {loading ? 'Saving...' : (
                            <>
                                Get Started <Check className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
