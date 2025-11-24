import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SoundButton } from '@/components/ui/SoundButton';
import { useSoundEffects } from '@/hooks/use-sound-effects';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Building digital experiences that matter.";
    const { playType } = useSoundEffects();

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText((prev) => prev + fullText.charAt(i));
                playType();
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Faster typing speed

        return () => clearInterval(interval);
    }, [playType]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl relative z-10"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-primary font-medium tracking-wider uppercase mb-4 block"
                >
                    Welcome to my portfolio
                </motion.span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative">
                    <span className="relative inline-block">
                        {text}
                        <span className="animate-pulse text-primary">|</span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light"
                >
                    I craft premium, high-performance websites with a focus on user experience and minimalist design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, type: "spring" }}
                    className="flex gap-4 justify-center"
                >
                    <SoundButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Work
                    </SoundButton>
                    <SoundButton variant="glass" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Me
                    </SoundButton>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-muted-foreground w-6 h-6" />
            </motion.div>
        </section>
    );
};
