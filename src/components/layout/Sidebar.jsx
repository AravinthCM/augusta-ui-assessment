import React from "react";
import {
  LayoutDashboard,
  BarChart2,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: MessageCircle, label: "Chat", active: false },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:relative top-0 left-0 z-50 w-20 h-full bg-white/90 backdrop-blur-lg shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${sidebarOpen ? "md:block" : "hidden md:block"}
        `}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-100 flex justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Menu */}
        <ul className="flex flex-col items-center py-4 space-y-6">
          {menuItems.map((item) => (
            <li key={item.label} className="w-full">
              <a
                href="#"
                className={`
                  flex flex-col items-center justify-center gap-1 w-full py-2
                  text-xs font-medium transition-all duration-200
                  ${item.active
                    ? "text-blue-600 bg-gradient-to-b from-blue-50 to-purple-50 rounded-md"
                    : "text-gray-600 hover:text-blue-600"}
                `}
              >
                <item.icon size={20} />
                <span className="text-[11px]">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
