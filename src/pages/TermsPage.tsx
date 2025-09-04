import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Clock, Phone } from 'lucide-react';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ErrorFree 24/7</title>
        <meta name="description" content="Terms of Service for ErrorFree 24/7 IT support services. Read our service terms, conditions, and policies." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-blue-100">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              <div className="prose prose-lg max-w-none">
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing and using ErrorFree 24/7 services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2>2. Service Description</h2>
                <p>
                  ErrorFree 24/7 provides professional IT support services including but not limited to:
                </p>
                <ul>
                  <li>Emergency IT support (24/7 availability)</li>
                  <li>Remote computer diagnosis and repair</li>
                  <li>On-site technical support visits</li>
                  <li>Computer hardware upgrades and installations</li>
                  <li>Smart home and entertainment system setup</li>
                  <li>Business IT support and maintenance</li>
                  <li>Website development and maintenance services</li>
                </ul>

                <h2>3. Service Areas</h2>
                <p>
                  Our services are available in the following areas:
                </p>
                <ul>
                  <li><strong>London:</strong> All London zones and surrounding areas</li>
                  <li><strong>Liverpool:</strong> City centre, Wirral, Knowsley, and surrounding areas</li>
                </ul>

                <h2>4. Pricing and Payment</h2>
                <h3>4.1 Service Charges</h3>
                <ul>
                  <li>Remote diagnosis: £59 for up to 1 hour</li>
                  <li>Remote support: £30 per 30-minute session</li>
                  <li>On-site call-out (daytime 7AM-8PM): £89</li>
                  <li>On-site call-out (night/weekend 8PM-7AM): £129</li>
                  <li>On-site hourly rate: £79 per hour</li>
                  <li>Hardware upgrades: Prices vary by component and service</li>
                </ul>

                <h3>4.2 Payment Terms</h3>
                <ul>
                  <li>Payment is due upon completion of service</li>
                  <li>We accept cash, card payments, and bank transfers</li>
                  <li>All payments are processed securely through Stripe</li>
                  <li>Subscription services are billed monthly in advance</li>
                </ul>

                <h2>5. Service Guarantees</h2>
                <h3>5.1 Response Times</h3>
                <ul>
                  <li>Remote diagnosis: Within 15 minutes of contact</li>
                  <li>On-site emergency visits: Within 1 hour during business hours</li>
                  <li>Standard on-site visits: Within 2-4 hours</li>
                </ul>

                <h3>5.2 Work Guarantee</h3>
                <ul>
                  <li>30-day guarantee on all hardware repairs and installations</li>
                  <li>If the same problem recurs within 30 days, we'll fix it free of charge</li>
                  <li>Software support includes ongoing assistance for 7 days</li>
                </ul>

                <h2>6. Customer Responsibilities</h2>
                <p>
                  Customers are responsible for:
                </p>
                <ul>
                  <li>Providing accurate information about technical issues</li>
                  <li>Ensuring someone over 18 is present during on-site visits</li>
                  <li>Backing up important data before service (we can assist with this)</li>
                  <li>Providing safe access to equipment and work areas</li>
                  <li>Payment for services as agreed</li>
                </ul>

                <h2>7. Limitation of Liability</h2>
                <p>
                  ErrorFree 24/7 shall not be liable for:
                </p>
                <ul>
                  <li>Data loss due to hardware failure or corruption</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of business or profits</li>
                  <li>Damages exceeding the amount paid for services</li>
                </ul>
                <p>
                  We maintain comprehensive public liability insurance and take all reasonable precautions to protect customer data and equipment.
                </p>

                <h2>8. Data Protection and Privacy</h2>
                <p>
                  We are committed to protecting your privacy and personal data in accordance with GDPR and UK data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
                </p>

                <h2>9. Cancellation Policy</h2>
                <h3>9.1 Service Cancellations</h3>
                <ul>
                  <li>On-site appointments can be cancelled up to 2 hours before scheduled time</li>
                  <li>Cancellations with less than 2 hours notice may incur a £25 cancellation fee</li>
                  <li>Emergency services cannot be cancelled once a technician is dispatched</li>
                </ul>

                <h3>9.2 Subscription Cancellations</h3>
                <ul>
                  <li>Monthly subscriptions can be cancelled with 30 days notice</li>
                  <li>Cancellations take effect at the end of the current billing period</li>
                  <li>No refunds for partial months</li>
                </ul>

                <h2>10. Force Majeure</h2>
                <p>
                  ErrorFree 24/7 shall not be liable for any failure to perform due to unforeseen circumstances or causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, epidemic, government regulations, disasters, strikes, or other labor disputes.
                </p>

                <h2>11. Intellectual Property</h2>
                <p>
                  All content, trademarks, and intellectual property on our website and in our services remain the property of ErrorFree 24/7. Customers may not reproduce, distribute, or create derivative works without written permission.
                </p>

                <h2>12. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these terms or our services will be resolved through:
                </p>
                <ul>
                  <li>Direct negotiation between parties</li>
                  <li>Mediation if direct negotiation fails</li>
                  <li>UK courts if mediation is unsuccessful</li>
                </ul>

                <h2>13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on our website and customers will be notified of significant changes. Continued use of our services constitutes acceptance of modified terms.
                </p>

                <h2>14. Contact Information</h2>
                <p>
                  For questions about these terms or our services, please contact us:
                </p>
                <ul>
                  <li><strong>Phone:</strong> 07745432478 (24/7)</li>
                  <li><strong>Email:</strong> support@errorfree247.co.uk</li>
                  <li><strong>Address:</strong> ErrorFree 24/7, London & Liverpool</li>
                </ul>

                <h2>15. Governing Law</h2>
                <p>
                  These terms are governed by and construed in accordance with the laws of England and Wales. Any legal action or proceeding arising under these terms will be brought exclusively in the courts of England and Wales.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is happy to clarify any aspect of our terms of service
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:07745432478"
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call 07745432478</span>
                  </a>
                  <a
                    href="mailto:support@errorfree247.co.uk"
                    className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Email Support</span>
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

export default TermsPage;