import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/assets/slixo-logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Slixo Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              SLIXO
            </span>
          </div>

          {/* Download Button */}
          <Button 
            size="lg"
            className="gradient-primary text-white shadow-lg hover:shadow-glow transition-smooth"
          >
            <Download className="mr-2 h-5 w-5" />
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
};
