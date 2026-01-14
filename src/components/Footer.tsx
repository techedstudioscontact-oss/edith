import { Video, Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SITEMAP = {
    Product: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Showcase', href: '#showcase' },
        { name: 'How it Works', href: '#how-it-works' },
    ],
    Company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    Legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
    Socials: [
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'GitHub', href: '#', icon: Github },
    ]
};

export const Footer = () => {
    return (
        <footer className="bg-dark-950 border-t border-white/5 relative overflow-hidden pt-20 pb-10">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                            <Video className="w-8 h-8 text-primary" />
                            <span className="font-display tracking-wider">EDITH</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            The elite marketplace for creators and editors. We turn raw footage into viral masterpieces.
                        </p>

                        {/* Newsletter Input */}
                        <div className="relative max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-primary/20 hover:bg-primary text-primary hover:text-white px-4 rounded-lg text-sm font-semibold transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            {SITEMAP.Product.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {SITEMAP.Company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {SITEMAP.Socials.map((item) => (
                                <a key={item.name} href={item.href} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} EDITH Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Antigravity
                    </div>
                </div>
            </div>
        </footer>
    );
};
