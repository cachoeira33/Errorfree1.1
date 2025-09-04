import React from 'react';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ErrorFree 24/7?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, reliable, and secure IT support you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">DBS Checked</h3>
            <p className="text-gray-600">All technicians are DBS checked and fully insured</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
            <p className="text-gray-600">Microsoft, Apple, and CompTIA certified technicians</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1000+ Happy Customers</h3>
            <p className="text-gray-600">Serving homes and businesses across London & Liverpool</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Public Liability</h3>
            <p className="text-gray-600">£2M public liability insurance for your peace of mind</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Trusted & Secure</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-lg mb-2">
                <span className="font-bold text-lg">STRIPE</span>
              </div>
              <p className="text-sm text-gray-600">Secure Payments</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white p-4 rounded-lg mb-2">
                <span className="font-bold text-lg">SSL</span>
              </div>
              <p className="text-sm text-gray-600">256-bit Encryption</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white p-4 rounded-lg mb-2">
                <span className="font-bold text-lg">GDPR</span>
              </div>
              <p className="text-sm text-gray-600">Data Compliant</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white p-4 rounded-lg mb-2">
                <span className="font-bold text-lg">PCI DSS</span>
              </div>
              <p className="text-sm text-gray-600">Payment Secure</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <p className="text-gray-600">Problem Resolution Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
            <p className="text-gray-600">Average Customer Rating</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">{'< 15min'}</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TrustSection;