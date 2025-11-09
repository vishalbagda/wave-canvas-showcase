import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "HTML/CSS", level: "Advanced" },
    { name: "Tailwind", level: "Advanced" },
    { name: "Git", level: "Intermediate" },
    { name: "RESTful APIs", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C/C++", level: "Intermediate" },
    { name: "MongoDB", level: "Advanced" },
    { name: "MySQL", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">My technical level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="glass p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Backend & Languages</h3>
            <div className="grid grid-cols-2 gap-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
