"use client";

import { useEffect, useSyncExternalStore } from "react";

const CONSENT_KEY = "bakamo_consent";
const CONSENT_CHANGE_EVENT = "bakamo_consent_change";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function loadGTM() {
  if (!GTM_ID || typeof window === "undefined") return;
  if (document.querySelector(`script[src*="${GTM_ID}"]`)) return;

  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

function getConsentSnapshot() {
  return localStorage.getItem(CONSENT_KEY) ?? "unset";
}

function getServerConsentSnapshot() {
  return "loading";
}

function notifyConsentChanged() {
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const visible = consent === "unset";

  useEffect(() => {
    if (consent === "accepted") {
      loadGTM();
    }
  }, [consent]);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    notifyConsentChanged();
    loadGTM();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    notifyConsentChanged();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6"
    >
      <div
        className="mx-auto max-w-5xl rounded-[1.25rem] border border-white/10 px-6 py-5 shadow-[0_-8px_40px_rgba(0,0,0,0.5)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,20,20,0.97), rgba(10,10,10,0.99))",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-light leading-relaxed text-text-secondary max-w-2xl">
            We use analytics cookies to understand how visitors use our site —
            no advertising, no third-party sharing.{" "}
            <a
              href="/privacy"
              className="text-accent underline-offset-2 hover:underline"
            >
              Privacy policy
            </a>
            .
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={decline}
              className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.16em] text-text-secondary transition-colors hover:border-white/30 hover:text-white"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="cta-button text-xs"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
