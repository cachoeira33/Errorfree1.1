import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Phone, MessageSquare, Mail } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of computer problems do you fix?",
      answer: "We handle all types of computer issues including virus removal, hardware repairs, software installation, data recovery, network setup, performance optimization, and much more. Our technicians are experienced with both Windows and Mac systems."
    },
    {
      question: "How quickly can you respond to my call?",
      answer: "We offer same-day service for most issues and can often provide remote assistance within minutes of your call. For on-site visits, we typically arrive within 2-4 hours during business hours and offer emergency 24/7 service for critical issues."
    },
    {
      question: "Do you offer remote computer repair?",
      answer: "Yes! Many computer issues can be resolved remotely, which is often faster and more convenient. We use secure remote access software to diagnose and fix problems while you watch. This service is available 24/7."
    },
    {
      question: "What are your service charges?",
      answer: "We offer transparent, competitive pricing with no hidden fees. Remote support starts from £29, on-site visits from £49, and we provide free quotes for all services. Payment is only required after successful completion of the work."
    },
    {
      question: "Is my data safe during repairs?",
      answer: "Absolutely. Data security is our top priority. We use industry-standard security protocols, never access personal files without permission, and can perform repairs while keeping your data completely secure. We also offer data backup services."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. Software repairs come with a 30-day guarantee, hardware repairs include manufacturer warranties, and we offer ongoing support to ensure your satisfaction."
    },
    {
      question: "Can you help with business computer systems?",
      answer: "Definitely! We provide comprehensive IT support for businesses of all sizes, including network setup, server maintenance, security solutions, data backup systems, and ongoing IT management. We offer both one-time fixes and monthly support contracts."
    },
    {
      question: "What if you can't fix my computer?",
      answer: "While we successfully resolve 99% of the issues we encounter, if we can't fix your problem, you don't pay. We'll provide honest advice about whether repair is cost-effective or if replacement would be better, and we can help with data transfer to a new system."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Frequently Asked Questions - Error Free 24/7</title>
        <meta name="description" content="Find answers to common questions about our computer repair services, pricing, response times, and more." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant answers to the most common questions about our computer repair services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">Still Have Questions?</h3>
          <p className="text-blue-800 text-center mb-8">
            Our friendly support team is available 24/7 to help with any questions you might have.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:07745432478"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
            >
              <Phone className="w-12 h-12 text-red-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-center">07745432478</p>
              <p className="text-sm text-gray-500">24/7 Emergency Line</p>
            </a>
            
            <a
              href="https://wa.me/4407745432478"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
            >
              <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600 text-center">Live Chat</p>
              <p className="text-sm text-gray-500">Instant Response</p>
            </a>
            
            <a
              href="mailto:support@errorfree247.co.uk"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
            >
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600 text-center">support@errorfree247.co.uk</p>
              <p className="text-sm text-gray-500">Detailed Support</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FAQPage