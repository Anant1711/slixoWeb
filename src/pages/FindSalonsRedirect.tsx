import { useEffect, useState } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import { Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FindSalonsRedirect = () => {
  const [redirecting, setRedirecting] = useState(true);
  const [fallbackReady, setFallbackReady] = useState(false);

  useEffect(() => {
    // Extract salon code from URL path if provided
    // URL format: https://slixoapp.com/#/find-salons or https://slixoapp.com/#/find-salons/YWEW
    const pathMatch = window.location.hash.match(/#\/find-salons(?:\/([A-Z0-9]{4}))?/);
    const salonCode = pathMatch && pathMatch[1] ? pathMatch[1] : '';

    // Construct the deep link URL
    // If salon code provided, include it: slixo://find-salons/YWEW
    // Otherwise just: slixo://find-salons
    const deepLink = salonCode 
      ? `slixo://find-salons/${salonCode}`
      : `slixo://find-salons`;

    console.log('🔗 [REDIRECT] URL hash:', window.location.hash);
    console.log('🔗 [REDIRECT] Extracted salon code:', salonCode);
    console.log('🔗 [REDIRECT] Deep link:', deepLink);

    // Detect platform
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Try to open the app via deep link
    const attemptDeepLink = () => {
      // Create a hidden iframe to attempt the deep link without navigating away
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = deepLink;
      document.body.appendChild(iframe);

      // Set a timeout to show fallback if app doesn't open
      const fallbackTimer = setTimeout(() => {
        setRedirecting(false);
        setFallbackReady(true);
        document.body.removeChild(iframe);
      }, 2500);

      // If the page is hidden (app opened), clear the fallback timer
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(fallbackTimer);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Cleanup
      return () => {
        clearTimeout(fallbackTimer);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      };
    };

    // For iOS, also try using a direct location change approach
    if (isIOS) {
      window.location.href = deepLink;
      setTimeout(() => {
        setRedirecting(false);
        setFallbackReady(true);
      }, 2500);
    } else {
      // For Android and others, use iframe approach
      attemptDeepLink();
    }
  }, []);

  // Helper to get the appropriate store URL
  const getStoreUrl = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      return APP_STORE_URL;
    } else if (isAndroid && PLAY_STORE_URL) {
      return PLAY_STORE_URL;
    } else if (isAndroid && !PLAY_STORE_URL) {
      return APP_STORE_URL;
    }
    return APP_STORE_URL;
  };

  const getPlatformName = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) return "App Store";
    if (isAndroid) return PLAY_STORE_URL ? "Google Play" : "App Store";
    return "App Store";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-xl p-8 text-center border border-border">
        {redirecting ? (
          <>
            <Loader2 className="w-16 h-16 animate-spin mx-auto mb-6 text-primary" />
            <h1 className="text-2xl font-bold mb-3">Opening Slixo App...</h1>
            <p className="text-muted-foreground mb-4">
              Please wait while we redirect you to find salons in the Slixo app.
            </p>
            <p className="text-sm text-muted-foreground">
              If the app doesn't open automatically, you'll be redirected to download it.
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-3">App Not Installed?</h1>
            <p className="text-muted-foreground mb-6">
              It looks like you don't have the Slixo app installed yet. Download it now to find and book salons instantly!
            </p>
            <Button
              asChild
              size="lg"
              className="w-full gradient-primary text-white shadow-lg hover:shadow-glow mb-4"
            >
              <a
                href={getStoreUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download from {getPlatformName()}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full"
            >
              <a href="/">
                Go to Slixo Website
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
