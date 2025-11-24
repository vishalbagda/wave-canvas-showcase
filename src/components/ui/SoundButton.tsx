import React from 'react';
import { cn } from '@/lib/utils';
import { useSoundEffects } from '@/hooks/use-sound-effects';
import { motion } from 'framer-motion';

interface SoundButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
}

export const SoundButton = React.forwardRef<HTMLButtonElement, SoundButtonProps>(
    ({ className, variant = 'primary', onClick, onMouseEnter, children, ...props }, ref) => {
        const { playClick, playHover } = useSoundEffects();

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            playClick();
            onClick?.(e);
        };

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
            playHover();
            onMouseEnter?.(e);
        };

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-white/10 text-foreground",
            glass: "glass-button"
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    className
                )}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

SoundButton.displayName = 'SoundButton';
