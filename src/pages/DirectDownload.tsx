import { useEffect } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";

export const DirectDownload = () => {
  useEffect(() => {
    // Detect platform
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Determine which store URL to use
    let storeUrl = APP_STORE_URL; // Default to App Store

    if (isAndroid && PLAY_STORE_URL) {
      storeUrl = PLAY_STORE_URL;
    }

    // Redirect immediately
    window.location.href = storeUrl;
  }, []);

  // Fallback UI (shouldn't be visible as redirect happens immediately)
  return null;
};
