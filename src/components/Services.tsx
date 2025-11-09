import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Layout, Code, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "web",
      icon: Layout,
      title: "Full Stack Development",
      details: [
        "Build responsive web applications using React.js and Node.js.",
        "Design and implement RESTful APIs.",
        "Database design with MongoDB and MySQL.",
        "Modern UI development with Tailwind CSS.",
        "Version control and collaboration using Git.",
      ],
    },
    {
      id: "uiux",
      icon: Code,
      title: "Data Analytics",
      details: [
        "Data cleaning and transformation.",
        "Interactive dashboard creation with Power BI.",
        "Data visualization and trend analysis.",
        "Business intelligence reporting.",
        "Data modeling for decision-making.",
      ],
    },
    {
      id: "branding",
      icon: Palette,
      title: "Cybersecurity",
      details: [
        "Identity and Access Management (IAM).",
        "Security risk analysis and assessment.",
        "Policy-based access control implementation.",
        "Security documentation and compliance.",
        "Cyber defense strategy development.",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground">What i offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="glass p-8 hover-lift">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0"
                  onClick={() => setSelectedService(service.id)}
                >
                  View More <ArrowRight className="ml-2" size={18} />
                </Button>
              </Card>
            );
          })}
        </div>

        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="glass">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {services.find((s) => s.id === selectedService)?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-muted-foreground mb-6">
                Services with more than 3 years of experience. Providing quality work to clients and companies.
              </p>
              <div className="space-y-4">
                {services
                  .find((s) => s.id === selectedService)
                  ?.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <p className="text-sm">{detail}</p>
                    </div>
                  ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
