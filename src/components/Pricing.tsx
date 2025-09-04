import React from 'react';
import { Clock, Home, Monitor, CheckCircle } from 'lucide-react';
import StripeCheckout from './StripeCheckout';
import { stripeProducts } from '../stripe-config';

const Pricing = () => {
  const pricingCards = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Remote Support",
      description: "Quick diagnosis and fixes from anywhere",
      pricing: [
        { service: "Initial Diagnosis", price: "£59", duration: "up to 1 hour" },
        { service: "Ongoing Support", price: "£30", duration: "per 30 minutes" }
      ],
      features: [
        "Screen sharing support",
        "Software troubleshooting", 
        "Virus removal",
        "System optimization",
        "Email setup"
      ],
      popular: false
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "On-Site Visit",
      description: "Professional technician at your location",
      pricing: [
        { service: "Day Call-out", price: "£89", duration: "7AM - 8PM" },
        { service: "Night/Weekend", price: "£129", duration: "8PM - 7AM" },
        { service: "Hourly Rate", price: "£79", duration: "per hour" }
      ],
      features: [
        "Hardware installation",
        "Network setup",
        "Smart home installation",
        "TV mounting",
        "Complete system setup"
      ],
      popular: true
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "Upgrades & Parts",
      description: "Hardware upgrades with installation",
      pricing: [
        { service: "SSD 1TB Upgrade", price: "£199", duration: "inc. installation" },
        { service: "RAM 16GB Upgrade", price: "£149", duration: "inc. installation" }
      ],
      features: [
        "Performance guarantee",
        "Quality components",
        "Professional installation",
        "Data migration included",
        "30-day warranty"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No surprises. Just professional IT support at fair prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${card.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
              {card.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-6">
                {card.icon}
                <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-8">{card.description}</p>
              
              <div className="space-y-4 mb-8">
                {card.pricing.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{item.service}</p>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{item.price}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-8">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${card.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Secure Payments</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">STRIPE</span>
                </div>
                <span className="text-gray-600">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SSL</span>
                </div>
                <span className="text-gray-600">Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GDPR</span>
                </div>
                <span className="text-gray-600">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;