import React, { useState } from 'react';
import { Menu, X, Video, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-dark-900/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white font-bold text-xl flex items-center gap-2">
                            <Video className="w-6 h-6 text-primary" />
                            <span>EDITH</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Find Editors</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Find Creators</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How it Works</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Log In
                            </button>
                            <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-primary/20">
                                Sign Up
                            </button>
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
                            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Find Editors</a>
                            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Find Creators</a>
                            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
                            <div className="pt-4 flex flex-col space-y-2">
                                <button className="w-full text-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Log In
                                </button>
                                <button className="w-full text-center bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-md text-base font-medium">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
