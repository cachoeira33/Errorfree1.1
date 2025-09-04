import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, FileText, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ErrorFree 24/7</title>
        <meta name="description" content="Privacy Policy for ErrorFree 24/7. Learn how we collect, use, and protect your personal data in compliance with GDPR." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-green-100">
                Your privacy is our priority - Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              <div className="prose prose-lg max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  ErrorFree 24/7 ("we", "our", or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, and protect your information when you use our IT support services.
                </p>
                <p>
                  We are a data controller under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <p>We collect the following types of personal information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                  <li><strong>Service Information:</strong> Details about your IT problems, equipment, and service requirements</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by Stripe)</li>
                  <li><strong>Technical Information:</strong> Device information, system specifications, error logs</li>
                  <li><strong>Communication Records:</strong> Records of calls, emails, and chat conversations</li>
                </ul>

                <h3>2.2 Automatically Collected Information</h3>
                <ul>
                  <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on site</li>
                  <li><strong>Cookies:</strong> See our Cookie Policy for detailed information</li>
                  <li><strong>Analytics Data:</strong> Google Analytics data (with your consent)</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your personal information for the following purposes:</p>

                <h3>3.1 Service Delivery</h3>
                <ul>
                  <li>Providing IT support services</li>
                  <li>Scheduling and conducting appointments</li>
                  <li>Remote access to your devices (with permission)</li>
                  <li>Processing payments</li>
                  <li>Sending service confirmations and updates</li>
                </ul>

                <h3>3.2 Communication</h3>
                <ul>
                  <li>Responding to your inquiries</li>
                  <li>Providing customer support</li>
                  <li>Sending important service notifications</li>
                  <li>Following up on completed services</li>
                </ul>

                <h3>3.3 Business Operations</h3>
                <ul>
                  <li>Improving our services</li>
                  <li>Training our technicians</li>
                  <li>Quality assurance</li>
                  <li>Legal compliance</li>
                  <li>Fraud prevention</li>
                </ul>

                <h2>4. Legal Basis for Processing</h2>
                <p>We process your personal data based on the following legal grounds:</p>
                <ul>
                  <li><strong>Contract Performance:</strong> To provide the IT services you've requested</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                  <li><strong>Consent:</strong> For marketing communications and analytics (where required)</li>
                  <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and other legal requirements</li>
                </ul>

                <h2>5. Data Sharing and Disclosure</h2>
                <p>We may share your information with:</p>

                <h3>5.1 Service Providers</h3>
                <ul>
                  <li><strong>Payment Processors:</strong> Stripe (for secure payment processing)</li>
                  <li><strong>Cloud Services:</strong> Supabase (for secure data storage)</li>
                  <li><strong>Analytics:</strong> Google Analytics (with your consent)</li>
                  <li><strong>Communication Tools:</strong> Email and SMS service providers</li>
                </ul>

                <h3>5.2 Legal Requirements</h3>
                <p>We may disclose your information if required by law, court order, or to protect our rights and safety.</p>

                <h3>5.3 Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>

                <h2>6. Data Security</h2>
                <p>We implement comprehensive security measures to protect your data:</p>
                <ul>
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Staff Training:</strong> Regular data protection training for all staff</li>
                  <li><strong>Secure Facilities:</strong> Physical security measures for equipment and data</li>
                </ul>

                <h2>7. Data Retention</h2>
                <p>We retain your personal data for the following periods:</p>
                <ul>
                  <li><strong>Service Records:</strong> 7 years (for warranty and legal purposes)</li>
                  <li><strong>Payment Information:</strong> 7 years (for tax and accounting requirements)</li>
                  <li><strong>Marketing Data:</strong> Until you withdraw consent or 3 years of inactivity</li>
                  <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
                </ul>

                <h2>8. Your Rights</h2>
                <p>Under UK GDPR, you have the following rights:</p>

                <h3>8.1 Access Rights</h3>
                <ul>
                  <li>Request a copy of your personal data</li>
                  <li>Information about how we process your data</li>
                </ul>

                <h3>8.2 Correction and Deletion</h3>
                <ul>
                  <li>Correct inaccurate personal data</li>
                  <li>Request deletion of your data (right to be forgotten)</li>
                </ul>

                <h3>8.3 Processing Rights</h3>
                <ul>
                  <li>Restrict processing of your data</li>
                  <li>Object to processing based on legitimate interests</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>

                <h3>8.4 Consent</h3>
                <ul>
                  <li>Withdraw consent at any time (where processing is based on consent)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2>9. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to improve your experience on our website. 
                  Please see our separate Cookie Policy for detailed information about the cookies we use and how to manage them.
                </p>

                <h2>10. Third-Party Services</h2>
                <h3>10.1 Google Analytics</h3>
                <p>
                  We use Google Analytics to understand how visitors use our website. This helps us improve our services. 
                  You can opt-out of Google Analytics tracking through your cookie preferences.
                </p>

                <h3>10.2 Stripe Payments</h3>
                <p>
                  Payment processing is handled by Stripe. We do not store your full payment card details. 
                  Stripe's privacy policy governs their handling of your payment information.
                </p>

                <h2>11. International Transfers</h2>
                <p>
                  Some of our service providers may be located outside the UK/EEA. We ensure appropriate safeguards are in place, including:
                </p>
                <ul>
                  <li>Adequacy decisions by the UK government</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes</li>
                </ul>

                <h2>12. Children's Privacy</h2>
                <p>
                  Our services are not directed at children under 16. We do not knowingly collect personal information from children under 16. 
                  If you believe we have collected information from a child under 16, please contact us immediately.
                </p>

                <h2>13. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending you an email notification</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>

                <h2>14. Contact Information</h2>
                <p>
                  For any questions about this Privacy Policy or to exercise your rights, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> privacy@errorfree247.co.uk</li>
                  <li><strong>Phone:</strong> 07745432478</li>
                  <li><strong>Post:</strong> Data Protection Officer, ErrorFree 24/7, London & Liverpool</li>
                </ul>

                <h2>15. Complaints</h2>
                <p>
                  If you have concerns about how we handle your personal data, you can:
                </p>
                <ul>
                  <li>Contact us directly using the details above</li>
                  <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
                  <li>ICO Website: ico.org.uk</li>
                  <li>ICO Helpline: 0303 123 1113</li>
                </ul>
              </div>
            </div>

            {/* Privacy Features */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Encryption</h3>
                <p className="text-gray-600 text-sm">All your data is encrypted using industry-standard security</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Processing</h3>
                <p className="text-gray-600 text-sm">We're clear about what data we collect and how we use it</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your Rights Protected</h3>
                <p className="text-gray-600 text-sm">Full GDPR compliance with easy access to your rights</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-green-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our Data Protection Officer is here to help with any privacy concerns
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@errorfree247.co.uk"
                    className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Email Privacy Officer</span>
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

export default PrivacyPolicyPage;