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
    { icon: BookOpen, value: "10,000+", label: "Bookings Completed" },
    { icon: Store, value: "500+", label: "Elite Salons" },
    { icon: Users, value: "1,000+", label: "Happy Clients" },
    { icon: Star, value: "4.8", label: "Average Rating" },
  ];

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
    <section id="stats-section" className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                {stat.value.includes('+') ? (
                  <>
                    <Counter end={parseInt(stat.value.replace(/\D/g, ''))} />
                    {stat.value.replace(/\d/g, '')}
                  </>
                ) : (
                  stat.value
                )}
                {stat.label === "Average Rating" && <span className="text-primary ml-1">★</span>}
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
