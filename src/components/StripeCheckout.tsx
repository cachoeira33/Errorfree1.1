import React, { useState } from 'react';
import { CreditCard, Lock, Loader } from 'lucide-react';
import { StripeProduct } from '../stripe-config';

interface StripeCheckoutProps {
  product: StripeProduct;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ product, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // For demo purposes, simulate a successful checkout
      // In production, this would integrate with your Stripe backend
      
      console.log('Processing checkout for:', product.name);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful checkout
      alert(`Thank you for your interest in ${product.name}! 
      
Please contact us to complete your purchase:
📞 Phone: 07745432478
📧 Email: support@errorfree247.co.uk
💬 WhatsApp: 07745432478

We'll process your ${product.mode === 'subscription' ? 'subscription' : 'payment'} and get you set up immediately.`);
      
      onSuccess?.();
    } catch (error: any) {
      console.error('Checkout error:', error);
      onError?.(error.message || 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5" />
          <span>
            {product.mode === 'subscription' 
              ? `Subscribe for £${product.price}/month` 
              : `Pay £${product.price}`
            }
          </span>
          <Lock className="w-4 h-4" />
        </>
      )}
    </button>
  );
};

export default StripeCheckout;