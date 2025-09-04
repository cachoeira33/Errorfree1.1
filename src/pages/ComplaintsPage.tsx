import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, FileText, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react';

const ComplaintsPage = () => {
  const [complaintForm, setComplaintForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceDate: '',
    complaintType: '',
    description: '',
    resolution: '',
    priority: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setComplaintForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Your complaint has been received. We will respond within 24 hours with a reference number and next steps.');
      setIsSubmitting(false);
      setComplaintForm({
        name: '',
        email: '',
        phone: '',
        serviceDate: '',
        complaintType: '',
        description: '',
        resolution: '',
        priority: 'standard'
      });
    }, 1000);
  };

  const complaintTypes = [
    'Service Quality',
    'Technician Conduct',
    'Billing/Payment Issue',
    'Response Time',
    'Communication',
    'Equipment Damage',
    'Data/Privacy Concern',
    'Other'
  ];

  const complaintProcess = [
    {
      step: 1,
      title: 'Submit Complaint',
      description: 'Use our form or contact us directly',
      timeframe: 'Immediate'
    },
    {
      step: 2,
      title: 'Acknowledgment',
      description: 'We acknowledge receipt and assign a reference',
      timeframe: 'Within 24 hours'
    },
    {
      step: 3,
      title: 'Investigation',
      description: 'We thoroughly investigate your complaint',
      timeframe: '3-5 working days'
    },
    {
      step: 4,
      title: 'Resolution',
      description: 'We provide our findings and proposed resolution',
      timeframe: 'Within 7 working days'
    },
    {
      step: 5,
      title: 'Follow-up',
      description: 'We ensure you\'re satisfied with the resolution',
      timeframe: '14 days after resolution'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complaints Procedure - ErrorFree 24/7</title>
        <meta name="description" content="ErrorFree 24/7 complaints procedure. How to raise concerns about our IT support services and our commitment to resolving issues." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Complaints Procedure
              </h1>
              <p className="text-xl text-red-100">
                We take your concerns seriously and are committed to resolving any issues
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact for Urgent Issues */}
        <section className="py-12 bg-yellow-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Urgent Issue?</h2>
              <p className="text-gray-700 mb-6">
                For immediate concerns about ongoing services or urgent complaints, contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07745432478"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 07745432478</span>
                </a>
                <a
                  href="mailto:complaints@errorfree247.co.uk"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Complaints Team</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At ErrorFree 24/7, we strive to provide exceptional IT support. When things don't go as planned, 
                we're committed to making them right.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">We acknowledge all complaints within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Investigation</h3>
                <p className="text-gray-600">Thorough and impartial review of all concerns</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Resolution</h3>
                <p className="text-gray-600">Transparent communication and fair outcomes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Complaint Process */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complaints Process</h2>
              <p className="text-xl text-gray-600">
                Here's how we handle complaints to ensure fair and timely resolution
              </p>
            </div>

            <div className="space-y-8">
              {complaintProcess.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complaint Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit a Complaint</h2>
              <p className="text-xl text-gray-600">
                Please provide as much detail as possible to help us investigate your concern
              </p>
            </div>

            {submitMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 font-medium">{submitMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={complaintForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={complaintForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={complaintForm.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="07700 123456"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Date
                  </label>
                  <input
                    type="date"
                    value={complaintForm.serviceDate}
                    onChange={(e) => handleInputChange('serviceDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complaint Type *
                  </label>
                  <select
                    required
                    value={complaintForm.complaintType}
                    onChange={(e) => handleInputChange('complaintType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select complaint type</option>
                    {complaintTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level
                  </label>
                  <select
                    value={complaintForm.priority}
                    onChange={(e) => handleInputChange('priority', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low - General feedback</option>
                    <option value="standard">Standard - Service concern</option>
                    <option value="high">High - Significant issue</option>
                    <option value="urgent">Urgent - Serious problem</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  required
                  rows={6}
                  value={complaintForm.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your complaint in detail, including dates, times, and any relevant information..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Resolution
                </label>
                <textarea
                  rows={3}
                  value={complaintForm.resolution}
                  onChange={(e) => handleInputChange('resolution', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What would you like us to do to resolve this complaint?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Complaint</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Complain</h2>
              <p className="text-xl text-gray-600">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Speak directly to our complaints team</p>
                <a
                  href="tel:07745432478"
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  07745432478
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send detailed complaint information</p>
                <a
                  href="mailto:complaints@errorfree247.co.uk"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  complaints@errorfree247.co.uk
                </a>
                <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Post</h3>
                <p className="text-gray-600 mb-4">Send written complaints by post</p>
                <p className="text-gray-700 font-medium">
                  Complaints Department<br />
                  ErrorFree 24/7<br />
                  London & Liverpool
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* External Resolution */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Not Satisfied?</h2>
              <p className="text-gray-700 mb-6">
                If you're not satisfied with our response to your complaint, you have the right to escalate the matter to external bodies:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Trading Standards</h3>
                  <p className="text-gray-600">Contact your local Trading Standards office for consumer protection issues</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Citizens Advice</h3>
                  <p className="text-gray-600">Get free advice on consumer rights at citizensadvice.org.uk</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Small Claims Court</h3>
                  <p className="text-gray-600">For financial disputes, you may be able to make a claim through the small claims court</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComplaintsPage;