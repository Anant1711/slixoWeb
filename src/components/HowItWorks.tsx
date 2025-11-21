import { useState, useEffect } from "react";
import { Search, Calendar, Sparkles, FileText, Settings, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const [active, setActive] = useState<string>("customers");

  const customerSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Explore elite salons",
      detail: "Curated selection of the finest establishments in your vicinity.",
    },
    {
      icon: Calendar,
      title: "Reserve",
      description: "Secure your moment",
      detail: "Seamless booking for your preferred services and stylists.",
    },
    {
      icon: Sparkles,
      title: "Experience",
      description: "Indulge in luxury",
      detail: "Arrive and enjoy a premium service tailored to you.",
    },
  ];

  const ownerSteps = [
    {
      icon: FileText,
      title: "Join",
      description: "Partner with excellence",
      detail: "Create your salon's digital presence on our premium platform.",
    },
    {
      icon: Settings,
      title: "Configure",
      description: "Tailor your offering",
      detail: "Set your premium services, pricing, and availability.",
    },
    {
      icon: TrendingUp,
      title: "Thrive",
      description: "Elevate your business",
      detail: "Access high-value clients and powerful management tools.",
    },
  ];

  // Listen for external triggers from other components (e.g., Hero)
  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<string>;
      if (ev && (ev.detail === "customers" || ev.detail === "owners")) {
        setActive(ev.detail);
      }
    };

    window.addEventListener("slixo:howitworks", handler as EventListener);
    return () => window.removeEventListener("slixo:howitworks", handler as EventListener);
  }, []);

  return (
    <section id="how-it-works" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-gold">Slixo</span> Journey</h2>
          <p className="text-xl text-muted-foreground font-light">Effortless steps to perfection</p>
        </div>

        <Tabs value={active} onValueChange={(v) => setActive(v)} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-white/5 p-1 rounded-full border border-white/10">
            <TabsTrigger
              value="customers"
              className="rounded-full text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-300"
            >
              For Clients
            </TabsTrigger>
            <TabsTrigger
              value="owners"
              className="rounded-full text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-300"
            >
              For Partners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customers" className="animate-fade-in focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              {customerSteps.map((step, index) => (
                <Card
                  key={index}
                  className="glass-panel border-none relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="pt-12 pb-10 px-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-primary/50">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-primary font-medium mb-4">{step.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="owners" className="animate-fade-in focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              {ownerSteps.map((step, index) => (
                <Card
                  key={index}
                  className="glass-panel border-none relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="pt-12 pb-10 px-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-primary/50">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-primary font-medium mb-4">{step.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
