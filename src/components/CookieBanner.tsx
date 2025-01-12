'use client';

import { useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Speichere die Zustimmung in den Local Storage
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  // Überprüfe, ob der Cookie-Banner bereits akzeptiert wurde
  if (!isVisible || localStorage.getItem('cookiesAccepted') === 'true') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.{' '}
          <a href="/datenschutz" className="underline text-blue-400 hover:text-blue-600">
            Mehr erfahren
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}