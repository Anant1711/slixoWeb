import { Button } from "@/components/ui/button";
import { Download, MapPin, Sparkles } from "lucide-react";
import heroCustomer from "@/assets/hero-customer.jpg";
import heroOwner from "@/assets/hero-owner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-32">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center gap-8 mb-8 text-sm text-muted-foreground animate-fade-in">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>1,000+ happy customers</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>500+ registered salons</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Book Your Perfect Salon Experience in Seconds
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            One app for everyone. Find and book salons instantly as a customer, or manage your salon business seamlessly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-lg hover:shadow-glow transition-smooth hover:scale-105 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Download on App Store
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-background hover:bg-primary-light transition-smooth hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </div>
        </div>

        {/* Split hero images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("slixo:howitworks", { detail: "customers" }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                window.dispatchEvent(new CustomEvent("slixo:howitworks", { detail: "customers" }));
              }
            }}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-smooth group cursor-pointer"
          >
            <img
              src={heroCustomer}
              alt="Happy customer booking salon appointment"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div className="text-foreground">
                <h3 className="text-2xl font-bold mb-2">For Customers</h3>
                <p className="text-sm opacity-90">Find and book your perfect salon experience</p>
              </div>
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("slixo:howitworks", { detail: "owners" }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                window.dispatchEvent(new CustomEvent("slixo:howitworks", { detail: "owners" }));
              }
            }}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-smooth group cursor-pointer"
          >
            <img
              src={heroOwner}
              alt="Salon owner managing bookings"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div className="text-foreground">
                <h3 className="text-2xl font-bold mb-2">For Salon Owners</h3>
                <p className="text-sm opacity-90">Grow your business with smart booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
