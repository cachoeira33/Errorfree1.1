// Mock API endpoint for demonstration
// In production, this would be handled by your backend server

export const createPaymentIntent = async (amount: number, currency: string = 'gbp', bookingData: any) => {
  // This is a mock implementation
  // In production, you would call your backend API endpoint
  
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to pence
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
    throw error;
  }
};

export const confirmBooking = async (paymentIntentId: string, bookingData: any) => {
  // This would typically send booking confirmation to your backend
  // and trigger email/SMS notifications
  
  try {
    const response = await fetch('/api/confirm-booking', {
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
    throw error;
  }
};