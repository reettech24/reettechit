// src/app/layout.jsx

import ConsentBanner from "@/components/sections/ConsentBanner";
import "../styles/globals.css";
import Analytics from "./analytics";
import TrackingScripts from "@/components/sections/TrackingScripts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ConsentBanner />
        <TrackingScripts />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
