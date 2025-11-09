import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "PHP", level: "Intermediate" },
    { name: "Node Js", level: "Basic" },
    { name: "Python", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
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
            <h3 className="text-2xl font-semibold mb-8 text-center">Frontend developer</h3>
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
            <h3 className="text-2xl font-semibold mb-8 text-center">Backend developer</h3>
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
