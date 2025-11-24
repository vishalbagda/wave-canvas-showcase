import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SoundButton } from '@/components/ui/SoundButton';
import { useSoundEffects } from '@/hooks/use-sound-effects';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Visual Designer";
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
        }, 100);

        return () => clearInterval(interval);
    }, [playType]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Social Sidebar */}
                <div className="hidden md:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={24} /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
                </div>

                {/* Content */}
                <div className="md:pl-20 space-y-6 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold"
                    >
                        John Smith <span className="animate-wave inline-block origin-bottom-right">👋</span>
                    </motion.h1>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="h-[1px] w-16 bg-muted-foreground/50"></div>
                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                            {text}<span className="animate-pulse text-primary">|</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground max-w-md mx-auto md:mx-0"
                    >
                        I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <SoundButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Say Hello <span className="ml-2">✈️</span>
                        </SoundButton>
                    </motion.div>
                </div>

                {/* Image Blob */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-end relative"
                >
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                        {/* Blob Shape Animation */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob filter blur-xl"></div>
                        <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white/10 glass shadow-2xl animate-blob">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-sm text-muted-foreground">Scroll down</span>
                <ArrowDown className="text-primary w-5 h-5" />
            </motion.div>
        </section>
    );
};
