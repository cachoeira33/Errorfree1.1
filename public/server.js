// Simple Express server for handling Stripe payments
// This would typically be deployed separately as your backend API

import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

app.use(cors());
app.use(express.json());

// Create payment intent endpoint
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'gbp', booking_data } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        service: booking_data.service,
        customer_name: booking_data.name,
        customer_email: booking_data.email,
        customer_phone: booking_data.phone,
        postcode: booking_data.postcode,
        urgency: booking_data.urgency,
        date: booking_data.date,
        time: booking_data.time
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      client_secret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: error.message });
  }
});

// Confirm booking endpoint
app.post('/api/confirm-booking', async (req, res) => {
  try {
    const { payment_intent_id, booking_data } = req.body;

    // Here you would typically:
    // 1. Verify the payment was successful with Stripe
    // 2. Save booking to your database
    // 3. Send confirmation emails/SMS
    // 4. Create calendar events for technicians

    console.log('Booking confirmed:', { payment_intent_id, booking_data });

    res.send({
      success: true,
      booking_reference: `EF${Date.now().toString().slice(-6)}`,
      message: 'Booking confirmed successfully'
    });
  } catch (error) {
    console.error('Error confirming booking:', error);
    res.status(500).send({ error: error.message });
  }
});

// Stripe webhook endpoint (for production)
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      // Handle successful payment
      break;
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Payment failed:', failedPayment.id);
      // Handle failed payment
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;