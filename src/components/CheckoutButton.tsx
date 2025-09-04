// src/CheckoutButton.tsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton: React.FC = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Chamar o back-end para criar uma sessão de checkout
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    // Redirecionar para o Stripe Checkout
    const { error } = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Pagar com Stripe
    </button>
  );
};

export default CheckoutButton;
