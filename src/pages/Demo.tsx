
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/" className="flex items-center text-gray-600 hover:text-aqua-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Demo Walkthrough</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Watch our comprehensive demo to see how the AI-Powered Water Footprint Calculator works in real-world scenarios.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 mb-12 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Demo video would be embedded here</p>
              <p className="text-sm text-gray-500">(This is a placeholder for demonstration purposes)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features Highlighted</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-aqua-600 font-bold mr-2">•</span>
                  <span>Data input and configuration workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-600 font-bold mr-2">•</span>
                  <span>Real-time satellite and climate data integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-600 font-bold mr-2">•</span>
                  <span>Interactive water usage visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-600 font-bold mr-2">•</span>
                  <span>AI-powered recommendation engine in action</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aqua-600 font-bold mr-2">•</span>
                  <span>Report generation and data export options</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience It Yourself?</h2>
              <p className="text-gray-600 mb-6">
                After watching the demo, try our interactive calculator with your own data to see personalized results and recommendations.
              </p>
              <Button asChild className="bg-aqua-600 hover:bg-aqua-700 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/try-demo">
                  Try Our Demo Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
