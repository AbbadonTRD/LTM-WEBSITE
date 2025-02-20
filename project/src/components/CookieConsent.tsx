'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CTAButton } from './CTAButton';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (all: boolean) => {
    localStorage.setItem('cookieConsent', all ? 'all' : 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed bottom-0 inset-x-0 z-50 p-4"
      >
        {/* 3D Card Effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background blur and gradient */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl" />
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-purple-500/20" />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(145, 94, 255, 0.2), transparent)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 2s infinite',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative p-6 text-white">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-w-3xl">
              <h3 className="text-xl font-bold mb-4">
                🍪 Ihre Privatsphäre ist uns wichtig
              </h3>
              
              <p className="text-gray-300 mb-4">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                Gemäss dem Schweizer Datenschutzgesetz (DSG) benötigen wir Ihre Einwilligung.
              </p>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-[#915EFF] hover:text-purple-400 transition-colors mb-4"
              >
                {showDetails ? 'Details ausblenden' : 'Details anzeigen'}
              </button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-4"
                  >
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>
                        <strong>Notwendige Cookies:</strong> Diese sind für die Grundfunktionen der Website erforderlich.
                      </p>
                      <p>
                        <strong>Analyse-Cookies:</strong> Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                      </p>
                      <p>
                        <strong>Marketing-Cookies:</strong> Ermöglichen uns, Ihnen personalisierte Werbung anzuzeigen.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton onClick={() => handleAccept(true)}>
                  Alle akzeptieren
                </CTAButton>
                <CTAButton primary={false} onClick={() => handleAccept(false)}>
                  Nur notwendige Cookies
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export { CookieConsent };