import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    customers: [
      { name: "Download App", href: "#" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Find Salons", href: "#" },
      { name: "Support", href: "#" },
    ],
    owners: [
      { name: "Download App", href: "#" },
      { name: "Manage Your Salon", href: "#" },
      { name: "Features", href: "#" },
      { name: "Resources", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Contact Us", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Slixo */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Slixo
            </h3>
            <p className="text-background/80 mb-6 text-sm">
              Where beauty meets convenience. Connecting customers with amazing salons.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-smooth flex items-center justify-center group"
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="font-bold text-lg mb-4">For Customers</h4>
            <ul className="space-y-3">
              {footerLinks.customers.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Salon Owners */}
          <div>
            <h4 className="font-bold text-lg mb-4">For Salon Owners</h4>
            <ul className="space-y-3">
              {footerLinks.owners.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal & Contact</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/60 text-sm flex items-center justify-center gap-2">
            © 2025 Slixo. All rights reserved. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for salon lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
