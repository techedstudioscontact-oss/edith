import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using Formspree or similar service to send email
            const response = await fetch('https://formspree.io/f/xdkoygvn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _replyto: formData.email,
                    _subject: `Contact Form: ${formData.subject}`,
                    to: 'techedstudios.contact@gmail.com'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 text-white">
            <Navbar />

            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                            Get in <span className="text-highlight-magma">Touch</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Have questions about EDITH? Want to partner with us? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                                    >
                                        {status === 'sending' ? 'Sending...' : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>

                                    {status === 'success' && (
                                        <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
                                            Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                                            Failed to send message. Please try again or email us directly.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/20 rounded-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Email</h3>
                                        <a href="mailto:techedstudios.contact@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                            techedstudios.contact@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/20 rounded-lg">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Headquarters</h3>
                                        <p className="text-gray-400">
                                            Global Remote Team<br />
                                            Available Worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold mb-2">Looking to Partner?</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    We're always interested in collaborating with talented creators and editors.
                                </p>
                                <a
                                    href="mailto:techedstudios.contact@gmail.com?subject=Partnership Inquiry"
                                    className="text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2"
                                >
                                    Send Partnership Inquiry →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
