import { motion } from 'framer-motion';
import { SoundButton } from '@/components/ui/SoundButton';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="section-padding min-h-[80vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        I'm currently available for freelance work or full-time opportunities.
                        If you have a project that needs some creative touch, I'd love to hear about it.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <span>hello@example.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                </div>

                <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <SoundButton className="w-full">
                        Send Message
                    </SoundButton>
                </form>
            </motion.div>
        </section>
    );
};
