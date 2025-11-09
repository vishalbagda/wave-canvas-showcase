import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Gym Reservation Bot",
      category: "automation",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Python, Selenium, Google Cloud Console",
    },
    {
      id: 2,
      title: "Ticket Price Calculator App",
      category: "app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      description: "Java, Android Studio",
    },
    {
      id: 3,
      title: "Transaction Management GUI",
      category: "app",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      description: "Java, JavaFX, Eclipse",
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Power BI, Data Visualization",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "automation", label: "Automation" },
    { id: "app", label: "Applications" },
    { id: "analytics", label: "Analytics" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground">Most recent work</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "default" : "outline"}
              className={filter === f.id ? "glass-strong bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20" : "glass border-primary/10"}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-strong overflow-hidden hover-lift group border-primary/10 shadow-lg">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6 glass-strong">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 font-semibold">
                  View Details <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
