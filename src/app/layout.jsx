// src/app/layout.jsx

import ConsentBanner from "@/components/sections/ConsentBanner";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TrackingScripts from "@/components/sections/TrackingScripts";
import { Toaster } from "react-hot-toast";
import AnalyticsGtag from "./analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Toaster position="bottom-right" reverseOrder={false} />
        <ConsentBanner />
        {children}
        <TrackingScripts />
        <AnalyticsGtag />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
