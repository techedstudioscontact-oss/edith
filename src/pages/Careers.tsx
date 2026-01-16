import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Briefcase, MapPin, Clock, DollarSign, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const JOB_OPENINGS = [
    {
        title: 'Senior Video Editor',
        department: 'Creative',
        location: 'Remote',
        type: 'Full-time',
        description: 'Join our elite editing team and work on viral content for top creators worldwide.'
    },
    {
        title: 'Community Manager',
        department: 'Operations',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help build and nurture our community of creators and editors.'
    },
    {
        title: 'Full Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'Build features that power the future of content collaboration.'
    },
    {
        title: 'Marketing Specialist',
        department: 'Growth',
        location: 'Remote',
        type: 'Contract',
        description: 'Drive growth and help creators discover EDITH.'
    },
];

const BENEFITS = [
    { icon: MapPin, title: 'Remote First', description: 'Work from anywhere in the world' },
    { icon: Clock, title: 'Flexible Hours', description: 'Choose your own schedule' },
    { icon: DollarSign, title: 'Competitive Pay', description: 'Industry-leading compensation' },
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive coverage' },
    { icon: Zap, title: 'Growth Opportunities', description: 'Learn and advance your career' },
    { icon: Briefcase, title: 'Equipment Budget', description: 'Get the tools you need' },
];

export const Careers = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-white">
            <Navbar />

            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                            Join the <span className="text-highlight-magma">Team</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Help us revolutionize content creation. Work with talented people on meaningful problems.
                        </p>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">Why Work at EDITH?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {BENEFITS.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Open Positions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                        <div className="space-y-4">
                            {JOB_OPENINGS.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-gray-400 mb-4">{job.description}</p>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                                                    📍 {job.location}
                                                </span>
                                                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                                                    ⏱️ {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/apply?job=${encodeURIComponent(job.title)}`}
                                            className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 text-center whitespace-nowrap"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 p-12 rounded-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            We're always looking for talented people. Send us your resume and tell us how you can contribute to EDITH.
                        </p>
                        <Link
                            to="/apply?job=Other / General Application"
                            className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
                        >
                            Send Your Resume
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
