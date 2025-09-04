import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { trackEmergencyCall, trackWhatsAppClick } from '../lib/analytics';

interface StickyCTAsProps {
  onBookNow: () => void;
  hasAnalyticsConsent?: boolean | null;
}

const StickyCTAs: React.FC<StickyCTAsProps> = ({ onBookNow, hasAnalyticsConsent }) => {
  const handleEmergencyCall = () => {
    if (hasAnalyticsConsent) {
      trackEmergencyCall();
    }
  };

  const handleWhatsAppClick = () => {
    if (hasAnalyticsConsent) {
      trackWhatsAppClick();
    }
  };

  return (
    <>
      {/* Mobile Sticky CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-2xl">
          <div className="flex space-x-2">
            <a
              href="tel:07745432478"
              onClick={handleEmergencyCall}
              className="flex-1 flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">Call</span>
            </a>
            
            <a
              href="https://wa.me/4407745432478"
              onClick={handleWhatsAppClick}
              className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </a>
            
            <button
              onClick={onBookNow}
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Book</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Floating CTAs */}
      <div className="hidden md:block">
        {/* Call Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href="tel:07745432478"
            onClick={handleEmergencyCall}
            className="flex items-center space-x-3 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            <Phone className="w-6 h-6" />
            <span className="font-semibold">Emergency: 07745432478</span>
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 left-6 z-40">
          <a
            href="https://wa.me/4407745432478"
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
        </div>

        {/* Book Button */}
        <div className="fixed bottom-24 right-6 z-40">
          <button
            onClick={onBookNow}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            title="Book Online"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold">Book</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyCTAs;