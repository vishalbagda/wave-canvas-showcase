import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">My introduction</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="glass p-8 text-center hover-lift">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">5+ Years Working</p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">Completed</h3>
            <p className="text-muted-foreground">50+ Projects</p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-muted-foreground">24/7 Online</p>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate visual designer with expertise in creating beautiful and functional digital experiences. 
            With over 5 years of experience, I've helped numerous clients bring their visions to life through 
            thoughtful design and meticulous attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
