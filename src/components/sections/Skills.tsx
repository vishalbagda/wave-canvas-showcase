import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const SkillGroup = ({ title, skills }: { title: string, skills: { name: string, level: string }[] }) => (
    <div className="glass-card p-8 rounded-3xl hover-lift">
        <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
        <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex gap-3">
                    <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                    <div>
                        <h4 className="font-medium leading-none mb-1">{skill.name}</h4>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const Skills = () => {
    return (
        <section id="skills" className="section-padding min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
                <p className="text-muted-foreground">My technical level</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SkillGroup
                        title="Frontend developer"
                        skills={[
                            { name: "HTML", level: "Basic" },
                            { name: "CSS", level: "Advanced" },
                            { name: "JavaScript", level: "Intermediate" },
                            { name: "Bootstrap", level: "Intermediate" },
                            { name: "Git", level: "Intermediate" },
                            { name: "React", level: "Intermediate" },
                        ]}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <SkillGroup
                        title="Backend developer"
                        skills={[
                            { name: "PHP", level: "Intermediate" },
                            { name: "Node Js", level: "Basic" },
                            { name: "Python", level: "Intermediate" },
                            { name: "MySQL", level: "Intermediate" },
                            { name: "Firebase", level: "Intermediate" },
                            { name: "SQL", level: "Intermediate" },
                        ]}
                    />
                </motion.div>
            </div>
        </section>
    );
};
