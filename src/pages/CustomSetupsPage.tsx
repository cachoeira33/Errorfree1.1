import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Monitor, Gamepad2, Briefcase, Home, Cpu, CheckCircle, Star, Phone, MessageSquare } from 'lucide-react';

interface CustomSetupsPageProps {
  onBookNow: () => void;
}

const CustomSetupsPage: React.FC<CustomSetupsPageProps> = ({ onBookNow }) => {
  const setupServices = [
    {
      icon: <Gamepad2 className="w-12 h-12 text-red-600" />,
      title: "Gaming Setups",
      description: "High-performance gaming rigs and streaming setups tailored to your needs",
      features: [
        "Custom PC builds",
        "RGB lighting systems",
        "Multi-monitor setups",
        "Streaming equipment",
        "VR system installation",
        "Performance optimization"
      ],
      pricing: "From £799",
      popular: true
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Office Workstations",
      description: "Professional workstation setups for productivity and efficiency",
      features: [
        "Ergonomic desk setups",
        "Dual/triple monitor configs",
        "Professional peripherals",
        "Cable management",
        "Productivity software",
        "Backup solutions"
      ],
      pricing: "From £599"
    },
    {
      icon: <Monitor className="w-12 h-12 text-green-600" />,
      title: "Creative Studios",
      description: "Specialized setups for content creators, designers, and video editors",
      features: [
        "Color-accurate monitors",
        "Professional audio setup",
        "Video editing workstations",
        "Graphics tablet integration",
        "Studio lighting",
        "Render farm setup"
      ],
      pricing: "From £1,299"
    },
    {
      icon: <Home className="w-12 h-12 text-purple-600" />,
      title: "Smart Home Integration",
      description: "Complete smart home automation and control systems",
      features: [
        "Voice assistant setup",
        "Smart lighting control",
        "Climate automation",
        "Security integration",
        "Entertainment systems",
        "Mobile app control"
      ],
      pricing: "From £399"
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-600" />,
      title: "Server & NAS Setup",
      description: "Personal and business server solutions for data storage and sharing",
      features: [
        "NAS configuration",
        "Media server setup",
        "Cloud storage solutions",
        "Backup automation",
        "Remote access setup",
        "Security configuration"
      ],
      pricing: "From £499"
    },
    {
      icon: <Settings className="w-12 h-12 text-indigo-600" />,
      title: "Custom Solutions",
      description: "Bespoke IT setups tailored to your specific requirements",
      features: [
        "Consultation & planning",
        "Custom hardware selection",
        "Specialized software setup",
        "Integration services",
        "Training & support",
        "Ongoing maintenance"
      ],
      pricing: "Quote on consultation"
    }
  ];

  const setupProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your needs, budget, and requirements in detail",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      step: 2,
      title: "Design & Quote",
      description: "Custom design with detailed specifications and transparent pricing",
      icon: <Monitor className="w-8 h-8 text-green-600" />
    },
    {
      step: 3,
      title: "Procurement",
      description: "We source all components and equipment at competitive prices",
      icon: <Briefcase className="w-8 h-8 text-purple-600" />
    },
    {
      step: 4,
      title: "Installation",
      description: "Professional installation and configuration by certified technicians",
      icon: <Cpu className="w-8 h-8 text-orange-600" />
    },
    {
      step: 5,
      title: "Testing & Training",
      description: "Thorough testing and user training to ensure everything works perfectly",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Consultation",
      description: "Our certified technicians understand your unique requirements",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Quality Components",
      description: "We use only premium, reliable components from trusted brands",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: "Professional Installation",
      description: "Clean, organized installation with proper cable management",
      icon: <Settings className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Ongoing Support",
      description: "Comprehensive warranty and ongoing technical support",
      icon: <Monitor className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom IT Setups - ErrorFree 24/7 | Gaming, Office & Smart Home</title>
        <meta name="description" content="Custom IT setup services in London & Liverpool. Gaming PCs, office workstations, smart home automation, and creative studios. Professional installation." />
        <meta name="keywords" content="custom PC builds, gaming setup, office workstation, smart home, creative studio, London, Liverpool" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Settings className="w-20 h-20 mx-auto mb-6 text-indigo-300" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom IT Setups
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Bespoke IT solutions designed and built specifically for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBookNow}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Custom Quote
                </button>
                <a
                  href="tel:07745432478"
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
                >
                  Call: 07745432478
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
                Custom Setup Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From gaming rigs to smart homes, we create custom IT solutions that perfectly match your requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {setupServices.map((service, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-red-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
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
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${service.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Setup Process
              </h2>
              <p className="text-xl text-gray-600">
                From initial consultation to final testing, we ensure every detail is perfect
              </p>
            </div>

            <div className="space-y-8">
              {setupProcess.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ErrorFree Custom Setups?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Custom Projects
              </h2>
              <p className="text-xl text-gray-600">
                See some of our recent custom IT setups and installations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <Gamepad2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate Gaming Setup</h3>
                <p className="text-gray-600 mb-4">
                  Custom RGB gaming PC with triple 4K monitors, professional streaming equipment, and immersive audio system.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• RTX 4090 Graphics Card</p>
                  <p>• Intel i9 Processor</p>
                  <p>• 32GB DDR5 RAM</p>
                  <p>• Custom Water Cooling</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <Home className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Home Automation</h3>
                <p className="text-gray-600 mb-4">
                  Complete home automation system with voice control, automated lighting, climate control, and security integration.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• 50+ Smart Devices</p>
                  <p>• Voice Assistant Integration</p>
                  <p>• Mobile App Control</p>
                  <p>• Energy Monitoring</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <Monitor className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Studio</h3>
                <p className="text-gray-600 mb-4">
                  Professional video editing workstation with color-accurate monitors, professional audio, and high-speed storage.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• 8K Video Editing Capable</p>
                  <p>• Color-Accurate Displays</p>
                  <p>• Professional Audio Interface</p>
                  <p>• High-Speed NVMe Storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Custom Setup?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your requirements and create the perfect IT solution for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </button>
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
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomSetupsPage;