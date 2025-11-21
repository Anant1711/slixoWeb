import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Search, Calendar, User, CheckCircle, Smartphone, Store, Settings, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APP_STORE_URL } from "@/lib/store-links";

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState("customers");

    const customerSteps = [
        {
            icon: User,
            title: "Create Your Account",
            description: "Sign up in seconds using your email or social accounts. Create your profile to skip waiting lines.",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            icon: MapPin,
            title: "Enable Location",
            description: "Allow Slixo to access your location to find the finest salons and spas right in your neighborhood.",
            color: "text-primary", // Changed from text-gold to text-primary for visibility
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            icon: Search,
            title: "Discover Salons",
            description: "Browse through our curated list of premium salons. Filter by services, ratings, and distance to find your perfect match.",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20"
        },
        {
            icon: Calendar,
            title: "Book Instantly",
            description: "Select your preferred date, time, and stylist. Confirm your booking instantly.",
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20"
        },
        {
            icon: CheckCircle,
            title: "Enjoy the Experience",
            description: "Arrive at the salon and enjoy your premium service. No waiting, no hassles.",
            color: "text-pink-400",
            bg: "bg-pink-400/10",
            border: "border-pink-400/20"
        }
    ];

    const partnerSteps = [
        {
            icon: Store,
            title: "Register Your Salon",
            description: "Sign up as a partner and create your salon's digital profile. It takes less than 5 minutes.",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            icon: Settings,
            title: "Set Up Services",
            description: "Add your service menu, pricing, and stylist profiles. Customize your availability.",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            icon: CheckCircle,
            title: "Go Live",
            description: "Publish your profile and become visible to thousands of potential clients in your area.",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20"
        },
        {
            icon: Calendar,
            title: "Manage Bookings",
            description: "Receive instant booking notifications. Manage your schedule effortlessly through our dashboard.",
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20"
        },
        {
            icon: TrendingUp,
            title: "Grow Your Business",
            description: "Track your earnings, view analytics, and build a loyal customer base with our marketing tools.",
            color: "text-pink-400",
            bg: "bg-pink-400/10",
            border: "border-pink-400/20"
        }
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-primary transition-smooth group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        How <span className="text-gold">Slixo</span> Works
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        Whether you're looking for style or running the show, we've made it simple.
                    </p>
                </div>

                <Tabs defaultValue="customers" onValueChange={setActiveTab} className="w-full">
                    <div className="flex justify-center mb-16">
                        <TabsList className="bg-white/5 p-1 rounded-full border border-white/10">
                            <TabsTrigger
                                value="customers"
                                className="rounded-full px-8 py-3 text-lg data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-300"
                            >
                                For Customers
                            </TabsTrigger>
                            <TabsTrigger
                                value="partners"
                                className="rounded-full px-8 py-3 text-lg data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-300"
                            >
                                For Partners
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="customers" className="animate-fade-in focus-visible:outline-none">
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-24 relative">
                                {customerSteps.map((step, index) => (
                                    <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>

                                        {/* Content Side */}
                                        <div className="flex-1 w-full md:w-1/2">
                                            <Card className={`glass-panel border-none hover:bg-white/10 transition-all duration-500 group transform hover:-translate-y-1`}>
                                                <CardContent className="p-8">
                                                    <div className={`w-12 h-12 rounded-full ${step.bg} ${step.border} border flex items-center justify-center mb-6`}>
                                                        <step.icon className={`w-6 h-6 ${step.color}`} />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Center Marker (Desktop) */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-glow">
                                            <span className="text-gold font-bold text-lg">{index + 1}</span>
                                        </div>

                                        {/* Empty Side for Layout Balance */}
                                        <div className="hidden md:block flex-1 w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="partners" className="animate-fade-in focus-visible:outline-none">
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-24 relative">
                                {partnerSteps.map((step, index) => (
                                    <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>

                                        {/* Content Side */}
                                        <div className="flex-1 w-full md:w-1/2">
                                            <Card className={`glass-panel border-none hover:bg-white/10 transition-all duration-500 group transform hover:-translate-y-1`}>
                                                <CardContent className="p-8">
                                                    <div className={`w-12 h-12 rounded-full ${step.bg} ${step.border} border flex items-center justify-center mb-6`}>
                                                        <step.icon className={`w-6 h-6 ${step.color}`} />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Center Marker (Desktop) */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-glow">
                                            <span className="text-gold font-bold text-lg">{index + 1}</span>
                                        </div>

                                        {/* Empty Side for Layout Balance */}
                                        <div className="hidden md:block flex-1 w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* CTA Section */}
                <div className="mt-32 text-center animate-fade-in">
                    <div className="glass-panel border-none p-12 rounded-2xl max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <Smartphone className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {activeTab === 'customers' ? 'Ready to Experience Slixo?' : 'Ready to Grow Your Business?'}
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            {activeTab === 'customers'
                                ? 'Download the app now and discover the best salons in your area.'
                                : 'Join our network of premium salons and start reaching more clients today.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                                    Download for iOS
                                </a>
                            </Button>
                            <Button
                                disabled
                                className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300 opacity-50 cursor-not-allowed"
                            >
                                Download for Android (Coming Soon)
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
