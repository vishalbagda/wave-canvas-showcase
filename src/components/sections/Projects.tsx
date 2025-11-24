import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React, { useRef } from 'react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with real-time inventory and secure payments.",
        tags: ["React", "Node.js", "Stripe"],
        link: "#",
        github: "#"
    },
    {
        title: "AI Dashboard",
        description: "Analytics dashboard powered by machine learning algorithms for data visualization.",
        tags: ["Python", "TensorFlow", "D3.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Social Media App",
        description: "Real-time social networking application with chat and media sharing.",
        tags: ["Next.js", "Socket.io", "Prisma"],
        link: "#",
        github: "#"
    }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between group relative"
        >
            <div style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-2">
                        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
            </div>

            <div style={{ transform: "translateZ(25px)" }} className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="section-padding min-h-screen flex flex-col justify-center perspective-1000">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">Featured Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of projects that demonstrate my passion for building exceptional digital experiences.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};
