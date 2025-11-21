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
    <section id="features" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Customer Section */}
          <Card className="glass-panel border-none hover:bg-white/10 transition-all duration-500 group">
            <CardContent className="pt-10 pb-8 px-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-white">Find & Book Your Style</h2>
              </div>

              <div className="space-y-4">
                {customerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground font-medium">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Owner Section */}
          <Card className="glass-panel border-none hover:bg-white/10 transition-all duration-500 group">
            <CardContent className="pt-10 pb-8 px-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Grow Your Salon Business</h2>
              </div>

              <div className="space-y-4">
                {ownerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <benefit.icon className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="text-sm text-muted-foreground font-medium">{benefit.text}</p>
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
