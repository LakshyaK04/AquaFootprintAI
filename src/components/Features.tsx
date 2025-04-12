
import React from 'react';
import { BarChart3, Cloud, Droplet, Leaf, LineChart, FileType, Database, Github, Film } from 'lucide-react';

const featureItems = [
  {
    icon: <BarChart3 className="h-10 w-10 text-aqua-600" />,
    title: "AI/ML Model",
    description: "Leverages machine learning to estimate crop-specific water consumption patterns."
  },
  {
    icon: <Droplet className="h-10 w-10 text-aqua-600" />,
    title: "Web Dashboard",
    description: "Intuitive interface with input forms for crop type, location, irrigation method, and more."
  },
  {
    icon: <Cloud className="h-10 w-10 text-aqua-600" />,
    title: "API Integration",
    description: "Connects with satellite and climate APIs for real-time data fetching."
  },
  {
    icon: <LineChart className="h-10 w-10 text-aqua-600" />,
    title: "Visualizations",
    description: "Interactive charts for water usage trends and comparisons across crops/regions."
  },
  {
    icon: <Leaf className="h-10 w-10 text-aqua-600" />,
    title: "Recommendation Engine",
    description: "Smart suggestions for sustainable practices and crop alternatives."
  },
  {
    icon: <FileType className="h-10 w-10 text-aqua-600" />,
    title: "Downloadable Reports",
    description: "Comprehensive PDF/CSV reports summarizing water footprint analysis."
  },
  {
    icon: <Database className="h-10 w-10 text-aqua-600" />,
    title: "Backend System",
    description: "Robust infrastructure for efficient data processing and storage."
  },
  {
    icon: <Github className="h-10 w-10 text-aqua-600" />,
    title: "GitHub Repository",
    description: "Complete source code with detailed setup instructions in README."
  },
  {
    icon: <Film className="h-10 w-10 text-aqua-600" />,
    title: "Demo Video",
    description: "Detailed walkthrough showcasing platform workflow and features."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Key Features & Deliverables</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive solution provides all the tools needed to analyze water usage and implement sustainable agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-feature-gradient bg-opacity-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-aqua-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
