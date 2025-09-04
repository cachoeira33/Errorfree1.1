import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const Coverage = () => {
  const londonAreas = [
    "Central London", "North London", "South London", "East London", "West London",
    "Camden", "Westminster", "Kensington", "Chelsea", "Islington", "Hackney",
    "Tower Hamlets", "Greenwich", "Lewisham", "Southwark", "Lambeth"
  ];

  const liverpoolAreas = [
    "Liverpool City Centre", "Wirral", "Knowsley", "St Helens", "Halton",
    "Crosby", "Formby", "Maghull", "Ormskirk", "Skelmersdale", "Prescot",
    "Kirkby", "Huyton", "Bootle", "Litherland", "Southport"
  ];

  return (
    <section id="coverage" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Coverage Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IT support across London and Liverpool with guaranteed response times
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* London Coverage */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl font-bold text-gray-900">London</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Response Times:</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Remote support: 15 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-green-600" />
                  <span>On-site visits: Within 1 hour</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas Covered:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {londonAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800 font-medium">
                📞 London Emergency: <a href="tel:07745432478" className="underline">07745432478</a>
              </p>
            </div>
          </div>

          {/* Liverpool Coverage */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">Liverpool</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Response Times:</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Remote support: 15 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-green-600" />
                  <span>On-site visits: Within 1 hour</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas Covered:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {liverpoolAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-800 font-medium">
                📞 Liverpool Emergency: <a href="tel:07745432478" className="underline">07745432478</a>
              </p>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Service Guarantees</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Response Time Guarantee</h4>
              <p className="text-gray-600 text-sm">15-minute remote diagnosis or 1-hour on-site response, or your money back</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Fix, No Fee</h4>
              <p className="text-gray-600 text-sm">If we can't solve your problem, you don't pay (call-out charges apply)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600 text-sm">Round-the-clock support, 365 days a year, including holidays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;