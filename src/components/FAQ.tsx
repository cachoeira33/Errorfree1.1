import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you respond to an emergency?",
      answer: "For remote support, we can diagnose your problem within 15 minutes. For on-site visits, we guarantee arrival within 1 hour during business hours, and typically within 2 hours for out-of-hours emergencies."
    },
    {
      question: "Do you charge a call-out fee?",
      answer: "Yes, we charge £89 for daytime call-outs (7AM-8PM) and £129 for night/weekend call-outs (8PM-7AM). This includes the first hour of work. Additional time is charged at £79 per hour."
    },
    {
      question: "Can you help with both Windows and Mac computers?",
      answer: "Absolutely! Our certified technicians are experienced with Windows PCs, Macs, tablets, smartphones, and various other devices. We're Microsoft and Apple certified."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide services across London (all zones) and Liverpool (including Wirral, Knowsley, and surrounding areas). Check our coverage map for specific postcodes."
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer: "Yes! We offer a 30-day guarantee on all hardware installations and repairs. If the same problem occurs within 30 days, we'll fix it free of charge."
    },
    {
      question: "Can you help with business IT systems?",
      answer: "Definitely! We offer comprehensive business IT support including servers, networks, security systems, and ongoing maintenance. We have Bronze (£199/month), Silver (£399/month), and Gold (£799/month) business plans."
    },
    {
      question: "How do I pay for services?",
      answer: "We accept all major credit/debit cards, bank transfers, and cash. All payments are processed securely through Stripe. You'll receive an automatic receipt and invoice."
    },
    {
      question: "Can you recover lost data?",
      answer: "Yes, we offer data recovery services for hard drives, SSDs, and other storage devices. Success rates depend on the type and extent of damage. We'll assess your device and provide a quote before proceeding."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. If you don't see your question below, just give us a call.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our friendly support team is available 24/7 to help with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07745432478"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="https://wa.me/4407745432478"
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;