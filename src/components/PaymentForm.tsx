import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, Shield } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  bookingData: any;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError, bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // For demo purposes, simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      const mockPaymentIntentId = `pi_demo_${Date.now()}`;
      setMessage('Payment processed successfully!');
      onSuccess(mockPaymentIntentId);
    } catch (err) {
      setMessage('Network error. Please try again.');
      onError('Network error occurred');
    }

    setIsLoading(false);
  };

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
            layout: 'tabs'
          }}
        />
      </div>

      {message && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{message}</p>
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