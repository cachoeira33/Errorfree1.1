import React, { useEffect } from 'react';
import { CheckCircle, Phone, Mail, Calendar, Download, Share2, MapPin, Clock, CreditCard, User } from 'lucide-react';
import { trackPurchase, trackConversionGoal } from '../lib/analytics';

interface PaymentConfirmationProps {
  bookingReference: string;
  bookingData: {
    service: string;
    urgency: string;
    date: string;
    time: string;
    address: string;
    postcode: string;
    name: string;
    phone: string;
    email: string;
    description?: string;
  };
  amount: number;
  paymentMethod: string;
  onBackToHome: () => void;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({ 
  bookingReference, 
  bookingData, 
  amount, 
  paymentMethod,
  onBackToHome 
}) => {
  useEffect(() => {
    // Track purchase event for GA4
    const serviceNames = {
      'emergency': 'Emergency Support',
      'remote': 'Remote Diagnosis',
      'onsite': 'On-site Visit',
      'upgrade': 'Computer Upgrade',
      'smarthome': 'Smart Home Setup',
      'website': 'Premium Website'
    };

    const serviceName = serviceNames[bookingData.service as keyof typeof serviceNames] || bookingData.service;

    // GA4 Purchase Event
    trackPurchase(bookingReference, 'GBP', amount, [{
      item_id: bookingData.service,
      item_name: serviceName,
      item_category: 'IT Service',
      quantity: 1,
      price: amount
    }]);

    // Track conversion goal
    trackConversionGoal('booking_completed', amount);

    // Set page title
    document.title = 'Booking Confirmed - ErrorFree 24/7';
  }, [bookingReference, bookingData, amount]);

  const getServiceName = (serviceId: string) => {
    const serviceNames = {
      'emergency': 'Emergency Support',
      'remote': 'Remote Diagnosis', 
      'onsite': 'On-site Visit',
      'upgrade': 'Computer Upgrade',
      'smarthome': 'Smart Home Setup',
      'website': 'Premium Website'
    };
    return serviceNames[serviceId as keyof typeof serviceNames] || serviceId;
  };

  const getUrgencyName = (urgencyId: string) => {
    const urgencyNames = {
      'emergency': 'Emergency (within 1 hour)',
      'urgent': 'Urgent (same day)',
      'standard': 'Standard (next working day)',
      'flexible': 'Flexible (within 3 days)'
    };
    return urgencyNames[urgencyId as keyof typeof urgencyNames] || urgencyId;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ErrorFree 24/7 - Booking Confirmed',
          text: `My IT support booking has been confirmed. Reference: ${bookingReference}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-2">
            Your IT support booking has been confirmed
          </p>
          <div className="bg-blue-50 rounded-xl p-4 inline-block">
            <p className="text-sm text-blue-800 font-medium">
              Booking Reference: <span className="text-2xl font-bold text-blue-900">{bookingReference}</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                Order Summary
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{getServiceName(bookingData.service)}</p>
                    <p className="text-sm text-gray-600">{getUrgencyName(bookingData.urgency)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">£{amount.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">GBP</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-gray-900">{paymentMethod}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 font-bold text-lg">
                  <span className="text-gray-900">Total Paid:</span>
                  <span className="text-green-600">£{amount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                Booking Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Date & Time</p>
                      <p className="text-gray-600">{bookingData.date}</p>
                      <p className="text-gray-600">{bookingData.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{bookingData.address}</p>
                      <p className="text-gray-600">{bookingData.postcode}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Contact Information</p>
                      <p className="text-gray-600">{bookingData.name}</p>
                      <p className="text-gray-600">{bookingData.phone}</p>
                      <p className="text-gray-600">{bookingData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {bookingData.description && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">Problem Description</p>
                  <p className="text-gray-600 bg-gray-50 rounded-lg p-4">{bookingData.description}</p>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Immediate Confirmation</h3>
                    <p className="text-gray-600">You'll receive email and SMS confirmations within 5 minutes containing all booking details and our technician's contact information.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technician Assignment</h3>
                    <p className="text-gray-600">Our dispatch team will assign a certified technician to your case and send you their profile and estimated arrival time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pre-Arrival Contact</h3>
                    <p className="text-gray-600">Your technician will call you 30 minutes before arrival to confirm the appointment and discuss any specific requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Completion</h3>
                    <p className="text-gray-600">After completing the work, you'll receive a detailed service report and invoice. All work comes with our 30-day guarantee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents & Information */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Documents You'll Receive</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">Email Confirmation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">SMS Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">Technician Profile</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">Payment Receipt</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">Service Report</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800 font-medium">Warranty Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Print Confirmation</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-100 text-blue-700 py-3 px-4 rounded-xl hover:bg-blue-200 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Booking</span>
                </button>
                
                <button
                  onClick={onBackToHome}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  Back to Home
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-900 mb-4">🚨 Need Changes?</h3>
              <p className="text-red-800 text-sm mb-4">
                Need to modify your booking or have an urgent question?
              </p>
              <div className="space-y-3">
                <a
                  href="tel:07745432478"
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 07745432478</span>
                </a>
                <a
                  href="https://wa.me/4407745432478"
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Related Services */}
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
                If the same problem occurs within 30 days, we'll fix it free of charge. Your satisfaction is guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Your Appointment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ensure someone over 18 is present during the visit</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Have your device passwords ready if needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Clear workspace access for our technician</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Backup important data (we'll help if needed)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">DBS-checked and insured technicians</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Fixed pricing with no hidden costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">30-day guarantee on all work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Professional service report provided</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;