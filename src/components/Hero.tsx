import { Button } from "@/components/ui/button";
import { Download, MapPin, Sparkles, Star } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import heroCustomer from "@/assets/hero-customer.jpg";
import heroOwner from "@/assets/hero-owner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-32 min-h-screen flex items-center">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in">
          <div className="glass-panel px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white/80">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>#1 Rated Salon App</span>
          </div>
          <div className="glass-panel px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span>50+ Cities</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="block text-white mb-2">Elevate Your</span>
            <span className="text-gold">Salon Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            The premium platform connecting discerning clients with elite salons. effortless booking, exceptional style.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-black hover:bg-white hover:text-black h-14 px-8 rounded-full text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              disabled={!PLAY_STORE_URL}
            >
              {PLAY_STORE_URL ? (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get on Android
                </a>
              ) : (
                <span className="flex items-center opacity-70">
                  <Download className="mr-2 h-5 w-5" />
                  Android Coming Soon
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Split hero images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-scale-in mt-20" style={{ animationDelay: "0.3s" }}>
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
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-smooth z-10"></div>
            <img
              src={heroCustomer}
              alt="Customer Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 z-20">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">For Clients</h3>
                <p className="text-white/80">Discover and book top-tier salons instantly.</p>
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
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-smooth z-10"></div>
            <img
              src={heroOwner}
              alt="Salon Owner Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 z-20">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">For Partners</h3>
                <p className="text-white/80">Manage your salon with premium tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
