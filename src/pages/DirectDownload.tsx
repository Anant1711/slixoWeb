import { useEffect } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";

export const DirectDownload = () => {
  useEffect(() => {
    // Detect platform
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Deep link to open app (without parameters, opens the main app)
    const deepLink = "slixo://";

    // Determine which store URL to use
    let storeUrl = APP_STORE_URL; // Default to App Store

    if (isAndroid && PLAY_STORE_URL) {
      storeUrl = PLAY_STORE_URL;
    }

    // Try to open the app first
    const attemptDeepLink = () => {
      if (isIOS) {
        // For iOS, use direct navigation
        window.location.href = deepLink;
        // After 2.5 seconds, if app didn't open, go to store
        setTimeout(() => {
          window.location.href = storeUrl;
        }, 2500);
      } else {
        // For Android, use iframe approach
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = deepLink;
        document.body.appendChild(iframe);

        // Set a timeout to redirect to store if app doesn't open
        const fallbackTimer = setTimeout(() => {
          window.location.href = storeUrl;
          document.body.removeChild(iframe);
        }, 2500);

        // If the page is hidden (app opened), clear the fallback timer
        const handleVisibilityChange = () => {
          if (document.hidden) {
            clearTimeout(fallbackTimer);
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
          }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
      }
    };

    attemptDeepLink();
  }, []);

  // Fallback UI (shouldn't be visible as redirect happens immediately)
  return null;
};
