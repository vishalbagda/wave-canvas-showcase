import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground text-sm glass-strong mt-20">
        <p>© {new Date().getFullYear()} John Smith. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Index;
