import { useEffect, useState } from "react";
import { BookOpen, Store, Users, Star } from "lucide-react";

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { icon: BookOpen, value: "10,000+", label: "Bookings Completed", color: "primary" },
    { icon: Store, value: "500+", label: "Registered Salons", color: "secondary" },
    { icon: Users, value: "1,000+", label: "Happy Customers", color: "accent" },
    { icon: Star, value: "4.8", label: "Average Rating", color: "primary" },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color as keyof typeof colors];
  };

  const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats-section" className="py-20 gradient-hero border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center mx-auto mb-4 ${getColorClasses(stat.color)}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${getColorClasses(stat.color)}`}>
                {stat.value.includes('+') ? (
                  <>
                    <Counter end={parseInt(stat.value.replace(/\D/g, ''))} />
                    {stat.value.replace(/\d/g, '')}
                  </>
                ) : (
                  stat.value
                )}
                {stat.label === "Average Rating" && "★"}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
