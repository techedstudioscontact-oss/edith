import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Video, Mail, Lock } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

            <motion.div
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full max-w-md bg-dark-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative z-10 group overflow-hidden"
                style={{
                    perspective: 1000,
                }}
            >
                {/* Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 107, 0, 0.15),
                            transparent 80%
                        )
                    `,
                    }}
                />
                {/* Spotlight Border */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 107, 0, 0.4),
                            transparent 80%
                        )
                    `,
                        maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                    }}
                />

                <div className="text-center mb-8 relative z-20">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="p-3 bg-dark-800 rounded-full border border-white/5 shadow-lg shadow-primary/10">
                            <Video className="w-8 h-8 text-primary" />
                        </div>
                    </motion.div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="font-display font-bold text-2xl tracking-wider text-white">EDITH</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Continue your journey.</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleLogin} className="space-y-4 relative z-20">
                    <div className="relative group/input">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within/input:text-primary transition-colors" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-dark-800 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600 focus:bg-dark-800/80"
                        />
                    </div>
                    <div className="relative group/input">
                        <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within/input:text-primary transition-colors" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-dark-800 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600 focus:bg-dark-800/80"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px -5px rgba(255, 107, 0, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all border border-primary/50 relative overflow-hidden"
                    >
                        <span className="relative z-10">Log In</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400 relative z-20">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary hover:text-primary-hover font-semibold hover:underline hover:text-glow transition-all">
                        Sign Up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
