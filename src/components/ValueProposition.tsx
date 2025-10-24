import { Search, Calendar, Star, Heart, Bell, CreditCard, BarChart3, Users, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ValueProposition = () => {
  const customerBenefits = [
    { icon: Search, text: "Discover salons near you with real reviews" },
    { icon: Calendar, text: "Book appointments instantly - anytime, anywhere" },
    { icon: Star, text: "View ratings, services, and pricing upfront" },
    { icon: Heart, text: "Save your favorite salons for quick rebooking" },
    { icon: Bell, text: "Get real-time booking confirmations" },
    { icon: CreditCard, text: "Transparent pricing - no hidden fees" },
  ];

  const ownerBenefits = [
    { icon: BarChart3, text: "Smart dashboard with real-time analytics" },
    { icon: Calendar, text: "Automated booking management" },
    { icon: Users, text: "Manage multiple staff members & services" },
    { icon: DollarSign, text: "Track revenue and performance metrics" },
    { icon: Clock, text: "Flexible scheduling with opening hours control" },
    { icon: Bell, text: "Mobile-first management on the go" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Customer Section */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Find & Book Your Style</h2>
              </div>
              
              <div className="space-y-4">
                {customerBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-light/50 transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Owner Section */}
          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-smooth hover:shadow-lg">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Grow Your Salon Business</h2>
              </div>
              
              <div className="space-y-4">
                {ownerBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/10 transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <benefit.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
