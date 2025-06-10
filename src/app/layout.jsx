// src/app/layout.jsx
import Script from "next/script";
import "../styles/globals.css";
import Analytics from "./analytics";
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-E7HPXT48K2`}
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
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
