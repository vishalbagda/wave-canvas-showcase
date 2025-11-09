import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      subtitle: "Sandip University, Nashik, Maharashtra",
      period: "2023 - May 2026",
      description: "CGPA: 7.65",
    },
  ];

  const experience = [
    {
      title: "Cybersecurity Analyst",
      subtitle: "Tata Consultancy Services (Virtual)",
      period: "Nov 2024",
      description: "IAM, Security Analysis, Compliance",
    },
    {
      title: "Data Analytics Intern",
      subtitle: "VOIS for Tech Program (Remote)",
      period: "Jul 2024 - Aug 2024",
      description: "Power BI, Data Visualization, Business Intelligence",
    },
  ];

  const data = activeTab === "education" ? education : experience;

  return (
    <section id="qualification" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Qualification</h2>
          <p className="text-muted-foreground">My personal journey</p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <Button
            variant={activeTab === "education" ? "default" : "ghost"}
            className={activeTab === "education" ? "glass-strong bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20" : "glass border-primary/10"}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap className="mr-2" size={20} />
            Education
          </Button>
          <Button
            variant={activeTab === "experience" ? "default" : "ghost"}
            className={activeTab === "experience" ? "glass-strong bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20" : "glass border-primary/10"}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase className="mr-2" size={20} />
            Experience
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />
          
          <div className="space-y-12">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex gap-8 items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <Card className={`glass-strong p-6 flex-1 border-primary/10 shadow-lg hover-lift ${index % 2 === 0 ? "text-right" : ""}`}>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h3>
                  <p className="text-muted-foreground mb-2">{item.subtitle}</p>
                  {item.description && (
                    <p className="text-sm text-primary mb-3 font-semibold">{item.description}</p>
                  )}
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "justify-end" : ""}`}>
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                </Card>

                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background shadow-lg shadow-primary/30 z-10" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
