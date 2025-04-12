
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropletIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <DropletIcon className="h-6 w-6 text-aqua-600" />
            <span className="font-bold text-gray-900 text-xl">AquaFootprint AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-aqua-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-aqua-600 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-aqua-600 transition-colors">Benefits</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-aqua-200 text-aqua-700 hover:bg-aqua-50">
              <Link to="https://youtu.be/CS9geRQpY4U">Walkthrough Video</Link>
            </Button>
            <Button asChild className="bg-aqua-600 hover:bg-aqua-700 text-white">
              <Link to="https://ai-powered-water-footprint-calculator.streamlit.app">Try Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-aqua-600 transition-colors py-2">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-aqua-600 transition-colors py-2">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-aqua-600 transition-colors py-2">Benefits</button>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
              <Button asChild variant="outline" className="border-aqua-200 text-aqua-700 hover:bg-aqua-50 w-full">
                <Link to="/demo" onClick={toggleMenu}>View Demo</Link>
              </Button>
              <Button asChild className="bg-aqua-600 hover:bg-aqua-700 text-white w-full">
                <Link to="/try-demo" onClick={toggleMenu}>Try Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
