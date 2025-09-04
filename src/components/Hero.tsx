import React from 'react';
import { Phone, MessageSquare, Calendar, Clock, Shield, CheckCircle } from 'lucide-react';
import { trackEmergencyCall, trackWhatsAppClick } from '../lib/analytics';

interface HeroProps {
  onBookNow: () => void;
  hasAnalyticsConsent?: boolean | null;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, hasAnalyticsConsent }) => {
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IT Emergency?
                <span className="block text-blue-600">Remote diagnosis in 15 min</span>
                <span className="block text-3xl lg:text-4xl text-gray-700">On-site within 1h</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Call-out £89 day / £129 night • Remote diagnosis £59
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>DBS-checked</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Public Liability</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>100% Secure Payments</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07745432478"
                onClick={handleEmergencyCall}
                className="flex items-center justify-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now - 07745432478</span>
              </a>
              
              <button
                onClick={onBookNow}
                className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Online</span>
              </button>

              <a
                href="https://wa.me/4407745432478"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Covering London & Liverpool</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-800">London Areas:</p>
                  <p>Central, North, South, East, West</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Liverpool Areas:</p>
                  <p>City Centre, Wirral, Knowsley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold">24/7</span>
                </div>
                <p className="text-lg text-gray-700 font-medium">Professional IT Technician</p>
                <p className="text-gray-600">Ready to solve your IT problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;