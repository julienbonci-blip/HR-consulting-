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
  });
}
