
import React from 'react';
import { DropletIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <DropletIcon className="h-6 w-6 text-aqua-400" />
              <span className="font-bold text-white text-xl">AquaCalc</span>
            </div>
            <p className="mb-4 text-gray-400">
              AI-Powered Water Footprint Calculator for Sustainable Agriculture
            </p>
            <p className="text-sm text-gray-500">
              © 2025 AquaCalc. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="hover:text-aqua-400 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-aqua-400 transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-aqua-400 transition-colors">Demo</Link></li>
                <li><Link to="/try-demo" className="hover:text-aqua-400 transition-colors">Try Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/docs" className="hover:text-aqua-400 transition-colors">Documentation</Link></li>
                <li><Link to="/blog" className="hover:text-aqua-400 transition-colors">Blog</Link></li>
                <li><Link to="/research" className="hover:text-aqua-400 transition-colors">Research</Link></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-aqua-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-aqua-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-aqua-400 transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-aqua-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-aqua-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
