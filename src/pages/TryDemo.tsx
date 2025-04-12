
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TryDemo = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/" className="flex items-center text-gray-600 hover:text-aqua-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Try Our Interactive Demo</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Enter your farm details below to see how our water footprint calculator can help optimize your agricultural water usage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {!submitted ? (
              <Card className="shadow-md w-full">
                <CardHeader>
                  <CardTitle>Farm Water Footprint Calculator</CardTitle>
                  <CardDescription>Enter your agricultural details to calculate water usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="crop-type">Crop Type</Label>
                        <Select defaultValue="corn">
                          <SelectTrigger id="crop-type">
                            <SelectValue placeholder="Select crop" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corn">Corn</SelectItem>
                            <SelectItem value="wheat">Wheat</SelectItem>
                            <SelectItem value="rice">Rice</SelectItem>
                            <SelectItem value="soybean">Soybean</SelectItem>
                            <SelectItem value="cotton">Cotton</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="farm-area">Farm Area (hectares)</Label>
                        <Input id="farm-area" type="number" min="1" defaultValue="10" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="region">Region/Location</Label>
                        <Select defaultValue="california">
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="california">California, USA</SelectItem>
                            <SelectItem value="midwest">Midwest, USA</SelectItem>
                            <SelectItem value="maharashtra">Maharashtra, India</SelectItem>
                            <SelectItem value="punjab">Punjab, India</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="irrigation-method">Irrigation Method</Label>
                        <Select defaultValue="drip">
                          <SelectTrigger id="irrigation-method">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="drip">Drip Irrigation</SelectItem>
                            <SelectItem value="sprinkler">Sprinkler</SelectItem>
                            <SelectItem value="flood">Flood Irrigation</SelectItem>
                            <SelectItem value="center-pivot">Center Pivot</SelectItem>
                            <SelectItem value="rainfed">Rainfed (No Irrigation)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="soil-type">Soil Type</Label>
                        <Select defaultValue="loam">
                          <SelectTrigger id="soil-type">
                            <SelectValue placeholder="Select soil type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sandy">Sandy</SelectItem>
                            <SelectItem value="clay">Clay</SelectItem>
                            <SelectItem value="loam">Loam</SelectItem>
                            <SelectItem value="silt">Silt</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="season">Growing Season</Label>
                        <Select defaultValue="summer">
                          <SelectTrigger id="season">
                            <SelectValue placeholder="Select season" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spring">Spring</SelectItem>
                            <SelectItem value="summer">Summer</SelectItem>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="winter">Winter</SelectItem>
                            <SelectItem value="year-round">Year-round</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-aqua-600 hover:bg-aqua-700 text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Calculating...
                        </>
                      ) : (
                        "Calculate Water Footprint"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-md w-full">
                <CardHeader>
                  <CardTitle>Water Footprint Results</CardTitle>
                  <CardDescription>Analysis based on your farm details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-aqua-50 border border-aqua-100 rounded-lg p-4">
                      <h3 className="font-medium text-aqua-800 mb-2">Total Water Footprint</h3>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-aqua-700">4,250</span>
                        <span className="text-gray-600 mb-1">m³/hectare/year</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        This is 15% lower than the average for corn in California
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-800 mb-2">Blue Water</h3>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-blue-600">2,800</span>
                          <span className="text-gray-600 mb-0.5">m³/ha/year</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Irrigation water from surface and groundwater
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-800 mb-2">Green Water</h3>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-green-600">1,450</span>
                          <span className="text-gray-600 mb-0.5">m³/ha/year</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Rainwater stored in soil and used by plants
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-medium text-gray-800 mb-3">Water-Saving Recommendations</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-leaf-600 font-bold mr-2">•</span>
                          <span className="text-gray-700">Switch to precision drip irrigation to reduce water usage by 20%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-leaf-600 font-bold mr-2">•</span>
                          <span className="text-gray-700">Implement soil moisture sensors to optimize irrigation scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-leaf-600 font-bold mr-2">•</span>
                          <span className="text-gray-700">Consider drought-resistant corn varieties for your region</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full bg-aqua-600 hover:bg-aqua-700 text-white"
                      onClick={() => setSubmitted(false)}
                    >
                      Calculate Another Scenario
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>How We Calculate Water Footprint</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our AI model integrates multiple data sources to provide accurate water footprint calculations:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Historical climate data for your region</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Crop-specific water requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Soil moisture retention properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Irrigation system efficiency ratings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Evapotranspiration models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Satellite imagery for real-time crop conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Why Water Footprint Matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Understanding your agricultural water footprint is crucial for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Sustainable resource management in water-stressed regions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Reducing operational costs through efficiency improvements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Meeting environmental compliance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-aqua-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">Building climate resilience for future growing seasons</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TryDemo;
