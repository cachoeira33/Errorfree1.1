import { loadStripe } from '@stripe/stripe-js';

// Get Stripe publishable key from environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.warn('Stripe publishable key not found. Please add VITE_STRIPE_PUBLISHABLE_KEY to your environment variables.');
}

// Initialize Stripe
const stripePromise = loadStripe(stripePublishableKey || 'pk_test_demo');

export default stripePromise;

// Utility functions for Stripe integration
export const isStripeConfigured = () => {
  return !!stripePublishableKey && stripePublishableKey !== 'pk_test_demo';
};

export const getStripePublishableKey = () => {
  return stripePublishableKey;
};

// Test card numbers for development
export const TEST_CARDS = {
  VISA_SUCCESS: '4242424242424242',
  VISA_DECLINED: '4000000000000002',
  MASTERCARD_SUCCESS: '5555555555554444',
  AMEX_SUCCESS: '378282246310005',
  VISA_3D_SECURE: '4000000000003220'
};

// Common Stripe error messages
export const STRIPE_ERROR_MESSAGES = {
  card_declined: 'Your card was declined. Please try a different payment method.',
  expired_card: 'Your card has expired. Please use a different card.',
  incorrect_cvc: 'Your card\'s security code is incorrect.',
  processing_error: 'An error occurred while processing your card. Please try again.',
  incorrect_number: 'Your card number is incorrect.',
  incomplete_number: 'Your card number is incomplete.',
  incomplete_cvc: 'Your card\'s security code is incomplete.',
  incomplete_expiry: 'Your card\'s expiration date is incomplete.'
};