import React from "react";
import { useState, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Enhanced Responsive Metric Card Component
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
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h3 className="text-gray-600 text-xs sm:text-sm font-medium leading-tight truncate">{title}</h3>
          </div>
          
          <div className="mb-2 sm:mb-3">
            <p className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-500 leading-tight">
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
      <div className="mt-3 sm:mt-4 h-8 sm:h-10 opacity-50">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trend}>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color.includes('cyan') ? '#06b6d4' : '#3b82f6'} 
              fill={color.includes('cyan') ? '#06b6d4' : '#3b82f6'} 
              fillOpacity={0.2}
              strokeWidth={1.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Demo component to show responsive behavior
const Demo = () => {
  const mockTrend = [
    { value: 20 },
    { value: 45 },
    { value: 30 },
    { value: 60 },
    { value: 55 },
    { value: 70 },
    { value: 65 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
          Responsive Dashboard
        </h1>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <MetricCard
            title="Total Revenue"
            value="$45.2K"
            growth="+12.5%"
            icon={({ className }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            )}
            color="from-green-400 to-blue-500"
            trend={mockTrend}
          />
          
          <MetricCard
            title="Active Users"
            value="2.4K"
            growth="+8.2%"
            icon={({ className }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            )}
            color="from-cyan-400 to-blue-500"
            trend={mockTrend}
          />
          
          <MetricCard
            title="Conversion Rate"
            value="3.2%"
            growth="+2.1%"
            icon={({ className }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )}
            color="from-purple-400 to-pink-500"
            trend={mockTrend}
          />
          
          <MetricCard
            title="Monthly Growth"
            value="18.7%"
            growth="+5.4%"
            icon={({ className }) => (
              <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )}
            color="from-yellow-400 to-orange-500"
            trend={mockTrend}
          />
        </div>
        
        {/* Mobile layout test */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Single Column (Mobile View)
          </h2>
          <div className="grid grid-cols-1 gap-4 max-w-md">
            <MetricCard
              title="Mobile Test Card"
              value="$1.2K"
              growth="+15.3%"
              icon={({ className }) => (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )}
              color="from-indigo-400 to-purple-500"
              trend={mockTrend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;