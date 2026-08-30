export const GA_MEASUREMENT_ID = "G-CFD73EPN9M";
export const CONSENT_STORAGE_KEY = "kern-analytics-consent";

export type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initGtag() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

// Establishes an explicit Consent Mode baseline on every page load, before
// gtag.js is ever fetched. Without this, the initial analytics_storage
// state is left to Google's own implicit/region defaults instead of ours,
// which can keep hits held back even after we later send consent update.
export function initConsentDefault() {
  if (typeof window === "undefined") return;
  initGtag();
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function storeConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
}

function waitForGtag(callback: () => void, attempt = 0) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    callback();
    return;
  }
  if (attempt >= 50) return;
  window.setTimeout(() => waitForGtag(callback, attempt + 1), 100);
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (getStoredConsent() !== "granted") return;
  waitForGtag(() => {
    window.gtag("event", name, params);
    console.log(`[KERN GA4] ${name} sent`);
  });
}
