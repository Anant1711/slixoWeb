import { MapPin, Zap, Star, Palette, Users, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Discovery",
      description: "Find elite salons near you with precision.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Real-Time Booking",
      description: "Instant confirmation for your preferred slots.",
      color: "secondary",
    },
    {
      icon: Star,
      title: "Verified Excellence",
      description: "Curated ratings from authentic experiences.",
      color: "accent",
    },
    {
      icon: Palette,
      title: "Premium Services",
      description: "From styling to spa, access the best.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Expert Stylists",
      description: "Choose your professional by portfolio.",
      color: "secondary",
    },
    {
      icon: Lock,
      title: "Secure Platform",
      description: "Enterprise-grade security for your data.",
      color: "accent",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold">Excellence</span> in Every Detail
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Designed for those who demand the best in beauty and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-panel border-none hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2"
            >
              <CardContent className="pt-8 pb-8 px-8">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
