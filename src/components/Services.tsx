import React from 'react';
import { Zap, Monitor, Home, Building, Users, Wifi } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: "Emergency 24/7",
      description: "Remote diagnosis in 15 minutes. On-site support within 1 hour. Day and night emergency call-outs available.",
      features: ["Remote diagnosis £59", "On-site day call-out £89", "Night call-out £129", "24/7 availability"],
      cta: "Get Emergency Help",
      urgent: true
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Computer Upgrades",
      description: "Boost your PC performance with SSD upgrades, RAM expansion, and gaming optimizations. Professional installation included.",
      features: ["SSD 1TB upgrade £199", "RAM 16GB upgrade £149", "Gaming optimization", "Performance guarantee"],
      cta: "Upgrade Now"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Smart Home & TV",
      description: "Professional installation of smart home devices, TV mounting, and entertainment system setup.",
      features: ["TV wall mounting", "Smart device setup", "Network optimization", "Entertainment systems"],
      cta: "Book Installation"
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: "Premium Websites",
      description: "Professional website design, hosting, and 24/7 maintenance. Perfect for businesses wanting to grow online.",
      features: ["Custom design from £1,499", "24/7 maintenance £99/month", "SEO optimization", "Mobile responsive"],
      cta: "Get Your Website"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IT support for homes and businesses across London & Liverpool
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${service.urgent ? 'border-red-200 bg-red-50' : 'border-gray-100'}`}>
              <div className="flex flex-col h-full">
                <div className="flex-shrink-0 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${service.urgent ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;