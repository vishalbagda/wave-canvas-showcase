import { Button } from "@/components/ui/button";
import { Linkedin, Github, Code, ChevronDown } from "lucide-react";
import heroProfile from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Social icons */}
        <div className="hidden md:flex flex-col gap-6 absolute left-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
            <Github size={24} />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
            <Code size={24} />
          </a>
        </div>

        {/* Center - Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-bold">
              Vishal Bagda <span className="wave">👋</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-2xl text-muted-foreground">Full Stack Developer</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-md">
            Computer Science student at Sandip University with expertise in full-stack development, data analytics, and cybersecurity. Passionate about building innovative solutions.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-8"
            onClick={() => scrollToSection("contact")}
          >
            Say Hello ✈️
          </Button>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden water-effect">
              <img
                src={heroProfile}
                alt="Vishal Bagda Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary smooth-transition animate-bounce"
      >
        <span className="text-sm">Scroll down</span>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
