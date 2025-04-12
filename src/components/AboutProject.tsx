
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
          <div>
            <img 
              src="/lovable-uploads/4fd5183f-6da5-46b5-ab9d-ef2030af7c66.png" 
              alt="AI-Powered Water Footprint Calculator Project Description" 
              className="rounded-xl shadow-lg w-full"
            />
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
                  By implementing our recommendations, agricultural operations can reduce water consumption by up to 30% while maintaining or improving crop yields, contributing to more sustainable farming practices worldwide.
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
