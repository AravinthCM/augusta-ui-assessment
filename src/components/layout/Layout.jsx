import React, { useState, useEffect } from "react";
import { LayoutDashboard, BarChart2, MessageCircle, Menu, X, ChevronRight, Sparkles, Shield, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// Enhanced Layout Component
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-1 relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;
