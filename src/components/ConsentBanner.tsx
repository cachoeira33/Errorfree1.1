import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield } from 'lucide-react';

interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const ConsentBanner: React.FC<ConsentBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ga-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ga-consent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('ga-consent', 'declined');
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-4 flex-1">
            <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies and analytics to improve your experience and understand how our website is used. 
                This helps us provide better service and optimize our booking system. You can change your preferences at any time.
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs text-gray-500">GDPR Compliant • Secure • No Personal Data Sold</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;