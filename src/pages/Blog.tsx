import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
    {
        title: 'How to Find the Perfect Video Editor for Your Content',
        excerpt: 'Learn the essential qualities to look for when hiring a video editor and how EDITH makes the process seamless.',
        author: 'EDITH Team',
        date: '2026-01-15',
        category: 'Tips & Guides',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop'
    },
    {
        title: 'The Rise of Short-Form Content: Trends for 2026',
        excerpt: 'Explore how short-form videos are dominating social media and what it means for creators and editors.',
        author: 'Content Team',
        date: '2026-01-10',
        category: 'Industry News',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop'
    },
    {
        title: '5 Editing Techniques That Make Videos Go Viral',
        excerpt: 'Discover the editing secrets used by top editors to create content that captures attention and drives engagement.',
        author: 'EDITH Team',
        date: '2026-01-05',
        category: 'Tutorial',
        image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop'
    },
    {
        title: 'Success Story: From 0 to 100K Subscribers',
        excerpt: 'How one creator used EDITH to scale their channel and build a sustainable content business.',
        author: 'Community Team',
        date: '2025-12-28',
        category: 'Success Stories',
        image: 'https://images.unsplash.com/photo-1551817958-20d4f9393ac3?w=800&auto=format&fit=crop'
    },
    {
        title: 'Behind the Scenes: Building EDITH',
        excerpt: 'A look at the technology and vision behind the platform connecting creators with elite editors.',
        author: 'Tech Team',
        date: '2025-12-20',
        category: 'Company',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop'
    },
    {
        title: 'The Future of AI in Video Editing',
        excerpt: 'How artificial intelligence is transforming video editing while keeping human creativity at the center.',
        author: 'EDITH Team',
        date: '2025-12-15',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop'
    },
];

const CATEGORIES = ['All', 'Tips & Guides', 'Industry News', 'Tutorial', 'Success Stories', 'Company', 'Technology'];

export const Blog = () => {
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
                            EDITH <span className="text-highlight-magma">Blog</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Insights, tutorials, and stories from the world of content creation and video editing.
                        </p>
                    </motion.div>

                    {/* Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-lg transition-all ${category === 'All'
                                        ? 'bg-primary text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all">
                            <div className="grid md:grid-cols-2">
                                <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-blue-500/20" />
                                <div className="p-8 flex flex-col justify-center">
                                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4 w-fit">
                                        Featured
                                    </span>
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {BLOG_POSTS[0].title}
                                    </h2>
                                    <p className="text-gray-400 mb-6">{BLOG_POSTS[0].excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            {BLOG_POSTS[0].author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {BLOG_POSTS[0].date}
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blog Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BLOG_POSTS.slice(1).map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
                                >
                                    <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20" />
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-white/5 text-gray-400 text-xs font-semibold rounded-full mb-3">
                                            {post.category}
                                        </span>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 p-12 rounded-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and get the latest tips, tutorials, and industry insights delivered to your inbox.
                        </p>
                        <div className="max-w-md mx-auto flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                            />
                            <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
