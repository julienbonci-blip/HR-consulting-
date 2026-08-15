export const GA_MEASUREMENT_ID = "G-CFD73EPN9M";
export const CONSENT_STORAGE_KEY = "kern-analytics-consent";

export type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function pushToDataLayer(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
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

export function trackEvent(name: string, params?: Record<string, string>) {
  if (getStoredConsent() !== "granted") return;
  pushToDataLayer("event", name, params);
}
