import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold gradient-text">Vishal Bagda</h2>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {["about", "portfolio", "services"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary smooth-transition capitalize"
              >
                {item === "portfolio" ? "Projects" : item}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center hover:bg-primary smooth-transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center hover:bg-primary smooth-transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center hover:bg-primary smooth-transition"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Vishal Bagda. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
