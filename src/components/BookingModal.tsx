import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CreditCard } from 'lucide-react';
import { ServiceOption } from '../types/booking';
import { createBooking } from '../lib/bookings';
import { createStripeCheckoutSession } from '../lib/stripe-checkout';
import LoadingSpinner from './LoadingSpinner';
import Toast from './Toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceOption;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    preferred_date: '',
    preferred_time: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.customer_name.trim()) {
      newErrors.customer_name = 'Name is required';
    }
    
    if (!formData.customer_email.trim()) {
      newErrors.customer_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customer_email)) {
      newErrors.customer_email = 'Please enter a valid email address';
    }
    
    if (!formData.customer_phone.trim()) {
      newErrors.customer_phone = 'Phone number is required';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.customer_phone)) {
      newErrors.customer_phone = 'Please enter a valid phone number';
    }
    
    if (!formData.preferred_date) {
      newErrors.preferred_date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.preferred_date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferred_date = 'Date cannot be in the past';
      }
    }
    
    if (!formData.preferred_time) {
      newErrors.preferred_time = 'Preferred time is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({ message: 'Please fix the errors below', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      // Create booking in Supabase
      const bookingData = {
        service_name: service.name,
        service_price: service.price,
        status: 'pending' as const,
        ...formData
      };

      const { data: booking, error: bookingError } = await createBooking(bookingData);
      
      if (bookingError || !booking) {
        throw new Error('Failed to create booking');
      }

      // Create Stripe checkout session
      const { url, error: stripeError } = await createStripeCheckoutSession({
        service_name: service.name,
        service_price: service.price,
        booking_id: booking.id,
        customer_email: formData.customer_email,
        success_url: `${window.location.origin}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/booking-cancelled`
      });

      if (stripeError || !url) {
        throw new Error('Failed to create payment session');
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
      
    } catch (error) {
      console.error('Booking error:', error);
      setToast({ 
        message: error instanceof Error ? error.message : 'Failed to process booking', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book {service.name}</h2>
            <p className="text-gray-600">£{service.price.toFixed(2)}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Service Description */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-semibold text-blue-900 mb-2">{service.name}</h3>
            <p className="text-blue-800 text-sm">{service.description}</p>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Your Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.customer_name}
                onChange={(e) => handleInputChange('customer_name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.customer_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Smith"
                disabled={loading}
              />
              {errors.customer_name && (
                <p className="text-red-600 text-sm mt-1">{errors.customer_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.customer_email}
                onChange={(e) => handleInputChange('customer_email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.customer_email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
                disabled={loading}
              />
              {errors.customer_email && (
                <p className="text-red-600 text-sm mt-1">{errors.customer_email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.customer_phone}
                onChange={(e) => handleInputChange('customer_phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.customer_phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="07700 123456"
                disabled={loading}
              />
              {errors.customer_phone && (
                <p className="text-red-600 text-sm mt-1">{errors.customer_phone}</p>
              )}
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Appointment Details
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => handleInputChange('preferred_date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.preferred_date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={loading}
                />
                {errors.preferred_date && (
                  <p className="text-red-600 text-sm mt-1">{errors.preferred_date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Preferred Time *
                </label>
                <select
                  value={formData.preferred_time}
                  onChange={(e) => handleInputChange('preferred_time', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.preferred_time ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={loading}
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                {errors.preferred_time && (
                  <p className="text-red-600 text-sm mt-1">{errors.preferred_time}</p>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{service.name}</span>
              <span className="font-semibold text-gray-900">£{service.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <LoadingSpinner size="sm" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Payment</span>
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            You will be redirected to Stripe for secure payment processing
          </p>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default BookingModal;