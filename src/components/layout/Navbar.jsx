import React, { useState, useEffect } from "react";
import { LayoutDashboard, BarChart2, MessageCircle, Menu, X, ChevronRight, Sparkles, Shield, TrendingUp, Users, Star, ArrowRight, Search, Bell } from "lucide-react";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-200 to-purple-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Dashboard</h1>
              <p className="text-xs text-gray-500">{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-gray-400">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray placeholder-gray-300 text-sm focus:outline-none w-32"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors text-white">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-bounce"></span>
            </button>
            
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
