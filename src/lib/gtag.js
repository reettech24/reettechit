// lib/gtag.js
export const GA_TRACKING_ID = 'G-E7HPXT48K2';

// Log page views safely
export const pageview = (url) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  } else {
    // Optional: log to console or do nothing
    console.warn("Google Analytics not initialized or user did not consent.");
  }
};


// Track GA events safely
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
