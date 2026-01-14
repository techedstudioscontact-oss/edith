import { useState } from 'react';
import { Menu, X, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-dark-900/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 text-white font-bold text-xl flex items-center gap-2">
                            <Video className="w-6 h-6 text-primary" />
                            <span className="font-display tracking-wider">EDITH</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/find-editors" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:text-glow">Find Editors</Link>
                                <Link to="/find-creators" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:text-glow">Find Creators</Link>
                                <Link to="/how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:text-glow">How it Works</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:text-glow">
                                Log In
                            </Link>
                            <Link to="/signup" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/find-editors" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Find Editors</Link>
                            <Link to="/find-creators" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Find Creators</Link>
                            <Link to="/how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it Works</Link>
                            <div className="pt-4 flex flex-col space-y-2">
                                <Link to="/login" className="w-full text-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Log In
                                </Link>
                                <Link to="/signup" className="w-full text-center bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-md text-base font-medium">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};
