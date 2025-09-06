import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, User, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getBookingByStripeSession, updateBookingStatus } from '../lib/bookings';
import { BookingData } from '../types/booking';
import LoadingSpinner from '../components/LoadingSpinner';

const BookingSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const processBookingConfirmation = async () => {
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      try {
        // Get booking by Stripe session ID
        const { data: bookingData, error: fetchError } = await getBookingByStripeSession(sessionId);
        
        if (fetchError || !bookingData) {
          throw new Error('Booking not found');
        }

        // Update booking status to confirmed
        const { data: updatedBooking, error: updateError } = await updateBookingStatus(
          bookingData.id!,
          'confirmed',
          sessionId
        );

        if (updateError) {
          console.error('Failed to update booking status:', updateError);
          // Still show the booking even if status update fails
        }

        setBooking(updatedBooking || bookingData);
      } catch (err) {
        console.error('Error processing booking confirmation:', err);
        setError(err instanceof Error ? err.message : 'Failed to confirm booking');
      } finally {
        setLoading(false);
      }
    };

    processBookingConfirmation();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" color="blue" />
          <p className="mt-4 text-gray-600">Confirming your booking...</p>
        </div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to find your booking'}</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Booking Confirmed - ErrorFree 24/7</title>
        <meta name="description" content="Your booking has been confirmed successfully." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for choosing ErrorFree 24/7
            </p>
            <div className="bg-green-50 rounded-xl p-4 inline-block">
              <p className="text-sm text-green-800 font-medium">
                Booking ID: <span className="text-lg font-bold text-green-900">#{booking.id}</span>
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service</h3>
                    <p className="text-gray-600">{booking.service_name}</p>
                    <p className="text-blue-600 font-semibold">£{booking.service_price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Appointment</h3>
                    <p className="text-gray-600">
                      {new Date(booking.preferred_date).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-600">{booking.preferred_time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Information</h3>
                    <p className="text-gray-600">{booking.customer_name}</p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {booking.customer_email}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      {booking.customer_phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                      <p className="text-gray-600 text-sm">You'll receive a detailed confirmation email within 5 minutes with all booking information.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Technician Assignment</h3>
                      <p className="text-gray-600 text-sm">Our team will assign a certified technician and send you their contact details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pre-Service Contact</h3>
                      <p className="text-gray-600 text-sm">Your technician will contact you 24 hours before the appointment to confirm details.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Need to Make Changes?</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Contact us at least 24 hours before your appointment for any changes or cancellations.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-700">📞 Phone: 07745432478</p>
                  <p className="text-blue-700">📧 Email: support@errorfree247.co.uk</p>
                  <p className="text-blue-700">💬 WhatsApp: Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccessPage;