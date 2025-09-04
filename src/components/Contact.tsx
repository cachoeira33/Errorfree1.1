import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to solve your IT problems? Contact us now for immediate support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Emergency Numbers</h4>
                    <p className="text-gray-300">London: <a href="tel:07745432478" className="text-blue-400 hover:underline">07745432478</a></p>
                    <p className="text-gray-300">Liverpool: <a href="tel:07745432478" className="text-blue-400 hover:underline">07745432478</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Support</h4>
                    <p className="text-gray-300">
                      <a href="mailto:support@errorfree247.co.uk" className="text-blue-400 hover:underline">
                        support@errorfree247.co.uk
                      </a>
                    </p>
                    <p className="text-gray-300">
                      Emergency: <a href="mailto:emergency@errorfree247.co.uk" className="text-blue-400 hover:underline">
                        emergency@errorfree247.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Live Chat</h4>
                    <p className="text-gray-300">WhatsApp: <a href="https://wa.me/4407745432478" className="text-blue-400 hover:underline">07745432478</a></p>
                    <p className="text-gray-300">Available 24/7 for instant support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Operating Hours</h4>
                    <p className="text-gray-300">24/7 Emergency Support</p>
                    <p className="text-gray-300">Remote Support: Always Available</p>
                    <p className="text-gray-300">On-site Visits: 7AM - 10PM Daily</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Service Areas</h4>
                    <p className="text-gray-300">London: All Zones & Surrounding Areas</p>
                    <p className="text-gray-300">Liverpool: City Centre, Wirral, Knowsley</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-red-600 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">🚨 IT Emergency?</h3>
              <p className="text-red-100 mb-4">Don't wait! Get immediate help from our certified technicians.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07745432478"
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Call London: 07745432478
                </a>
                <a
                  href="tel:07745432478"
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Call Liverpool: 0151 765 4321
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="07700 123456"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Emergency Support</option>
                  <option>Remote Diagnosis</option>
                  <option>Computer Upgrade</option>
                  <option>Smart Home Setup</option>
                  <option>Website Development</option>
                  <option>Business Plan Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your IT problem or requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;