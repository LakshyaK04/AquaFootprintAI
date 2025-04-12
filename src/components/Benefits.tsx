
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
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Why Choose Our Water Footprint Calculator?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
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
          
          <div className="lg:w-1/2 bg-gradient-to-br from-aqua-50 to-leaf-50 rounded-2xl p-8 shadow-inner">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real Results from Real Farmers</h3>
              <blockquote className="text-gray-600 italic border-l-4 border-aqua-300 pl-4 mb-6">
                "This calculator helped us reduce water usage by 25% while maintaining the same crop yield. The AI recommendations were practical and easy to implement."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center text-aqua-700 font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">Sustainable Farms, California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
