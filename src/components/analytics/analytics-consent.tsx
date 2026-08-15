"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  GA_MEASUREMENT_ID,
  getStoredConsent,
  pushToDataLayer,
  storeConsent,
  type ConsentValue,
} from "@/lib/gtag";

const CONSENT_CHANGE_EVENT = "kern-analytics-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

function getServerSnapshot(): ConsentValue | null {
  return null;
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribe, getStoredConsent, getServerSnapshot);
  const pathname = usePathname();

  useEffect(() => {
    if (consent !== "granted") return;
    pushToDataLayer("js", new Date());
    pushToDataLayer("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;
    pushToDataLayer("event", "page_view", { page_path: pathname });
  }, [pathname, consent]);

  const choose = (value: ConsentValue) => {
    storeConsent(value);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  };

  return (
    <>
      {consent === "granted" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Gestion des cookies"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-mineral bg-paper px-6 py-6 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] sm:px-10"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[64ch] text-sm leading-relaxed text-ink-soft">
              Nous utilisons des cookies de mesure d&apos;audience pour
              comprendre l&apos;usage du site. Ils ne sont déposés qu&apos;avec
              votre accord.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-md border border-mineral px-5 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:border-ink-faint hover:text-ink"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-md bg-olive px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-olive-dark"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
