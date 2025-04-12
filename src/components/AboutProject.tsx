
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Leaf, BarChart3, Globe } from 'lucide-react';

const AboutProject = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">About Our Project</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about the AI-Powered Water Footprint Calculator and its mission to promote sustainable agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-aqua-50 to-leaf-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center text-center">
                <Droplet className="h-10 w-10 text-aqua-500 mb-3" />
                <h3 className="font-semibold text-gray-900">Water Savings</h3>
                <p className="mt-2 text-sm text-gray-600">Our AI recommendations can help reduce water usage</p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center text-center">
                <Leaf className="h-10 w-10 text-leaf-500 mb-3" />
                <h3 className="font-semibold text-gray-900">Sustainable Farming</h3>
                <p className="mt-2 text-sm text-gray-600">Promote eco-friendly agricultural practices and reduce environmental impact</p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center text-center">
                <BarChart3 className="h-10 w-10 text-aqua-600 mb-3" />
                <h3 className="font-semibold text-gray-900">Data-Driven Insights</h3>
                <p className="mt-2 text-sm text-gray-600">Make informed decisions based on accurate water consumption analytics</p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center text-center">
                <Globe className="h-10 w-10 text-leaf-600 mb-3" />
                <h3 className="font-semibold text-gray-900">Global Impact</h3>
                <p className="mt-2 text-sm text-gray-600">Contribute to worldwide water conservation efforts in agriculture</p>
              </div>
            </div>
          </div>
          
          <Card className="shadow-none border-none">
            <CardContent className="p-0 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Description</h3>
                <p className="text-gray-600">
                  We've designed an intelligent system that calculates and analyzes the water footprint of agricultural practices based on crop type, region, irrigation method, and weather data. Our platform helps farmers, policymakers, and agronomists estimate total water consumption—both direct and virtual—for specific crops or farmlands.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Key Capabilities</h3>
                <p className="text-gray-600 mb-4">
                  Our system integrates satellite data, real-time climate information, and soil parameters to provide accurate, location-based insights. Additionally, it recommends water-efficient practices, suggests alternative crops, and visualizes usage trends to promote sustainable resource management and climate-resilient agriculture.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">
                  By implementing our recommendations, agricultural operations can reduce water consumption, while maintaining or improving crop yields, contributing to more sustainable farming practices worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
