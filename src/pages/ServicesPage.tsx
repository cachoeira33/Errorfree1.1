import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Monitor, Home, Building, Wifi, Shield, Clock, CheckCircle, Phone, MessageSquare } from 'lucide-react';

interface ServicesPageProps {
  onBookNow: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBookNow }) => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: "Emergency 24/7 Support",
      description: "Immediate IT assistance when you need it most. Our certified technicians are available around the clock.",
      features: [
        "Remote diagnosis in 15 minutes",
        "On-site visits within 1 hour",
        "24/7 availability including holidays",
        "Emergency call-out service",
        "Critical system recovery"
      ],
      pricing: "From £59 remote / £89 on-site",
      category: "emergency"
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Computer Repairs & Upgrades",
      description: "Professional hardware and software solutions to boost your computer's performance.",
      features: [
        "SSD upgrades and installation",
        "RAM memory upgrades",
        "Hardware diagnostics",
        "Performance optimization",
        "Gaming PC optimization"
      ],
      pricing: "From £149 including parts",
      category: "hardware"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Smart Home & TV Installation",
      description: "Transform your home with professional smart device setup and entertainment systems.",
      features: [
        "Smart TV mounting and setup",
        "Home automation systems",
        "Network optimization",
        "Streaming device configuration",
        "Smart security systems"
      ],
      pricing: "Quote on consultation",
      category: "smarthome"
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: "Business IT Solutions",
      description: "Comprehensive IT support tailored for businesses of all sizes.",
      features: [
        "Network setup and management",
        "Server installation and maintenance",
        "Cloud migration services",
        "Data backup solutions",
        "IT security implementation"
      ],
      pricing: "From £199/month retainer",
      category: "business"
    },
    {
      icon: <Wifi className="w-12 h-12 text-indigo-600" />,
      title: "Network & Connectivity",
      description: "Reliable network solutions for homes and offices.",
      features: [
        "WiFi setup and optimization",
        "Network troubleshooting",
        "Router configuration",
        "Internet connectivity issues",
        "Network security setup"
      ],
      pricing: "From £79 per visit",
      category: "network"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions.",
      features: [
        "Virus and malware removal",
        "Security software installation",
        "Data recovery services",
        "Privacy protection setup",
        "Security audits"
      ],
      pricing: "From £89 per service",
      category: "security"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - ErrorFree 24/7 | London & Liverpool</title>
        <meta name="description" content="Professional IT services including emergency support, computer repairs, smart home installation, and business solutions across London & Liverpool." />
        <meta name="keywords" content="IT services, computer repair, smart home, business IT, network setup, cybersecurity, London, Liverpool" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional IT Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions for homes and businesses across London & Liverpool
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBookNow}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Book Service Now
                </button>
                <a
                  href="tel:07745432478"
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
                >
                  Emergency: 07745432478
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete business solutions, we've got you covered
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <p className="text-blue-600 font-semibold mb-4">{service.pricing}</p>
                    <button
                      onClick={onBookNow}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ErrorFree 24/7?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">Remote diagnosis in 15 minutes, on-site within 1 hour</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Professionals</h3>
                <p className="text-gray-600">DBS-checked, insured technicians with proven expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Work</h3>
                <p className="text-gray-600">30-day guarantee on all repairs and installations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us now for immediate IT support or to discuss your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07745432478"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call 07745432478</span>
              </a>
              <a
                href="https://wa.me/4407745432478"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </a>
              <button
                onClick={onBookNow}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Online
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;