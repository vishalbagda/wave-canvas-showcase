import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass ${
        isScrolled ? "py-4 shadow-lg" : "py-6"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-text">Vishal Bagda</h1>
        
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "skills", "services", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-primary smooth-transition capitalize font-semibold"
            >
              {item}
            </button>
          ))}
        </div>

        <Button
          variant="default"
          className="hidden md:block glass-strong border-primary/20 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/20"
          onClick={() => scrollToSection("contact")}
        >
          Hire Me
        </Button>
      </nav>
    </header>
  );
};

export default Header;
