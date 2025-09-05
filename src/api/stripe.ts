// Stripe API functions for ErrorFree 24/7

export const createPaymentIntent = async (amount: number, currency: string = 'gbp', bookingData: any) => {
  try {
    // In a production environment, this would call your backend API
    // For now, we'll use the Supabase edge function or a mock response
    
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    
    const response = await fetch(`${apiUrl}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to pence
        currency,
        booking_data: bookingData,
        metadata: {
          service: bookingData.service,
          customer_name: bookingData.name,
          customer_email: bookingData.email,
          customer_phone: bookingData.phone,
          postcode: bookingData.postcode
        }
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating payment intent:', error);
    
    // Fallback for demo purposes - return a mock client secret
    // In production, this should always call your backend
    return {
      client_secret: `pi_demo_${Date.now()}_secret_demo`,
      error: 'Demo mode - payment processing disabled'
    };
  }
};

export const confirmBooking = async (paymentIntentId: string, bookingData: any) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    
    const response = await fetch(`${apiUrl}/confirm-booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_intent_id: paymentIntentId,
        booking_data: bookingData
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to confirm booking');
    }

    return await response.json();
  } catch (error) {
    console.error('Error confirming booking:', error);
    
    // Fallback for demo purposes
    return {
      success: true,
      booking_reference: `EF${Date.now().toString().slice(-6)}`,
      message: 'Booking confirmed successfully (demo mode)'
    };
  }
};

// Utility function to format currency
export const formatCurrency = (amount: number, currency: string = 'GBP') => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount);
};

// Utility function to validate card details
export const validateCardDetails = (cardNumber: string, expiryDate: string, cvc: string) => {
  const errors: string[] = [];
  
  // Basic card number validation (Luhn algorithm would be better)
  if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
    errors.push('Please enter a valid card number');
  }
  
  // Expiry date validation
  if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
    errors.push('Please enter a valid expiry date (MM/YY)');
  }
  
  // CVC validation
  if (!cvc || cvc.length < 3) {
    errors.push('Please enter a valid CVC');
  }
  
  return errors;
};