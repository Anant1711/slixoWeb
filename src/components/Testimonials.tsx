import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Customer",
      avatar: "👩🏻",
      text: "Booking my salon appointments has never been easier. I love seeing real-time availability!",
      rating: 5,
    },
    {
      name: "Raj K.",
      role: "Salon Owner",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">Join thousands of satisfied customers and salon owners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-smooth hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
