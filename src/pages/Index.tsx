import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
