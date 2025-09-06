import { supabase } from './supabase';
import { BookingData } from '../types/booking';

export const createBooking = async (bookingData: Omit<BookingData, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error creating booking:', error);
    return { data: null, error };
  }
};

export const updateBookingStatus = async (bookingId: string, status: BookingData['status'], stripeSessionId?: string) => {
  try {
    const updateData: any = { 
      status,
      updated_at: new Date().toISOString()
    };
    
    if (stripeSessionId) {
      updateData.stripe_session_id = stripeSessionId;
    }

    const { data, error } = await supabase
      .from('bookings')
      .update(updateData)
      .eq('id', bookingId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating booking status:', error);
    return { data: null, error };
  }
};

export const getBookingByStripeSession = async (stripeSessionId: string) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('stripe_session_id', stripeSessionId)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching booking by stripe session:', error);
    return { data: null, error };
  }
};

export const getUserBookings = async (userEmail: string) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('customer_email', userEmail)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return { data: null, error };
  }
};