export interface BookingData {
  id?: string;
  service_name: string;
  service_price: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  preferred_date: string;
  preferred_time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  stripe_session_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}