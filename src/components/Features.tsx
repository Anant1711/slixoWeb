import { MapPin, Zap, Star, Palette, Users, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Discovery",
      description: "Find salons near you with accurate distance calculation",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Real-Time Availability",
      description: "See available time slots and book instantly",
      color: "secondary",
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Read authentic reviews from verified customers",
      color: "accent",
    },
    {
      icon: Palette,
      title: "Service Variety",
      description: "Browse haircuts, styling, spa, and beauty services",
      color: "primary",
    },
    {
      icon: Users,
      title: "Worker Selection",
      description: "Choose your preferred stylist or any available",
      color: "secondary",
    },
    {
      icon: Lock,
      title: "Secure & Simple",
      description: "Email authentication with OTP - safe and hassle-free",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary/10 text-primary hover:bg-primary/20",
      secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
      accent: "bg-accent/10 text-accent hover:bg-accent/20",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a seamless salon booking experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-smooth hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div 
                  className={`w-14 h-14 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4 transition-smooth`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
