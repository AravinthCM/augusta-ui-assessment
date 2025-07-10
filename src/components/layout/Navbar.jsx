import React, { useState, useEffect } from "react";
import { LayoutDashboard, BarChart2, MessageCircle, Menu, X, ChevronRight, Sparkles, Shield, TrendingUp, Users, Star, ArrowRight } from "lucide-react";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Dashboard
            </h1>
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {['Home', 'Docs', 'Pricing'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
