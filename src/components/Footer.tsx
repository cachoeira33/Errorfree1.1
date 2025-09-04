import React from 'react';
import { Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ErrorFree 24/7</h3>
                <p className="text-gray-400 text-sm">IT Solutions Anytime. Anywhere.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional IT support for homes and businesses across London & Liverpool. 
              DBS-checked technicians, 24/7 availability, 100% secure payments.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/security" className="hover:text-blue-400 transition-colors">Security Systems</Link></li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Coverage Areas</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-white mb-2">London</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>Central London</li>
                  <li>North & South London</li>
                  <li>East & West London</li>
                  <li>All London Zones</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Liverpool</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>City Centre</li>
                  <li>Wirral</li>
                  <li>Knowsley</li>
                  <li>Surrounding Areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">24/7 Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">London Emergency</p>
                  <a href="tel:07745432478" className="text-blue-400 hover:underline">07745432478</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">Liverpool Emergency</p>
                  <a href="tel:07745432478" className="text-green-400 hover:underline">0151 765 4321</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Email Support</p>
                  <a href="mailto:support@errorfree247.co.uk" className="text-blue-400 hover:underline">support@errorfree247.co.uk</a>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-6 p-4 bg-red-600 rounded-xl">
              <p className="text-white font-semibold text-sm mb-2">🚨 IT Emergency?</p>
              <a
                href="tel:07745432478"
                className="block text-center bg-white text-red-600 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Call Now!
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 ErrorFree 24/7. All rights reserved. | Company No: 12345678
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
              <Link to="/complaints" className="hover:text-blue-400 transition-colors">Complaints</Link>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Professional IT Support Services | DBS Checked | Public Liability Insured | GDPR Compliant
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;