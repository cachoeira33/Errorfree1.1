import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CreditCard, User, Phone, Mail } from 'lucide-react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../lib/stripe';
import PaymentForm from './PaymentForm';
import { trackSelectItem, trackAddToCart, trackBeginCheckout } from '../lib/analytics';
import { sendBookingConfirmation, validateBookingData } from '../api/booking';

interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingConfirmed: (confirmationData: any) => void;
  hasAnalyticsConsent: boolean | null;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ isOpen, onClose, onBookingConfirmed, hasAnalyticsConsent }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    urgency: '',
    date: '',
    time: '',
    address: '',
    postcode: '',
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const [paymentError, setPaymentError] = useState('');

  const services = [
    { id: 'emergency', name: 'Emergency Support', price: 'From £59' },
    { id: 'remote', name: 'Remote Diagnosis', price: '£59' },
    { id: 'onsite', name: 'On-site Visit', price: 'From £89' },
    { id: 'upgrade', name: 'Computer Upgrade', price: 'From £149' },
    { id: 'smarthome', name: 'Smart Home Setup', price: 'Quote' },
    { id: 'website', name: 'Premium Website', price: 'From £1,499' }
  ];

  const urgencyOptions = [
    { id: 'emergency', name: 'Emergency (within 1 hour)', surcharge: '+£40' },
    { id: 'urgent', name: 'Urgent (same day)', surcharge: '+£20' },
    { id: 'standard', name: 'Standard (next working day)', surcharge: '' },
    { id: 'flexible', name: 'Flexible (within 3 days)', surcharge: '-£10' }
  ];

  const calculateAmount = () => {
    const basePrice = formData.service === 'remote' ? 59 : 
                     formData.service === 'emergency' ? 89 : 
                     formData.service === 'onsite' ? 89 :
                     formData.service === 'upgrade' ? 149 :
                     formData.service === 'smarthome' ? 199 :
                     formData.service === 'website' ? 1499 : 89;
    
    const urgencyFee = formData.urgency === 'emergency' ? 40 :
                      formData.urgency === 'urgent' ? 20 :
                      formData.urgency === 'flexible' ? -10 : 0;
    
    return basePrice + urgencyFee;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Track service selection for GA4
    if (field === 'service' && hasAnalyticsConsent) {
      const selectedService = services.find(s => s.id === value);
      if (selectedService) {
        trackSelectItem(value, selectedService.name, 'IT Service', calculateAmount());
      }
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // Track add to cart when proceeding from service selection
  const handleNextFromService = () => {
    if (hasAnalyticsConsent && formData.service) {
      const selectedService = services.find(s => s.id === formData.service);
      if (selectedService) {
        trackAddToCart('GBP', calculateAmount(), [{
          item_id: formData.service,
          item_name: selectedService.name,
          item_category: 'IT Service',
          quantity: 1,
          price: calculateAmount()
        }]);
      }
    }
    nextStep();
  };

  // Track begin checkout when reaching payment step
  const handleBeginCheckout = () => {
    if (hasAnalyticsConsent && formData.service) {
      const selectedService = services.find(s => s.id === formData.service);
      if (selectedService) {
        trackBeginCheckout('GBP', calculateAmount(), [{
          item_id: formData.service,
          item_name: selectedService.name,
          item_category: 'IT Service',
          quantity: 1,
          price: calculateAmount()
        }]);
      }
    }
    nextStep();
  };

  const handlePaymentSuccess = (paymentIntentId: string) => {
    const bookingReference = `EF${Date.now().toString().slice(-6)}`;
    
    // For demo purposes, simulate successful booking
    console.log('Booking confirmed:', {
      reference: bookingReference,
      data: formData,
      amount: calculateAmount()
    });
    
    // Show success message
    alert(`Booking confirmed! Reference: ${bookingReference}
    
We'll contact you within 15 minutes at ${formData.phone} to confirm your appointment.

Emergency contact: 07745432478
Email: support@errorfree247.co.uk`);
    
    const confirmationData = {
      bookingReference,
      bookingData: formData,
      amount: calculateAmount(),
      paymentMethod: 'Card Payment',
      paymentIntentId
    };
    
    onBookingConfirmed(confirmationData);
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
  };
  
  // Validate form data before proceeding to payment
  const validateCurrentStep = () => {
    if (step === 3) {
      const errors = validateBookingData(formData);
      if (errors.length > 0) {
        setPaymentError(errors.join(', '));
        return false;
      }
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book IT Support</h2>
            <p className="text-gray-600">Step {Math.min(step, 4)} of 4</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full ${i <= Math.min(step, 4) ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Select Service</h3>
              <div className="grid gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleInputChange('service', service.id)}
                    className={`p-4 border-2 rounded-xl text-left transition-colors ${
                      formData.service === service.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{service.name}</span>
                      <span className="text-blue-600 font-semibold">{service.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Urgency & Schedule */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">When do you need help?</h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">Urgency Level</h4>
                {urgencyOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleInputChange('urgency', option.id)}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-colors ${
                      formData.urgency === option.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{option.name}</span>
                      <span className={`font-semibold ${option.surcharge.includes('-') ? 'text-green-600' : 'text-red-600'}`}>
                        {option.surcharge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location & Contact */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Contact & Location Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="07700 123456"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Full Address *
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main Street, Area, City"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => handleInputChange('postcode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SW1A 1AA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Problem Description (Optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your IT problem..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Booking Summary</h3>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Service Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span>{services.find(s => s.id === formData.service)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{formData.date} {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>{formData.postcode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact:</span>
                    <span>{formData.name} - {formData.phone}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Estimated Total:</span>
                    <span>£{calculateAmount()}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBeginCheckout}
                disabled={!validateCurrentStep()}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {/* Step 5: Payment */}
          {step === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Secure Payment</h3>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">£{calculateAmount()}</span>
                </div>
              </div>

              {paymentError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{paymentError}</p>
                </div>
              )}

              <Elements stripe={stripePromise}>
                <PaymentForm
                  amount={calculateAmount()}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  bookingData={formData}
                />
              </Elements>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Back
              </button>
            )}
            {step < 4 && (
              <button
                onClick={step === 1 ? handleNextFromService : nextStep}
                disabled={
                  (step === 1 && !formData.service) ||
                  (step === 2 && (!formData.urgency || !formData.date)) ||
                  (step === 3 && (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.postcode))
                }
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;