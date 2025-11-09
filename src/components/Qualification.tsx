import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const education = [
    {
      title: "Web Design",
      subtitle: "Spain - Institute",
      period: "2021 - Present",
    },
    {
      title: "Web Development",
      subtitle: "Spain - Institute",
      period: "2018 - 2020",
    },
  ];

  const experience = [
    {
      title: "Art Director",
      subtitle: "Spain - Institute",
      period: "2020 - 2021",
    },
    {
      title: "UX Expert",
      subtitle: "Spain - Institute",
      period: "2017 - 2018",
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
            className={activeTab === "education" ? "bg-gradient-to-r from-primary to-secondary" : ""}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap className="mr-2" size={20} />
            Education
          </Button>
          <Button
            variant={activeTab === "experience" ? "default" : "ghost"}
            className={activeTab === "experience" ? "bg-gradient-to-r from-primary to-secondary" : ""}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase className="mr-2" size={20} />
            Experience
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex gap-8 items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <Card className={`glass p-6 flex-1 ${index % 2 === 0 ? "text-right" : ""}`}>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-3">{item.subtitle}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                </Card>

                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

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
