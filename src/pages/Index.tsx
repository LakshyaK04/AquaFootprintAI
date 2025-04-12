
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import AboutProject from '@/components/AboutProject';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutProject />
        <Features />
        <HowItWorks />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
