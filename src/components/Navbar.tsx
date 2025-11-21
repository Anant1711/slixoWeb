import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { APP_STORE_URL } from "@/lib/store-links";
import logo from "@/assets/slixowhite.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src={logo}
              alt="Slixo Logo"
              className="w-10 h-10 object-contain drop-shadow-lg group-hover:scale-110 transition-smooth"
            />
            <span className="text-2xl font-bold text-gold tracking-tight">
              SLIXO
            </span>
          </div>

          {/* Download Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-primary hover:text-black shadow-lg hover:shadow-glow transition-smooth rounded-full px-6 font-medium"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download the Slixo app from the Apple App Store"
            >
              <Download className="mr-2 h-4 w-4" />
              Download App
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
