
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, Droplet, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hero-pattern py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-aqua-600/30 bg-aqua-50/50 px-3 py-1 text-sm font-medium text-aqua-700">
              <span className="mr-1">🌱</span>
              <span>Sustainable Agriculture Solution</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-aqua-600">AI-Powered</span>
              <span className="block">Water Footprint Calculator</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Calculate and analyze the water footprint of your agricultural practices using advanced AI technology, satellite data, and real-time climate information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="group bg-aqua-600 hover:bg-aqua-700 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <Link to="/demo">
                  View Our Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="group bg-white hover:bg-gray-50 text-aqua-700 font-medium border-aqua-200 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <Link to="/try-demo">
                  Try Our Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-aqua-300/50 to-leaf-300/50 rounded-full blur-3xl opacity-40"></div>
              <div className="relative flex items-center justify-center h-full space-x-4">
                <Sprout className="w-24 h-24 text-leaf-500" strokeWidth={1} />
                <Droplet className="w-16 h-16 text-aqua-500" strokeWidth={1} />
                <Leaf className="w-20 h-20 text-leaf-600" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
