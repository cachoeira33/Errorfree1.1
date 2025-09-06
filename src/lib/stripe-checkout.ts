interface CreateCheckoutSessionParams {
  service_name: string;
  service_price: number;
  booking_id: string;
  customer_email: string;
  success_url: string;
  cancel_url: string;
}

export const createStripeCheckoutSession = async (params: CreateCheckoutSessionParams) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_name: params.service_name,
        service_price: params.service_price,
        booking_id: params.booking_id,
        customer_email: params.customer_email,
        success_url: params.success_url,
        cancel_url: params.cancel_url,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    return { url: data.url, error: null };
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return { 
      url: null, 
      error: error instanceof Error ? error.message : 'Failed to create checkout session' 
    };
  }
};