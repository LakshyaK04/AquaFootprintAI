
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, DropletIcon } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-aqua-600 to-leaf-600 text-white" id="cta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Optimize Your Agricultural Water Usage?
            </h2>
            <p className="text-xl text-aqua-50 max-w-2xl">
              Start making data-driven decisions to reduce your water footprint, improve sustainability, and boost efficiency in your agricultural operations.
            </p>
          </div>
          
          <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button asChild className="group bg-white hover:bg-gray-50 text-aqua-700 font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
              <a href="https://youtu.be/CS9geRQpY4U" target="_blank" rel="noopener noreferrer">
                View Our Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="group bg-transparent hover:bg-white/10 text-white font-medium border-white border-2 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 w-full">
              <a href="https://ai-powered-water-footprint-calculator.streamlit.app" target="_blank" rel="noopener noreferrer">
                Try Our Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
