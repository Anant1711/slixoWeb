import { Button } from "@/components/ui/button";
import { Smartphone, Store, Download } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import appMockup from "@/assets/mockup.png";

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 max-w-7xl mx-auto border border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center md:text-left animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to <span className="text-gold">Transform</span> Your Experience?
              </h2>
              <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
                Download Slixo now and step into the future of salon bookings. Whether you're a client or a partner, excellence awaits.
              </p>

              {/* Download Buttons */}
              <div className="mb-12">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-black hover:bg-white hover:text-black h-14 px-8 rounded-full text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Slixo on the Apple App Store"
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
                        aria-label="Get Slixo on Google Play"
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

              {/* Features for both audiences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white text-lg">For Clients</h3>
                    <p className="text-sm text-muted-foreground">Instant access to elite salons.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white text-lg">For Partners</h3>
                    <p className="text-sm text-muted-foreground">Seamless business management.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: App Mockup */}
            <div className="flex justify-center animate-scale-in relative" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"></div>
              <img
                src={appMockup}
                alt="Slixo App Interface"
                className="relative w-72 md:w-76 drop-shadow-2xl animate-float z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
