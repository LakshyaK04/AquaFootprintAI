
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefitItems = [
  "Reduce water consumption by up to 30% with AI-recommended practices",
  "Make data-driven decisions about crop selection and irrigation methods",
  "Comply with water usage regulations and sustainability requirements",
  "Integrate with existing farm management systems",
  "Contribute to climate-resilient agriculture",
  "Improve crop yield while reducing resource usage"
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Why Choose Our Water Footprint Calculator?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI-powered solution provides accurate, location-based insights that help you optimize water usage while maintaining or improving agricultural productivity.
            </p>
            
            <div className="space-y-4">
              {benefitItems.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
