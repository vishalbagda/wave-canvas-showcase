import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground text-sm glass-strong mt-20">
        <p>© {new Date().getFullYear()} Portfolio. Crafted with passion.</p>
      </footer>
    </Layout>
  );
};

export default Index;
