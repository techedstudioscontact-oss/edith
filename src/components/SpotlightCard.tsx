import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations for smooth tilt
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Set spotlight position
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        // Set tilt values (rotateX based on Y distance, rotateY based on X distance)
        // Max rotation is roughly 10 degrees
        const rotateXValue = ((clientY - centerY) / height) * -20;
        const rotateYValue = ((clientX - centerX) / width) * 20;

        x.set(rotateXValue);
        y.set(rotateYValue);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            style={{
                perspective: 1000,
                rotateX: x,
                rotateY: y,
                transformStyle: "preserve-3d",
            }}
            className={`relative h-full bg-dark-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 overflow-hidden group ${className}`}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 0, 0.1),
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

            <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
