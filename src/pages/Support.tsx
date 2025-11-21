import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Support() {

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-primary transition-smooth group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact & <span className="text-gold">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            We're here to help! Get in touch with us for any questions or support.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          {/* Direct Contact */}
          <Card className="glass-panel border-none animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Mail className="w-5 h-5 text-primary" />
                Email Us Directly
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Prefer to use your own email client?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/5">
                <p className="text-sm text-muted-foreground mb-2">Support Email</p>
                <a
                  href="mailto:slixoapp@gmail.com"
                  className="text-lg font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  slixoapp@gmail.com
                </a>
              </div>
              <Button
                variant="outline"
                className="w-full border-white/10 bg-white/5 text-white hover:bg-primary hover:text-black transition-all duration-300"
                onClick={() => window.location.href = 'mailto:slixoapp@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Open Email Client
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-panel border-none animate-fade-in">
            <CardHeader>
              <CardTitle className="text-white">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within <strong className="text-white">48 hours</strong> during business days.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-panel border-none animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="text-white">Common Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Account & Booking Issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Salon Registration & Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Technical Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Privacy & Data Concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Partnership Inquiries</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* FAQ Quick Links */}
          <Card className="glass-panel border-none bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="text-white">Before You Contact Us</CardTitle>
              <CardDescription className="text-muted-foreground">Check out our other resources that might help</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Link to="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    View FAQ
                  </Button>
                </Link>
                <Link to="/privacy-policy">
                  <Button variant="outline" size="sm" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                    Privacy Policy
                  </Button>
                </Link>
                <Link to="/terms-of-service">
                  <Button variant="outline" size="sm" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                    Terms of Service
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
