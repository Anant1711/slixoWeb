import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Support() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const email = formData.get('email') as string;
    
    // Create mailto link with pre-filled subject and body
    const mailtoLink = `mailto:slixoapp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${email}\n\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact & Support</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help! Get in touch with us for any questions or support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form and we'll open your email client with the details pre-filled
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Open Email Client
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact */}
          <div className="space-y-6">
            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Us Directly
                </CardTitle>
                <CardDescription>
                  Prefer to use your own email client?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Support Email</p>
                  <a
                    href="mailto:slixoapp@gmail.com"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    slixoapp@gmail.com
                  </a>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:slixoapp@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Open Email Client
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  We aim to respond to all inquiries within <strong className="text-foreground">48 hours</strong> during business days.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Common Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
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
          </div>
        </div>

        {/* FAQ Quick Links */}
        <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle>Before You Contact Us</CardTitle>
            <CardDescription>Check out our other resources that might help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link to="/#faq">
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </Link>
              <Link to="/privacy-policy">
                <Button variant="outline" size="sm">
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/terms-of-service">
                <Button variant="outline" size="sm">
                  Terms of Service
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
