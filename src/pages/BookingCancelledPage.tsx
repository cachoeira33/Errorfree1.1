import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BookingCancelledPage = () => {
  return (
    <>
      <Helmet>
        <title>Booking Cancelled - ErrorFree 24/7</title>
        <meta name="description" content="Your booking was cancelled. You can try again or contact us for assistance." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-16 h-16 text-orange-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Cancelled</h1>
            <p className="text-xl text-gray-600">
              Your booking was cancelled and no payment was processed.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Would You Like to Do?</h2>
            
            <div className="space-y-4">
              <Link
                to="/"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Try Booking Again</span>
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:07745432478"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                
                <a
                  href="https://wa.me/4407745432478"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-blue-800 text-sm mb-4">
              Our support team is available 24/7 to assist you with booking or answer any questions.
            </p>
            <div className="space-y-1 text-sm text-blue-700">
              <p>📞 Emergency: 07745432478</p>
              <p>📧 Email: support@errorfree247.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCancelledPage;