import { Button } from "@/components/ui/button";
import { Smartphone, Store } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import appMockup from "@/assets/app-mockup.png";

export const CTA = () => {
  return (
    <section className="py-20 gradient-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Download Slixo now and experience the future of salon bookings - whether you're a customer or salon owner
            </p>

            {/* Download Buttons */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Slixo on the Apple App Store"
                  >
                    Download on App Store
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg disabled:opacity-60"
                  disabled={!PLAY_STORE_URL}
                >
                  {PLAY_STORE_URL ? (
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get Slixo on Google Play"
                    >
                      Get it on Google Play
                    </a>
                  ) : (
                    <span>Coming Soon on Google Play</span>
                  )}
                </Button>
              </div>
            </div>

            {/* Features for both audiences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Smartphone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">For Customers</h3>
                  <p className="text-sm text-white/80">Find and book salons instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Store className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">For Salon Owners</h3>
                  <p className="text-sm text-white/80">Manage your business seamlessly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: App Mockup */}
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
              <img 
                src={appMockup} 
                alt="Slixo App Interface" 
                className="relative w-72 md:w-96 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
