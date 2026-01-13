import React from 'react';
import { Video, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Video className="w-6 h-6 text-primary" />
                            <span className="text-white font-bold text-xl">EDITH</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering creators and editors to build the future of content together.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Find Editors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Find Creators</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">How it Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white hover:bg-primary/20 p-2 rounded-full transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} EDITH. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                        <span>Developed with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>by</span>
                        <a href="#" className="text-white font-semibold hover:text-primary transition-colors relative group">
                            Teched Studios
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
