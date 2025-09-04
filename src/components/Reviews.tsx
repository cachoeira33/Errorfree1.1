import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Chelsea, London",
      rating: 5,
      text: "ErrorFree 24/7 saved my business! My computer crashed on a Sunday evening and they had a technician at my office within 45 minutes. Absolutely brilliant service.",
      service: "Emergency On-site Support"
    },
    {
      name: "James Thompson", 
      location: "Liverpool City Centre",
      rating: 5,
      text: "Upgraded my gaming PC with an SSD and extra RAM. The difference is incredible! Professional service and fair pricing. Highly recommended.",
      service: "Computer Upgrade"
    },
    {
      name: "Dr. Emily Watson",
      location: "Camden, London", 
      rating: 5,
      text: "They built our dental practice website and provide ongoing support. Always available when we need them. The 24/7 peace of mind is worth every penny.",
      service: "Premium Website & Maintenance"
    },
    {
      name: "Michael Roberts",
      location: "Wirral, Liverpool",
      rating: 5,
      text: "Smart home setup was seamless. They connected everything - TVs, security cameras, and smart lights. Everything works perfectly together.",
      service: "Smart Home Installation"
    },
    {
      name: "Lisa Johnson",
      location: "Islington, London",
      rating: 5,
      text: "Remote support is fantastic. Fixed my laptop virus problem in 20 minutes without leaving my house. Great value for money.",
      service: "Remote Diagnosis"
    },
    {
      name: "David Chen",
      location: "Formby, Liverpool",
      rating: 5,
      text: "Gold business plan customer for 2 years. Their proactive monitoring has prevented several major issues. Best IT investment we've made.",
      service: "Gold Business Plan"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
          </div>
          <p className="text-xl text-gray-600">Based on 1,200+ verified customer reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">{review.text}</p>
              </div>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-600">{review.location}</div>
                <div className="text-sm text-blue-600 font-medium mt-1">{review.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <p className="text-gray-600">Reviews</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;