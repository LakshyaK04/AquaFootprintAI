
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Input Your Data",
    description: "Enter details about your crops, region, irrigation methods, and other relevant parameters through our intuitive web interface."
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI model processes your inputs along with satellite data, real-time climate information, and soil parameters."
  },
  {
    number: "03",
    title: "Get Comprehensive Insights",
    description: "Receive detailed analysis of your water footprint, including direct and virtual water consumption for specific crops or farmlands."
  },
  {
    number: "04",
    title: "Apply Recommendations",
    description: "Implement suggested water-efficient practices and explore alternative crops to reduce your water footprint and improve sustainability."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform simplifies the process of calculating and reducing your agricultural water footprint.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-aqua-200 transition-colors"
            >
              <div className="absolute -top-4 -left-4 bg-aqua-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
