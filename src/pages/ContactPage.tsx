import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, User, Building } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgency: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 2 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        urgency: 'standard'
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-red-600" />,
      title: 'Emergency Phone',
      description: '24/7 immediate support',
      contact: '07745432478',
      action: 'tel:07745432478',
      available: 'Available 24/7'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: 'WhatsApp',
      description: 'Quick chat support',
      contact: '07745432478',
      action: 'https://wa.me/4407745432478',
      available: 'Response within minutes'
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: 'Email Support',
      description: 'Detailed inquiries',
      contact: 'support@errorfree247.co.uk',
      action: 'mailto:support@errorfree247.co.uk',
      available: 'Response within 2 hours'
    }
  ];

  const officeLocations = [
    {
      city: 'London',
      areas: ['Central London', 'North & South London', 'East & West London', 'All London Zones'],
      phone: '07745432478',
      coverage: 'All London postcodes covered'
    },
    {
      city: 'Liverpool',
      areas: ['City Centre', 'Wirral', 'Knowsley', 'Surrounding Areas'],
      phone: '0151 765 4321',
      coverage: 'Merseyside and surrounding areas'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - ErrorFree 24/7 | Get IT Support Now</title>
        <meta name="description" content="Contact ErrorFree 24/7 for immediate IT support. Call 07745432478 for emergencies, email support@errorfree247.co.uk, or use our contact form." />
        <meta name="keywords" content="contact IT support, emergency computer help, ErrorFree 24/7 contact, London Liverpool IT support" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Need IT support? We're here to help 24/7 across London & Liverpool
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">🚨 IT Emergency?</h2>
              <p className="text-red-100 mb-4">Don't wait - call now for immediate assistance</p>
              <a
                href="tel:07745432478"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>Call 07745432478 Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600">
                Choose the contact method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors block mb-2"
                  >
                    {method.contact}
                  </a>
                  <p className="text-sm text-gray-500">{method.available}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="07700 123456"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-1" />
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="emergency">Emergency Support</option>
                        <option value="remote">Remote Diagnosis</option>
                        <option value="onsite">On-site Visit</option>
                        <option value="upgrade">Computer Upgrade</option>
                        <option value="smarthome">Smart Home Setup</option>
                        <option value="business">Business IT Support</option>
                        <option value="website">Website Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="emergency">Emergency (within 1 hour)</option>
                        <option value="urgent">Urgent (same day)</option>
                        <option value="standard">Standard (next working day)</option>
                        <option value="flexible">Flexible (within 3 days)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your IT problem or requirements in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Operating Hours</h4>
                        <p className="text-gray-600">24/7 Emergency Support Available</p>
                        <p className="text-gray-600">Remote Support: Always Available</p>
                        <p className="text-gray-600">On-site Visits: 7AM - 10PM Daily</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Addresses</h4>
                        <p className="text-gray-600">General: support@errorfree247.co.uk</p>
                        <p className="text-gray-600">Emergency: emergency@errorfree247.co.uk</p>
                        <p className="text-gray-600">Business: business@errorfree247.co.uk</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                        <p className="text-gray-600">London: 07745432478</p>
                        <p className="text-gray-600">Liverpool: 0151 765 4321</p>
                        <p className="text-gray-600">WhatsApp: 07745432478</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                  <div className="space-y-6">
                    {officeLocations.map((location, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <MapPin className="w-6 h-6 text-blue-600" />
                          <h4 className="text-xl font-bold text-gray-900">{location.city}</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                          {location.areas.map((area, idx) => (
                            <div key={idx}>• {area}</div>
                          ))}
                        </div>
                        <p className="text-blue-600 font-semibold">📞 {location.phone}</p>
                        <p className="text-gray-600 text-sm">{location.coverage}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response Times */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Emergency Calls:</span>
                      <span className="font-semibold text-blue-600">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Remote Diagnosis:</span>
                      <span className="font-semibold text-blue-600">15 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">On-site Visits:</span>
                      <span className="font-semibold text-blue-600">Within 1 hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Email Responses:</span>
                      <span className="font-semibold text-blue-600">Within 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;