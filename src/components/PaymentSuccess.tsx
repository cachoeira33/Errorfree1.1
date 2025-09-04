import React from 'react';
import { CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

interface PaymentSuccessProps {
  bookingReference: string;
  bookingData: any;
  amount: number;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ bookingReference, bookingData, amount }) => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-600">
          Your IT support booking has been confirmed
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Details</h2>
        
        <div className="grid gap-4 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Booking Reference:</span>
            <span className="font-semibold text-gray-900">{bookingReference}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Service:</span>
            <span className="font-semibold text-gray-900">{bookingData.service}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Date & Time:</span>
            <span className="font-semibold text-gray-900">{bookingData.date} {bookingData.time}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Location:</span>
            <span className="font-semibold text-gray-900">{bookingData.postcode}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Contact:</span>
            <span className="font-semibold text-gray-900">{bookingData.name}</span>
          </div>
          <div className="flex justify-between py-2 font-semibold text-lg">
            <span className="text-gray-900">Amount Paid:</span>
            <span className="text-green-600">£{amount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-blue-900 mb-4">What happens next?</h3>
        <ul className="space-y-3 text-blue-800">
          <li className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Confirmation email sent to {bookingData.email}</span>
          </li>
          <li className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>SMS confirmation sent to {bookingData.phone}</span>
          </li>
          <li className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Technician will contact you 30 minutes before arrival</span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Need to make changes to your booking?
        </p>
        <a
          href="tel:07745432478"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call 07745432478</span>
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;