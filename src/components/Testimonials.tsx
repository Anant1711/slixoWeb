import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Client",
      avatar: "👩🏻",
      text: "Booking my salon appointments has never been easier. I love seeing real-time availability!",
      rating: 5,
    },
    {
      name: "Raj K.",
      role: "Salon Partner",
      avatar: "👨🏾",
      text: "Slixo transformed how I manage my salon. The dashboard gives me everything I need at a glance.",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Stylist",
      avatar: "👩🏽",
      text: "My bookings are organized and I can focus on what I do best - making clients happy!",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Voices of <span className="text-gold">Satisfaction</span></h2>
          <p className="text-xl text-muted-foreground font-light">Join thousands of satisfied clients and partners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-panel border-none hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2"
            >
              <CardContent className="pt-10 pb-8 px-8 relative">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/90 mb-8 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
