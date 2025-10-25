import { useState, useEffect } from "react";
import { Search, Calendar, Sparkles, FileText, Settings, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const [active, setActive] = useState<string>("customers");

  const customerSteps = [
    {
      icon: Search,
      title: "Search",
      description: "Browse salons near you",
      detail: "Use our location-based search to discover top-rated salons in your area with real customer reviews.",
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Choose service, date, and time",
      detail: "Select from available services, pick your preferred stylist, and book your perfect time slot.",
    },
    {
      icon: Sparkles,
      title: "Enjoy",
      description: "Get your perfect look",
      detail: "Show up to your appointment and enjoy a seamless salon experience. Leave a review to help others!",
    },
  ];

  const ownerSteps = [
    {
      icon: FileText,
      title: "Register",
      description: "Create your salon profile",
      detail: "Sign up and create your salon profile with photos, services, and location details.",
    },
    {
      icon: Settings,
      title: "Setup",
      description: "Add services, staff, and hours",
      detail: "Configure your services, add team members, set pricing, and define your working hours.",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Accept bookings and manage business",
      detail: "Start receiving bookings 24/7, manage your schedule, and watch your business grow with analytics.",
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
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Simple steps to get started</p>
        </div>

  <Tabs value={active} onValueChange={(v) => setActive(v)} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="customers" className="text-lg">For Customers</TabsTrigger>
            <TabsTrigger value="owners" className="text-lg">For Salon Owners</TabsTrigger>
          </TabsList>

          <TabsContent value="customers" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              {customerSteps.map((step, index) => (
                <Card 
                  key={index}
                  className="relative border-2 hover:border-primary/40 transition-smooth hover:shadow-lg"
                >
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <CardContent className="pt-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-sm">{step.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="owners" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              {ownerSteps.map((step, index) => (
                <Card 
                  key={index}
                  className="relative border-2 hover:border-secondary/40 transition-smooth hover:shadow-lg"
                >
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <CardContent className="pt-10">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-sm">{step.detail}</p>
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
