import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Video, Target, Users, Zap, Heart } from 'lucide-react';

const TEAM_MEMBERS = [
    { name: 'Teched Studios', role: 'Founder & CEO', description: 'Visionary leader bringing creators and editors together' },
    { name: 'Development Team', role: 'Engineering', description: 'Building the future of content collaboration' },
    { name: 'Community Team', role: 'Support', description: 'Ensuring the best experience for our users' },
];

const VALUES = [
    { icon: Target, title: 'Quality First', description: 'We never compromise on the quality of matches and edits' },
    { icon: Zap, title: 'Speed Matters', description: '24-hour turnaround because your content can\'t wait' },
    { icon: Users, title: 'Community Driven', description: 'Built by creators, for creators and editors' },
    { icon: Heart, title: 'Passion Powered', description: 'We love what we do and it shows in every project' },
];

export const About = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-white">
            <Navbar />

            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                            <Video className="w-8 h-8" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            About <span className="text-highlight-magma">EDITH</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                            The elite marketplace connecting world-class video editors with top content creators.
                            We turn raw footage into viral masterpieces.
                        </p>
                    </motion.div>

                    {/* Mission Section */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                To revolutionize content creation by building the world's most trusted platform
                                where talented editors and ambitious creators collaborate seamlessly.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We believe every creator deserves access to professional editing, and every
                                editor deserves opportunities to showcase their craft.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                To become the go-to platform for content collaboration, powering millions of
                                viral videos and helping creators build sustainable businesses.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We're building a future where geographical boundaries don't limit creativity,
                                and talent connects with opportunity instantly.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {VALUES.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-gray-400 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Team */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {TEAM_MEMBERS.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center hover:border-primary/50 transition-all"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-500 rounded-full mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm mb-3">{member.role}</p>
                                    <p className="text-gray-400 text-sm">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 p-12 rounded-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8">EDITH by the Numbers</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                                <div className="text-gray-400">Editors</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                                <div className="text-gray-400">Creators</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                                <div className="text-gray-400">Videos Edited</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                                <div className="text-gray-400">Avg Turnaround</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
