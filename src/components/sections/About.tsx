import { motion } from 'framer-motion';
import { SoundButton } from '@/components/ui/SoundButton';
import { Award, Briefcase, Headphones, FileText } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="section-padding min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
                <p className="text-muted-foreground">My introduction</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80"
                            alt="About Me"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="glass-card p-4 rounded-xl text-center flex flex-col items-center gap-2 hover-lift">
                            <Award className="w-6 h-6 text-primary" />
                            <h3 className="font-bold text-sm">Experience</h3>
                            <p className="text-xs text-muted-foreground">8+ Years</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl text-center flex flex-col items-center gap-2 hover-lift">
                            <Briefcase className="w-6 h-6 text-primary" />
                            <h3 className="font-bold text-sm">Completed</h3>
                            <p className="text-xs text-muted-foreground">48+ Projects</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl text-center flex flex-col items-center gap-2 hover-lift">
                            <Headphones className="w-6 h-6 text-primary" />
                            <h3 className="font-bold text-sm">Support</h3>
                            <p className="text-xs text-muted-foreground">Online 24/7</p>
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    </p>

                    <SoundButton className="flex items-center gap-2">
                        Download CV <FileText size={18} />
                    </SoundButton>
                </motion.div>
            </div>
        </section>
    );
};
