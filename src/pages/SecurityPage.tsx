import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Camera, Lock, Wifi, Smartphone, Monitor, AlertTriangle, CheckCircle, Phone, MessageSquare } from 'lucide-react';

interface SecurityPageProps {
  onBookNow: () => void;
}

const SecurityPage: React.FC<SecurityPageProps> = ({ onBookNow }) => {
  const securityServices = [
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      title: "CCTV Systems",
      description: "Professional CCTV installation and monitoring systems for homes and businesses",
      features: [
        "HD/4K camera installation",
        "Remote viewing via smartphone",
        "Motion detection alerts",
        "Night vision capabilities",
        "Cloud storage options",
        "Professional monitoring"
      ],
      pricing: "From £299 per camera"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Alarm Systems",
      description: "Comprehensive security alarm systems with 24/7 monitoring",
      features: [
        "Burglar alarm installation",
        "Motion sensors & door contacts",
        "24/7 monitoring service",
        "Mobile app control",
        "Police response service",
        "Maintenance included"
      ],
      pricing: "From £199 installation"
    },
    {
      icon: <Lock className="w-12 h-12 text-purple-600" />,
      title: "Access Control",
      description: "Smart locks and access control systems for enhanced security",
      features: [
        "Smart lock installation",
        "Keypad entry systems",
        "Biometric access control",
        "Remote access management",
        "Visitor management",
        "Integration with existing systems"
      ],
      pricing: "From £149 per lock"
    },
    {
      icon: <Wifi className="w-12 h-12 text-orange-600" />,
      title: "Network Security",
      description: "Protect your digital assets with comprehensive network security",
      features: [
        "Firewall configuration",
        "VPN setup",
        "Network monitoring",
        "Intrusion detection",
        "Security audits",
        "Staff training"
      ],
      pricing: "From £99 per month"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-600" />,
      title: "Smart Home Security",
      description: "Integrated smart home security solutions",
      features: [
        "Smart doorbell installation",
        "Window/door sensors",
        "Smart lighting control",
        "Environmental monitoring",
        "Voice assistant integration",
        "Mobile app control"
      ],
      pricing: "From £199 per room"
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats",
      features: [
        "Antivirus & anti-malware",
        "Email security",
        "Data backup solutions",
        "Employee training",
        "Incident response",
        "Compliance support"
      ],
      pricing: "From £49 per device/month"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Certified Installers",
      description: "All our technicians are certified and DBS-checked for your peace of mind"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Insurance Approved",
      description: "Our installations meet insurance requirements and may reduce premiums"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring services with immediate response"
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Warranty Included",
      description: "Comprehensive warranty on all equipment and installation work"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security Systems - ErrorFree 24/7 | CCTV, Alarms & Smart Security</title>
        <meta name="description" content="Professional security system installation in London & Liverpool. CCTV, burglar alarms, smart locks, and cybersecurity solutions. DBS-checked installers." />
        <meta name="keywords" content="security systems, CCTV installation, burglar alarms, smart locks, cybersecurity, London, Liverpool" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="w-20 h-20 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security Systems
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect what matters most with professional security solutions across London & Liverpool
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBookNow}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Get Security Quote
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
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From CCTV systems to cybersecurity, we provide complete protection for your home or business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
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
                      className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Get Quote
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
                Why Choose ErrorFree Security?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Assessment */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Security Assessment</h2>
                <p className="text-xl text-gray-600">
                  Get a professional evaluation of your current security setup
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Comprehensive site survey</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Vulnerability assessment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Customized recommendations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Detailed quote</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">No obligation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect For:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Homeowners</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Small businesses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Retail premises</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Office buildings</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Industrial sites</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={onBookNow}
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors"
                >
                  Book Free Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Security */}
        <section className="py-20 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security Emergency?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              If you've experienced a break-in or security breach, we provide emergency response services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07745432478"
                className="flex items-center justify-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: 07745432478</span>
              </a>
              <a
                href="https://wa.me/4407745432478"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Services Coverage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-red-600 mr-3" />
                  London Security Services
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>• Central London</div>
                  <div>• North London</div>
                  <div>• South London</div>
                  <div>• East London</div>
                  <div>• West London</div>
                  <div>• All London Zones</div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 font-semibold">📞 London: 07745432478</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  Liverpool Security Services
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>• City Centre</div>
                  <div>• Wirral</div>
                  <div>• Knowsley</div>
                  <div>• St Helens</div>
                  <div>• Halton</div>
                  <div>• Surrounding Areas</div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">📞 Liverpool: 0151 765 4321</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecurityPage;