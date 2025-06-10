// lib/gtag.js
export const GA_TRACKING_ID = 'G-E7HPXT48K2';

// Log page views
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
