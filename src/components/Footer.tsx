
import React from 'react';
import { DropletIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <DropletIcon className="h-6 w-6 text-aqua-400" />
              <span className="font-bold text-white text-xl">AquaFootprint AI</span>
            </div>
            <p className="mb-4 text-gray-400">
              AI-Powered Water Footprint Calculator for Sustainable Agriculture
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-aqua-400 transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-aqua-400 transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('benefits')} className="hover:text-aqua-400 transition-colors">Benefits</button></li>
              <li><a href="https://youtu.be/CS9geRQpY4U" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-400 transition-colors">Demo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
