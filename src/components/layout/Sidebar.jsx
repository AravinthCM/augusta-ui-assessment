import React from "react";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Settings,
  Menu,
  X,
  Sparkles,
  Shield,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className={`${sidebarOpen ? 'w-52' : 'w-18'} transition-all duration-300 bg-gray-200 border-r border-gray-200 flex flex-col`}>
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              {sidebarOpen && <span className="font-semibold text-gray-800">AI Dashboard</span>}
              {/* <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="ml-auto rounded-lg hover:bg-gray-100 transition-colors"
              >
                {sidebarOpen ? <X className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
              </button> */}
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: BarChart2, label: 'Analytics' },
              { icon: Users, label: 'Users' },
              { icon: Settings, label: 'Settings' },
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>
          
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-4 border-t border-gray-200 text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
    </>
  );
};

export default Sidebar;
