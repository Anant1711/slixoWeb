import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import { MoveRight, Smartphone, Store } from "lucide-react";

const Download = () => {
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera; // eslint-disable-line @typescript-eslint/no-explicit-any

        // Android detection
        if (/android/i.test(userAgent)) {
            if (PLAY_STORE_URL) {
                setRedirecting(true);
                window.location.href = PLAY_STORE_URL;
            }
        }

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) { // eslint-disable-line @typescript-eslint/no-explicit-any
            if (APP_STORE_URL) {
                setRedirecting(true);
                window.location.href = APP_STORE_URL;
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">Get Slixo</h1>
                    <p className="text-muted-foreground">The best way to book your salon appointments.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{redirecting ? "Redirecting..." : "Download App"}</CardTitle>
                        <CardDescription>
                            {redirecting
                                ? "Taking you to the store..."
                                : "Choose your platform to download the app."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!redirecting && (
                            <>
                                <Button
                                    className="w-full h-14 text-lg justify-between"
                                    variant="outline"
                                    onClick={() => {
                                        if (APP_STORE_URL) window.location.href = APP_STORE_URL;
                                    }}
                                >
                                    <span className="flex items-center gap-2">
                                        <Store className="h-6 w-6" />
                                        App Store (iOS)
                                    </span>
                                    <MoveRight className="h-5 w-5" />
                                </Button>

                                <Button
                                    className="w-full h-14 text-lg justify-between"
                                    variant="outline"
                                    onClick={() => {
                                        if (PLAY_STORE_URL) window.location.href = PLAY_STORE_URL;
                                    }}
                                    disabled={!PLAY_STORE_URL}
                                >
                                    <span className="flex items-center gap-2">
                                        <Smartphone className="h-6 w-6" />
                                        Play Store (Android)
                                    </span>
                                    {PLAY_STORE_URL ? (
                                        <MoveRight className="h-5 w-5" />
                                    ) : (
                                        <span className="text-xs text-muted-foreground">Coming Soon</span>
                                    )}
                                </Button>
                            </>
                        )}
                        {redirecting && (
                            <div className="flex justify-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Download;
