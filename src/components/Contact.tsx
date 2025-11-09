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
            <h3 className="text-2xl font-semibold mb-8">Talk to me</h3>
            
            <Card className="glass p-6 hover-lift">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground mb-4">vishalbagda84@gmail.com</p>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0"
                onClick={() => window.location.href = 'mailto:vishalbagda84@gmail.com'}
              >
                Write me <Send className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="glass p-6 hover-lift">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-muted-foreground mb-4">(+91) 99247-73326</p>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0"
                onClick={() => window.location.href = 'tel:+919924773326'}
              >
                Call me <Send className="ml-2" size={16} />
              </Button>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Write me your project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <Input placeholder="Insert your name" className="glass" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mail</label>
                <Input type="email" placeholder="Insert your email" className="glass" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Project</label>
                <Textarea
                  placeholder="Write your project"
                  className="glass min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
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
