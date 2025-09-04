import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Users, Clock, CheckCircle, Star, MapPin, Phone } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Availability' },
    { number: '15min', label: 'Response Time' }
  ];

  const certifications = [
    'Microsoft Certified Professional',
    'Apple Certified Technician',
    'CompTIA A+ Certified',
    'Cisco Network Associate',
    'DBS Security Cleared',
    'Public Liability Insured'
  ];

  const teamMembers = [
    {
      name: 'James Mitchell',
      role: 'Lead Technician - London',
      experience: '8+ years experience',
      specialties: ['Hardware Repair', 'Network Setup', 'Business IT']
    },
    {
      name: 'Sarah Thompson',
      role: 'Senior Technician - Liverpool',
      experience: '6+ years experience',
      specialties: ['Smart Home', 'Cybersecurity', 'Data Recovery']
    },
    {
      name: 'David Chen',
      role: 'Remote Support Specialist',
      experience: '5+ years experience',
      specialties: ['Software Issues', 'Virus Removal', 'System Optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - ErrorFree 24/7 | Professional IT Support</title>
        <meta name="description" content="Learn about ErrorFree 24/7 - professional IT support company serving London & Liverpool. DBS-checked technicians, 24/7 availability, 1000+ satisfied customers." />
        <meta name="keywords" content="about ErrorFree 24/7, IT support company, professional technicians, London Liverpool IT services" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About ErrorFree 24/7
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your trusted IT support partner across London & Liverpool
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2020, ErrorFree 24/7 was born from a simple mission: to provide reliable, 
                    professional IT support when people need it most. We recognized that technology problems 
                    don't follow business hours, which is why we committed to true 24/7 availability.
                  </p>
                  <p>
                    Starting with just two technicians in London, we've grown to serve both London and Liverpool, 
                    helping over 1,000 customers resolve their IT challenges. Our success comes from combining 
                    technical expertise with genuine care for our customers' needs.
                  </p>
                  <p>
                    Today, we're proud to be the go-to IT support company for homes and businesses across 
                    our service areas, maintaining our founding principles of reliability, professionalism, 
                    and customer-first service.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To provide exceptional IT support that keeps our customers connected, productive, 
                  and secure in an increasingly digital world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Customer satisfaction first</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Transparent, fair pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Continuous learning and improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Building long-term relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-blue-100">
                Our numbers speak for themselves
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">DBS Checked</h3>
                <p className="text-gray-600">All technicians are DBS security cleared and fully insured</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">Microsoft, Apple, and CompTIA certified professionals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Available</h3>
                <p className="text-gray-600">True round-the-clock support, 365 days a year</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focused</h3>
                <p className="text-gray-600">4.9/5 star rating from over 1,000 satisfied customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <p className="text-xl text-gray-600">
                Our team maintains the highest industry standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to solving your IT problems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.experience}</p>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Areas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">London</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT support across all London zones and surrounding areas.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Central London</div>
                  <div>• North London</div>
                  <div>• South London</div>
                  <div>• East London</div>
                  <div>• West London</div>
                  <div>• All London Zones</div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-800">London Emergency: 07745432478</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Liverpool</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional IT services throughout Liverpool and surrounding areas.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• City Centre</div>
                  <div>• Wirral</div>
                  <div>• Knowsley</div>
                  <div>• St Helens</div>
                  <div>• Halton</div>
                  <div>• Surrounding Areas</div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Liverpool Emergency: 0151 765 4321</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience ErrorFree IT Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join over 1,000 satisfied customers who trust us with their IT needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07745432478"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                Call Now: 07745432478
              </a>
              <a
                href="mailto:support@errorfree247.co.uk"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;