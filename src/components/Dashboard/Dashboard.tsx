import React, { useState, useEffect } from 'react';
import { User, CreditCard, Package, LogOut, Crown, Star, Shield } from 'lucide-react';
import { useAuth } from '../Auth/AuthProvider';
import { supabase } from '../../lib/supabase';
import { stripeProducts, getProductByPriceId } from '../../stripe-config';

interface Subscription {
  customer_id: string;
  subscription_id: string | null;
  subscription_status: string;
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

interface Order {
  customer_id: string;
  order_id: number;
  checkout_session_id: string;
  payment_intent_id: string;
  amount_subtotal: number;
  amount_total: number;
  currency: string;
  payment_status: string;
  order_status: string;
  order_date: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      // Fetch subscription data
      const { data: subData, error: subError } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      if (subError) {
        console.error('Error fetching subscription:', subError);
      } else {
        setSubscription(subData);
      }

      // Fetch orders data
      const { data: ordersData, error: ordersError } = await supabase
        .from('stripe_user_orders')
        .select('*')
        .order('order_date', { ascending: false });

      if (ordersError) {
        console.error('Error fetching orders:', ordersError);
      } else {
        setOrders(ordersData || []);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSubscriptionPlan = () => {
    if (!subscription?.price_id) return null;
    return getProductByPriceId(subscription.price_id);
  };

  const formatDate = (timestamp: number | string) => {
    const date = typeof timestamp === 'number' ? new Date(timestamp * 1000) : new Date(timestamp);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount / 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'canceled':
        return 'text-red-600 bg-red-100';
      case 'past_due':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPlanIcon = (planName: string) => {
    if (planName.includes('Gold')) return <Crown className="w-5 h-5 text-yellow-600" />;
    if (planName.includes('Silver')) return <Star className="w-5 h-5 text-gray-600" />;
    if (planName.includes('Bronze')) return <Shield className="w-5 h-5 text-amber-600" />;
    return <Package className="w-5 h-5 text-blue-600" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const currentPlan = getSubscriptionPlan();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ErrorFree 24/7</h1>
                <p className="text-sm text-gray-600">Dashboard</p>
              </div>
            </div>
            <button
              onClick={signOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Manage your IT support services and subscriptions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Subscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                Current Subscription
              </h3>
              
              {currentPlan && subscription ? (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getPlanIcon(currentPlan.name)}
                      <h4 className="text-xl font-bold text-gray-900">{currentPlan.name}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(subscription.subscription_status)}`}>
                      {subscription.subscription_status}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{currentPlan.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Monthly Price:</p>
                      <p className="font-semibold text-gray-900">£{currentPlan.price.toFixed(2)}</p>
                    </div>
                    {subscription.current_period_end && (
                      <div>
                        <p className="text-gray-600">Next Billing:</p>
                        <p className="font-semibold text-gray-900">{formatDate(subscription.current_period_end)}</p>
                      </div>
                    )}
                    {subscription.payment_method_brand && subscription.payment_method_last4 && (
                      <div>
                        <p className="text-gray-600">Payment Method:</p>
                        <p className="font-semibold text-gray-900">
                          {subscription.payment_method_brand.toUpperCase()} •••• {subscription.payment_method_last4}
                        </p>
                      </div>
                    )}
                    {subscription.cancel_at_period_end && (
                      <div>
                        <p className="text-red-600 font-medium">Cancels at period end</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Active Subscription</h4>
                  <p className="text-gray-600 mb-4">Subscribe to a business plan for ongoing IT support</p>
                  <a
                    href="#business"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Crown className="w-5 h-5" />
                    <span>View Business Plans</span>
                  </a>
                </div>
              )}
            </div>

            {/* Order History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Package className="w-6 h-6 mr-3 text-blue-600" />
                Order History
              </h3>
              
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => {
                    const product = getProductByPriceId(order.payment_intent_id); // This might need adjustment based on your data structure
                    return (
                      <div key={order.order_id} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">Order #{order.order_id}</h4>
                            <p className="text-sm text-gray-600">{formatDate(order.order_date)}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.order_status === 'completed' ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100'
                          }`}>
                            {order.order_status}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-600">Amount:</p>
                            <p className="font-semibold text-gray-900">{formatAmount(order.amount_total, order.currency)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600">Payment:</p>
                            <p className="font-semibold text-gray-900">{order.payment_status}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Orders Yet</h4>
                  <p className="text-gray-600">Your order history will appear here after your first purchase</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Profile */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Profile
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <p className="font-medium text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member since:</p>
                  <p className="font-medium text-gray-900">
                    {user?.created_at ? formatDate(user.created_at) : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:07745432478"
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors"
                >
                  <span>🚨 Emergency Support</span>
                </a>
                <a
                  href="https://wa.me/4407745432478"
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors"
                >
                  <span>💬 WhatsApp Chat</span>
                </a>
                <a
                  href="mailto:support@errorfree247.co.uk"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <span>📧 Email Support</span>
                </a>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Need Help?</h3>
              <p className="text-blue-800 text-sm mb-4">
                Our support team is available 24/7 to help with any questions about your services or account.
              </p>
              <div className="space-y-2 text-sm text-blue-700">
                <p>📞 Phone: 07745432478</p>
                <p>📧 Email: support@errorfree247.co.uk</p>
                <p>💬 WhatsApp: Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;