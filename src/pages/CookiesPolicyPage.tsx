import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, BarChart, Phone, CheckCircle, X } from 'lucide-react';

const CookiesPolicyPage = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const cookieTypes = [
    {
      name: 'Strictly Necessary',
      key: 'necessary',
      required: true,
      description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: ['Session management', 'Security tokens', 'Load balancing'],
      duration: 'Session or up to 1 year'
    },
    {
      name: 'Analytics',
      key: 'analytics',
      required: false,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      duration: 'Up to 26 months'
    },
    {
      name: 'Marketing',
      key: 'marketing',
      required: false,
      description: 'These cookies are used to deliver advertisements more relevant to you and your interests.',
      examples: ['Ad targeting', 'Conversion tracking', 'Social media integration'],
      duration: 'Up to 2 years'
    },
    {
      name: 'Functional',
      key: 'functional',
      required: false,
      description: 'These cookies enable the website to provide enhanced functionality and personalisation.',
      examples: ['Language preferences', 'Region selection', 'User interface customization'],
      duration: 'Up to 1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - ErrorFree 24/7</title>
        <meta name="description" content="Cookie Policy for ErrorFree 24/7. Learn about the cookies we use and how to manage your preferences." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cookie Policy
              </h1>
              <p className="text-xl text-orange-100">
                How we use cookies and how you can control them - Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Preferences Panel */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Manage Your Cookie Preferences</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                You can control which cookies we use by adjusting your preferences below. Note that disabling certain cookies may affect website functionality.
              </p>

              <div className="space-y-4">
                {cookieTypes.map((type) => (
                  <div key={type.key} className="bg-white rounded-xl p-6 border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                        {type.required && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handlePreferenceChange(type.key, !cookiePreferences[type.key as keyof typeof cookiePreferences])}
                          disabled={type.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[type.key as keyof typeof cookiePreferences]
                              ? 'bg-blue-600'
                              : 'bg-gray-200'
                          } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[type.key as keyof typeof cookiePreferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{type.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Examples:</p>
                        <ul className="text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Duration:</p>
                        <p className="text-gray-600">{type.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={savePreferences}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              <div className="prose prose-lg max-w-none">
                <h2>1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>

                <h2>2. How We Use Cookies</h2>
                <p>
                  ErrorFree 24/7 uses cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. 
                  We use both first-party cookies (set by our website) and third-party cookies (set by external services).
                </p>

                <h2>3. Types of Cookies We Use</h2>

                <h3>3.1 Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for the operation of our website. They enable you to navigate the website and use its features, 
                  such as accessing secure areas and making bookings. Without these cookies, services you have asked for cannot be provided.
                </p>
                <ul>
                  <li><strong>Session cookies:</strong> Maintain your session while browsing</li>
                  <li><strong>Security cookies:</strong> Authenticate users and prevent fraudulent use</li>
                  <li><strong>Load balancing cookies:</strong> Distribute traffic across our servers</li>
                </ul>

                <h3>3.2 Analytics Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited most often 
                  and if visitors get error messages from web pages. This information helps us improve our website.
                </p>
                <ul>
                  <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
                  <li><strong>Conversion tracking:</strong> Measures the effectiveness of our services</li>
                  <li><strong>Heat mapping:</strong> Understands user behavior on our pages</li>
                </ul>

                <h3>3.3 Marketing Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements that are more relevant to you and your interests. 
                  They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                </p>
                <ul>
                  <li><strong>Advertising cookies:</strong> Show relevant ads based on your interests</li>
                  <li><strong>Social media cookies:</strong> Enable sharing on social platforms</li>
                  <li><strong>Retargeting cookies:</strong> Show ads to previous website visitors</li>
                </ul>

                <h3>3.4 Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <ul>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Language cookies:</strong> Remember your language selection</li>
                  <li><strong>Accessibility cookies:</strong> Remember accessibility settings</li>
                </ul>

                <h2>4. Third-Party Cookies</h2>
                <p>We use the following third-party services that may set cookies:</p>

                <h3>4.1 Google Analytics</h3>
                <p>
                  We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect 
                  information about your use of our website. You can opt-out of Google Analytics by installing the 
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>

                <h3>4.2 Stripe</h3>
                <p>
                  Our payment processor Stripe may set cookies to prevent fraud and ensure secure transactions. 
                  These cookies are essential for processing payments safely.
                </p>

                <h3>4.3 Social Media Platforms</h3>
                <p>
                  If you share our content on social media platforms, those platforms may set cookies. 
                  We don't control these cookies - please check the relevant platform's cookie policy.
                </p>

                <h2>5. How to Control Cookies</h2>

                <h3>5.1 Browser Settings</h3>
                <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                <ul>
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Delete cookies when you close your browser</li>
                </ul>

                <h3>5.2 Browser-Specific Instructions</h3>
                <ul>
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <h3>5.3 Our Cookie Preference Center</h3>
                <p>
                  You can also manage your cookie preferences using our preference center above. 
                  Your choices will be remembered for future visits.
                </p>

                <h2>6. Impact of Disabling Cookies</h2>
                <p>
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul>
                  <li>You may not be able to complete bookings</li>
                  <li>Your preferences won't be remembered</li>
                  <li>Some pages may load more slowly</li>
                  <li>You may see less relevant content</li>
                </ul>

                <h2>7. Cookie Retention</h2>
                <p>We retain cookies for the following periods:</p>
                <ul>
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Vary from 30 days to 2 years depending on purpose</li>
                  <li><strong>Analytics cookies:</strong> Up to 26 months (Google Analytics default)</li>
                  <li><strong>Marketing cookies:</strong> Up to 2 years</li>
                </ul>

                <h2>8. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> privacy@errorfree247.co.uk</li>
                  <li><strong>Phone:</strong> 07745432478</li>
                  <li><strong>Address:</strong> ErrorFree 24/7, London & Liverpool</li>
                </ul>
              </div>
            </div>

            {/* Cookie Information Cards */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Your Privacy Matters</h3>
                </div>
                <p className="text-gray-600">
                  We're committed to transparency about our cookie usage and give you full control over your preferences.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Improve Our Service</h3>
                </div>
                <p className="text-gray-600">
                  Analytics cookies help us understand how to make our website better and provide you with improved IT support.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is happy to explain our cookie usage and help with your preferences
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@errorfree247.co.uk"
                    className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                  >
                    <Cookie className="w-5 h-5" />
                    <span>Email About Cookies</span>
                  </a>
                  <a
                    href="tel:07745432478"
                    className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call 07745432478</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPolicyPage;