import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Talk to me</h3>
            
            <Card className="glass-strong p-6 hover-lift border-primary/10 shadow-lg">
              <div className="glass p-3 rounded-full w-fit mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground mb-4 break-all">vishalbagda84@gmail.com</p>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0 font-semibold"
                onClick={() => window.location.href = 'mailto:vishalbagda84@gmail.com'}
              >
                Write me <Send className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="glass-strong p-6 hover-lift border-primary/10 shadow-lg">
              <div className="glass p-3 rounded-full w-fit mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-muted-foreground mb-4">(+91) 99247-73326</p>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0 font-semibold"
                onClick={() => window.location.href = 'tel:+919924773326'}
              >
                Call me <Send className="ml-2" size={16} />
              </Button>
            </Card>
          </div>

          <div className="glass-strong p-8 rounded-lg border-primary/10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Write me your project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-semibold">Name</label>
                <Input placeholder="Insert your name" className="glass-strong border-primary/10" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-semibold">Mail</label>
                <Input type="email" placeholder="Insert your email" className="glass-strong border-primary/10" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-semibold">Project</label>
                <Textarea
                  placeholder="Write your project"
                  className="glass-strong min-h-[150px] border-primary/10"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glass-strong bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/20"
              >
                Send Message <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
