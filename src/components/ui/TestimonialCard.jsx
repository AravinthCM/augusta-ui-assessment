import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, quote, role, rating = 5 }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    
    <p className="text-gray-700 mb-4 italic leading-relaxed">"{quote}"</p>
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm">{name[0]}</span>
      </div>
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);


export default TestimonialCard;
