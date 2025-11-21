import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/slixo.official/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/17MgHc5iqr/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/slixoofficial?s=21", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/slixo/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Partners", href: "#" },
    { label: "Contact & Support", href: "/support", internal: true },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy", internal: true },
    { label: "Terms of Service", href: "/terms-of-service", internal: true },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="text-3xl font-bold text-gold tracking-tight">
                SLIXO
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Elevating the salon experience through seamless technology and premium service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get the App */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6">Get the App</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Experience the future of salon bookings. Download Slixo today for iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-primary hover:text-black h-12 px-6 rounded-full font-semibold transition-all duration-300 w-fit"
              >
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Slixo on the Apple App Store"
                >
                  <Download className="mr-2 h-4 w-4" />
                  App Store
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 h-12 px-6 rounded-full backdrop-blur-sm transition-all duration-300 w-fit"
                disabled={!PLAY_STORE_URL}
              >
                {PLAY_STORE_URL ? (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Slixo on Google Play"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Google Play
                  </a>
                ) : (
                  <span className="flex items-center opacity-70">
                    <Download className="mr-2 h-4 w-4" />
                    Android Soon
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Slixo. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            {legalLinks.map((link, index) => (
              <Link key={index} to={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
