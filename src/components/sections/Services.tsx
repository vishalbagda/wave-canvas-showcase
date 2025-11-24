import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Layout, Code, PenTool, CheckCircle2 } from 'lucide-react';

const services = [
    {
        title: "Web Designer",
        icon: Layout,
        description: "Services with more than 3 years of experience. Providing quality work to clients and companies.",
        points: [
            "I develop the user interface.",
            "Web page development.",
            "I create ux element interactions.",
            "I position your company brand.",
            "Design and mockups of products for companies."
        ]
    },
    {
        title: "UI/UX Designer",
        icon: Code,
        description: "Creating intuitive and engaging user experiences through research and design.",
        points: [
            "User research and personas.",
            "Wireframing and prototyping.",
            "Usability testing.",
            "Interaction design.",
            "Visual design systems."
        ]
    },
    {
        title: "Branding Designer",
        icon: PenTool,
        description: "Building strong brand identities that resonate with your target audience.",
        points: [
            "Logo design.",
            "Brand guidelines.",
            "Marketing materials.",
            "Social media graphics.",
            "Packaging design."
        ]
    }
];

export const Services = () => {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section id="services" className="section-padding min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Services</h2>
                <p className="text-muted-foreground">What i offer</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-card p-8 rounded-3xl hover-lift cursor-pointer group"
                        onClick={() => setSelectedService(index)}
                    >
                        <service.icon className="w-8 h-8 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">{service.title.split(' ').map((word, i) => <div key={i}>{word}</div>)}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                            View More <ArrowRight size={16} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedService !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedService(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-card w-full max-w-lg rounded-3xl p-8 shadow-2xl border border-white/10 z-10"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold mb-4 text-center">{services[selectedService].title}</h3>
                            <p className="text-center text-muted-foreground mb-8 text-sm max-w-xs mx-auto">
                                {services[selectedService].description}
                            </p>

                            <ul className="space-y-4">
                                {services[selectedService].points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
