import React from 'react';
import { motion } from 'framer-motion';
import { SoundButton } from '@/components/ui/SoundButton';
import { WaveBackground } from '@/components/ui/WaveBackground';

interface LayoutProps {
    children: React.ReactNode;
}

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass-strong"
        >
            <div className="text-xl font-bold gradient-text font-sans">Portfolio</div>
            <div className="flex gap-4">
                <SoundButton variant="ghost" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</SoundButton>
                <SoundButton variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</SoundButton>
            </div>
        </motion.nav>
    );
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30 font-sans">
            {/* Background Elements */}
            <WaveBackground />
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};
