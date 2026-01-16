import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, User, Mail, FileText, Link as LinkIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useSearchParams } from 'react-router-dom';

const JOB_POSITIONS = [
    'Senior Video Editor',
    'Community Manager',
    'Full Stack Developer',
    'Marketing Specialist',
    'Other / General Application'
];

export const Apply = () => {
    const [searchParams] = useSearchParams();
    const jobParam = searchParams.get('job');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: jobParam || '',
        resumeLink: '',
        coverLetter: '',
        linkedIn: '',
        portfolio: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/xdkoygvn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _replyto: formData.email,
                    _subject: `Job Application: ${formData.position}`,
                    to: 'techedstudios.contact@gmail.com'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    resumeLink: '',
                    coverLetter: '',
                    linkedIn: '',
                    portfolio: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 text-white">
            <Navbar />

            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                            Apply to <span className="text-highlight-magma">Join Us</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Fill out the form below and we'll get back to you within 48 hours.
                        </p>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Position */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    Position Applying For *
                                </label>
                                <select
                                    required
                                    value={formData.position}
                                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                >
                                    <option value="">Select a position...</option>
                                    {JOB_POSITIONS.map((pos) => (
                                        <option key={pos} value={pos}>{pos}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Personal Info */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            {/* Resume Link */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Resume/CV Link *
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={formData.resumeLink}
                                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                                    placeholder="https://drive.google.com/... or https://dropbox.com/..."
                                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                                <p className="mt-2 text-xs text-gray-500">
                                    Upload your resume to Google Drive, Dropbox, or similar and paste the shareable link here
                                </p>
                            </div>

                            {/* LinkedIn & Portfolio */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                        <LinkIcon className="w-4 h-4" />
                                        LinkedIn Profile
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.linkedIn}
                                        onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                                        placeholder="https://linkedin.com/in/..."
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                        <LinkIcon className="w-4 h-4" />
                                        Portfolio/Website
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.portfolio}
                                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                        placeholder="https://yourportfolio.com"
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Cover Letter / Why You? *
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.coverLetter}
                                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                    placeholder="Tell us why you'd be a great fit for this role..."
                                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? 'Submitting...' : (
                                    <>
                                        Submit Application <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
                                    Application submitted successfully! We'll review your application and get back to you within 48 hours.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                                    Failed to submit application. Please try again or email us directly at techedstudios.contact@gmail.com
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-white/10 p-6 rounded-2xl"
                    >
                        <h3 className="text-lg font-bold mb-2">About Teched Studios</h3>
                        <p className="text-gray-400 text-sm mb-3">
                            We're a passionate team building the future of content creation. Learn more about who we are and what we do.
                        </p>
                        <a
                            href="https://techedstudioscontact-oss.github.io/Teched-Studios-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-hover font-semibold text-sm inline-flex items-center gap-2"
                        >
                            Visit Teched Studios Website →
                        </a>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
