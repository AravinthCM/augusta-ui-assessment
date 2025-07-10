import React from "react";
import Button from "./Button";

const CTASection = () => (
  <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
    </div>
    
    <div className="relative text-center max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Start exploring your data like 
        <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
          never before
        </span>
      </h2>
      <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
        Join thousands of professionals who supercharge their decision making with AI-powered insights.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
          Start Free Trial
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:!text-blue-600"
        >
          Watch Demo
        </Button>
      </div>
    </div>
  </div>
);
export default CTASection;
