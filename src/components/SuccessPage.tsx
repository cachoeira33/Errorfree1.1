import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Download, Mail } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { trackPurchase } from '../lib/analytics';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  
  const sessionId = searchParams.get('session_id');
  const success = searchParams.get('success');

  useEffect(() => {
    if (success === 'true') {
      // Track successful purchase
      trackPurchase(
        sessionId || `order_${Date.now()}`,
        'GBP',
        0, // Amount would come from your order data
        []
      );

      // Set page title
      document.title = 'Payment Successful - ErrorFree 24/7';
    }
  }, [success, sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for choosing ErrorFree 24/7 for your IT support needs
          </p>
          
          {sessionId && (
            <div className="bg-blue-50 rounded-xl p-4 inline-block">
              <p className="text-sm text-blue-800 font-medium">
                Order Reference: <span className="text-lg font-bold text-blue-900">{sessionId}</span>
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* What's Next */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                    <p className="text-gray-600">You'll receive a detailed confirmation email within 5 minutes with all your service details and next steps.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Activation</h3>
                    <p className="text-gray-600">For subscriptions, your service is now active. For one-time services, our team will contact you to schedule your appointment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Support Access</h3>
                    <p className="text-gray-600">You now have access to our 24/7 support channels. Check your dashboard for service details and contact information.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Need Immediate Support?</h3>
              <p className="text-blue-800 mb-6">
                Our 24/7 support team is ready to help you with any questions or technical issues.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="tel:07745432478"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold"
                >
                  <span>🚨 Emergency: 07745432478</span>
                </a>
                <a
                  href="https://wa.me/4407745432478"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                >
                  <span>💬 WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/dashboard"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  <span>View Dashboard</span>
                </Link>
                
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                
                <a
                  href="mailto:support@errorfree247.co.uk"
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">You Might Also Need</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">Computer Upgrades</p>
                  <p className="text-xs text-gray-600">SSD & RAM upgrades from £149</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">Smart Home Setup</p>
                  <p className="text-xs text-gray-600">Professional installation</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">Business Plans</p>
                  <p className="text-xs text-gray-600">Monthly IT support from £199</p>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-2">30-Day Guarantee</h3>
              <p className="text-green-800 text-sm">
                All our services come with a 30-day satisfaction guarantee. If you're not completely satisfied, we'll make it right.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;