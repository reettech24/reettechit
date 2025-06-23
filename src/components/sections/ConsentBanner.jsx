"use client";

import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tracking-consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("tracking-consent", "granted");
    setShowBanner(false);
    location.reload(); // Reload to load scripts
  };

  const handleDecline = () => {
    localStorage.setItem("tracking-consent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-gray-800 text-white p-4 md:p-5 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      <span className="text-sm md:text-base">
        We use cookies to improve your experience. Do you accept tracking cookies?
      </span>
      <div className="flex space-x-3">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
