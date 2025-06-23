"use client";

import Script from "next/script";

export default function TrackingScripts() {
  const consent = typeof window !== "undefined" &&
    localStorage.getItem("tracking-consent") === "granted";

  if (!consent) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E7HPXT48K2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E7HPXT48K2');
        `}
      </Script>

      {/* LinkedIn Insight */}
      <Script id="linkedin-insight-init" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8489889";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script
        id="linkedin-insight-lib"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />
    </>
  );
}
