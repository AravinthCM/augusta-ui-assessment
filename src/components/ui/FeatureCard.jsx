import React, { useState, useEffect } from "react";
import { LayoutDashboard, BarChart2, MessageCircle, Menu, X, ChevronRight, Sparkles, Shield, TrendingUp, Users, Star, ArrowRight } from "lucide-react";

const FeatureCard = ({ title, desc, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
        
        <div className={`mt-4 flex items-center text-blue-600 font-medium transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-2' : 'opacity-0'
        }`}>
          Learn more <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
