import React from "react";
import { useState, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
// Enhanced Metric Card Component
const MetricCard = ({ title, value, growth, icon: Icon, color, trend }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const timer = setTimeout(() => {
      let current = 0;
      const increment = numericValue / 50;
      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setAnimatedValue(numericValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(current);
        }
      }, 20);
    }, 200);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div 
      className={`
        relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10
        shadow-lg group
        hover:bg-white/5 transition-all duration-300 group cursor-pointer
        transform hover:scale-105 hover:shadow-2xl
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          </div>
          
          <div className="mb-2">
            <p className="text-3xl font-bold text-blue-500">
              {value.includes('$') ? '$' : ''}{animatedValue.toFixed(value.includes('.') ? 1 : 0)}{value.includes('K') ? 'K' : value.includes('%') ? '%' : ''}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${growth.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
              {growth}
            </span>
            <span className="text-xs text-gray-400">vs last month</span>
          </div>
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-70'}`}>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      {/* Mini trend chart */}
      <div className="mt-4 h-8 opacity-50">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trend}>
            <Area type="monotone" dataKey="value" stroke={color.includes('cyan') ? '#06b6d4' : '#3b82f6'} fill={color.includes('cyan') ? '#06b6d4' : '#3b82f6'} fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricCard;
