// src/app/layout.jsx

import ConsentBanner from "@/components/sections/ConsentBanner";
import "../styles/globals.css";
import Analytics from "./analytics";
import TrackingScripts from "@/components/sections/TrackingScripts";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Toaster position="bottom-right" reverseOrder={false} />
        <ConsentBanner />
        <TrackingScripts />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
