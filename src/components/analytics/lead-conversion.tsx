"use client";

import { useEffect, useRef } from "react";
import {
  GOOGLE_ADS_LEAD_CONVERSION,
  LEAD_SUBMITTED_STORAGE_KEY,
  trackEvent,
} from "@/lib/gtag";

export function LeadConversion() {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    if (window.sessionStorage.getItem(LEAD_SUBMITTED_STORAGE_KEY) !== "true") {
      return;
    }

    // Clear immediately so a refresh of /merci can never re-fire this.
    window.sessionStorage.removeItem(LEAD_SUBMITTED_STORAGE_KEY);
    trackEvent("conversion", { send_to: GOOGLE_ADS_LEAD_CONVERSION });
  }, []);

  return null;
}
