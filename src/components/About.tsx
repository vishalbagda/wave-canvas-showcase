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
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">BSc Computer Science</p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Internships</h3>
            <p className="text-muted-foreground">Data Analytics & Cybersecurity</p>
          </Card>

          <Card className="glass p-8 text-center hover-lift">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-muted-foreground">Full Stack Applications</p>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science student at Sandip University (CGPA: 7.65) with hands-on experience in full-stack development, 
            data analytics, and cybersecurity. I've completed internships at VOIS for Tech Program and Tata Consultancy Services, 
            working on data visualization, security analysis, and building scalable web applications using modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
