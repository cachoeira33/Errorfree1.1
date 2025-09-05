import React, { useState, useEffect } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, Shield, AlertCircle } from 'lucide-react';
import { createPaymentIntent } from '../api/stripe';

interface PaymentFormProps {
  amount: number;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  bookingData: any;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError, bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    // Create PaymentIntent as soon as the component loads
    createPaymentIntent(amount, 'gbp', bookingData)
      .then((data) => {
        setClientSecret(data.client_secret);
      })
      .catch((error) => {
        console.error('Error creating payment intent:', error);
        onError('Failed to initialize payment. Please try again.');
      });
  }, [amount, bookingData]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
        redirect: 'if_required'
      });

      if (error) {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setMessage(error.message || 'Payment failed');
          onError(error.message || 'Payment failed');
        } else {
          setMessage('An unexpected error occurred.');
          onError('An unexpected error occurred.');
        }
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setMessage('Payment succeeded!');
        onSuccess(paymentIntent.id);
      }
    } catch (err: any) {
      setMessage('Network error. Please try again.');
      onError('Network error occurred');
    }

    setIsLoading(false);
  };

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Initializing payment...</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2 text-blue-800 mb-2">
          <Shield className="w-5 h-5" />
          <span className="font-semibold">Secure Payment</span>
        </div>
        <p className="text-sm text-blue-700">
          Your payment is protected by 256-bit SSL encryption and processed securely by Stripe.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Details
        </h4>
        <PaymentElement 
          options={{
            layout: 'tabs',
            fields: {
              billingDetails: {
                name: 'auto',
                email: 'auto',
                phone: 'auto',
                address: {
                  country: 'auto',
                  postalCode: 'auto'
                }
              }
            }
          }}
        />
      </div>

      {message && (
        <div className={`rounded-lg p-4 flex items-center space-x-2 ${
          message.includes('succeeded') 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <AlertCircle className={`w-5 h-5 ${
            message.includes('succeeded') ? 'text-green-600' : 'text-red-600'
          }`} />
          <p className={`text-sm ${
            message.includes('succeeded') ? 'text-green-800' : 'text-red-800'
          }`}>
            {message}
          </p>
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4" />
          <span>Secured by Stripe</span>
        </div>
        <div className="font-semibold text-lg text-gray-900">
          Total: £{amount.toFixed(2)}
        </div>
      </div>

      <button
        disabled={isLoading || !stripe || !elements}
        className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Lock className="w-5 h-5" />
            <span>Pay £{amount.toFixed(2)} Securely</span>
          </>
        )}
      </button>

      <div className="text-center">
        <p className="text-xs text-gray-600">
          By completing this payment, you agree to our Terms of Service and Privacy Policy.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
              VISA
            </div>
            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
              MC
            </div>
            <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
              AMEX
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;