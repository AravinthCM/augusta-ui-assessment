import React from "react";
import { useState, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Enhanced Responsive Metric Card Component
const MetricCard = ({ 
  title = "Metric", 
  value = "0", 
  growth = "0%", 
  icon: Icon, 
  color = "from-blue-500 to-blue-600", 
  trend = [] 
}) => {
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

  // Safely determine chart color based on the gradient color prop
  const getChartColor = () => {
    if (!color || typeof color !== 'string') return '#3b82f6';
    
    if (color.includes('cyan')) return '#06b6d4';
    if (color.includes('green')) return '#10b981';
    if (color.includes('purple')) return '#8b5cf6';
    if (color.includes('red')) return '#ef4444';
    if (color.includes('orange')) return '#f59e0b';
    if (color.includes('pink')) return '#ec4899';
    return '#3b82f6'; // default blue
  };

  const chartColor = getChartColor();

  return (
    <div 
      className={`
        relative p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10
        shadow-lg group
        hover:bg-white/5 transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:shadow-2xl
        min-h-[180px] sm:min-h-[200px] lg:h-52 
        flex flex-col justify-between
        w-full
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}>
              {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
            </div>
            <h3 className="text-gray-600 text-xs sm:text-sm font-medium leading-tight truncate">{title}</h3>
          </div>
          
          <div className="mb-2 sm:mb-3">
            <p className="text-2xl sm:text-3xl font-bold text-blue-500 leading-tight">
              {value.includes('$') ? '$' : ''}{animatedValue.toFixed(value.includes('.') ? 1 : 0)}{value.includes('K') ? 'K' : value.includes('%') ? '%' : ''}
            </p>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <span className={`text-xs sm:text-sm font-medium ${growth.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
              {growth}
            </span>
            <span className="text-xs text-gray-400 whitespace-nowrap">vs last month</span>
          </div>
        </div>
        
        <div className={`transition-all duration-300 flex-shrink-0 ${isHovered ? 'opacity-100 scale-110' : 'opacity-70'}`}>
          <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
      </div>
      
      {/* Mini trend chart */}
      {trend && trend.length > 0 && (
        <div className="mt-3 sm:mt-4 h-8 sm:h-10 opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={chartColor} 
                fill={chartColor} 
                fillOpacity={0.2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MetricCard;