import React from 'react';
import { Building, Users, Shield, CheckCircle, Star } from 'lucide-react';
import StripeCheckout from './StripeCheckout';
import { stripeProducts } from '../stripe-config';

const BusinessPlans = () => {
  const plans = [
    {
      name: "Bronze",
      price: "£199",
      period: "/month",
      description: "Essential IT support for small businesses",
      features: [
        "4 hours remote support/month",
        "Basic monitoring",
        "Email support",
        "Software updates",
        "Basic security setup"
      ],
      color: "from-amber-400 to-amber-600",
      popular: false
    },
    {
      name: "Silver", 
      price: "£399",
      period: "/month",
      description: "Comprehensive IT management for growing businesses",
      features: [
        "8 hours remote support/month",
        "2 on-site visits/month",
        "24/7 monitoring",
        "Priority support",
        "Security management",
        "Backup solutions",
        "Network optimization"
      ],
      color: "from-gray-400 to-gray-600",
      popular: true
    },
    {
      name: "Gold",
      price: "£799", 
      period: "/month",
      description: "Premium IT partnership for established businesses",
      features: [
        "Unlimited remote support",
        "4 on-site visits/month",
        "24/7 emergency response",
        "Dedicated account manager",
        "Advanced security suite",
        "Cloud management",
        "Strategic IT planning",
        "Training sessions"
      ],
      color: "from-yellow-400 to-yellow-600",
      popular: false
    }
  ];

  return (
    <section id="business" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl font-bold">Business Retainer Plans</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proactive IT support that keeps your business running smoothly. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white text-gray-900 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full inline-flex items-center space-x-1 mb-6">
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}>
                <span className="text-white text-2xl font-bold">{plan.name[0]}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
              
              <p className="text-gray-600 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {(() => {
                const stripeProduct = stripeProducts.find(p => 
                  p.name.toLowerCase().includes(plan.name.toLowerCase()) && 
                  p.mode === 'subscription'
                );
                
                if (stripeProduct) {
                  return (
                    <StripeCheckout 
                      product={stripeProduct}
                      onSuccess={() => console.log(`${plan.name} subscription started`)}
                      onError={(error) => console.error('Subscription error:', error)}
                    />
                  );
                } else {
                  return (
                    <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      Contact for {plan.name}
                    </button>
                  );
                }
              })()}
            </div>
          ))}
        </div>

        {/* Additional Business Services */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Business Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Cybersecurity Audits</h4>
              <p className="text-gray-300">Comprehensive security assessment and recommendations</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Staff Training</h4>
              <p className="text-gray-300">IT skills training and cybersecurity awareness</p>
            </div>
            <div className="text-center">
              <Building className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Office Setup</h4>
              <p className="text-gray-300">Complete IT infrastructure planning and implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlans;