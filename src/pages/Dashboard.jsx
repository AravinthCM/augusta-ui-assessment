import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  BarChart3,
  Clock,
  BarChart2,
  Menu,
  X,
  TrendingUp,
  Users,
  ArrowLeft,
  Bell,
  Filter,
  Download,
  Eye,
  Activity,
  DollarSign,
  Target,
  Award,
  Settings,
  RefreshCw,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui";
import MetricCard from "../components/charts/MetricCard";
import Sidebar from "../components/layout/Sidebar";
import useIsMobile from "../hooks/useIsMobile";

const AdvancedLineChart = ({ data, title }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Last 7 days</span>
          <RefreshCw className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const AdvancedPieChart = ({ data, title }) => {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <Eye className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Activity Feed Component
const ActivityFeed = () => {
  const activities = [
    {
      type: "user",
      message: "New user registration",
      time: "2 min ago",
      color: "bg-green-500",
    },
    {
      type: "sale",
      message: "Sale completed: $1,234",
      time: "5 min ago",
      color: "bg-blue-500",
    },
    {
      type: "alert",
      message: "Server response time high",
      time: "12 min ago",
      color: "bg-red-500",
    },
    {
      type: "update",
      message: "Dashboard updated",
      time: "1 hour ago",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`w-3 h-3 rounded-full ${activity.color}`}></div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm">{activity.message}</p>
              <p className="text-gray-500 text-xs">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const barData = [
    { name: "Jan", users: 3000 },
    { name: "Feb", users: 4000 },
    { name: "Mar", users: 2000 },
    { name: "Apr", users: 2780 },
    { name: "May", users: 1890 },
    { name: "Jun", users: 2390 },
  ];

  const lineData = [
    { name: "Mon", revenue: 2000 },
    { name: "Tue", revenue: 2500 },
    { name: "Wed", revenue: 2200 },
    { name: "Thu", revenue: 2800 },
    { name: "Fri", revenue: 3200 },
    { name: "Sat", revenue: 3800 },
    { name: "Sun", revenue: 4200 },
  ];

  const pieData = [
    { name: "Desktop", value: 400 },
    { name: "Mobile", value: 300 },
    { name: "Tablet", value: 200 },
    { name: "Other", value: 100 },
  ];

  const trendData = [
    { value: 10 },
    { value: 20 },
    { value: 15 },
    { value: 25 },
    { value: 22 },
    { value: 30 },
    { value: 28 },
  ];

  const useIsMobile = (breakpoint = 640) => {
    const [isMobile, setIsMobile] = useState(
      () => window.innerWidth < breakpoint
    );

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useIsMobile();
   return (
    <>
      {/* Include mobile sidebar */}
      {isMobile && (
        <Sidebar
          sidebarOpen={!isMobile}
          setSidebarOpen={() => {}}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      )}

      <Layout
        showNavbar={false}
        showSidebar={!isMobile}
        bgClassName="bg-gray-50"
      >
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* Clean Header Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                {isMobile && (
                  <button
                    onClick={() => setMobileOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Menu className="w-4 h-4 text-gray-600" />
                  </button>
                )}

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.history.back()}
                  isMobile={isMobile}
                  className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  isMobile={isMobile}
                  className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-lg border border-gray-200"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                  />
                  <span className="hidden sm:inline">Refresh</span>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                  <Bell className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Clean Dashboard Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Dashboard Overview
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Welcome back! Here's what's happening with your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Stats Summary */}
              <div className="flex gap-8">
                <div className="text-center sm:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Today
                  </p>
                  <p className="text-lg font-semibold text-gray-900">$2,847</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    This Week
                  </p>
                  <p className="text-lg font-semibold text-gray-900">$12,453</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Active Users
                  </p>
                  <p className="text-lg font-semibold text-gray-900">1,247</p>
                </div>
              </div>
            </div>

            {/* Clean Status Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  All systems operational
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleTimeString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600">
                  +8.2% from last week
                </span>
              </div>
            </div>
          </div>

          {/* Clean Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <MetricCard
              title="Total Users"
              value="12.4K"
              growth="+8.2%"
              icon={Users}
              trend={trendData}
            />
            <MetricCard
              title="Revenue"
              value="$54.2K"
              growth="+3.2%"
              icon={DollarSign}
              trend={trendData}
            />
            <MetricCard
              title="Sessions"
              value="8.1K"
              growth="-1.1%"
              icon={Activity}
              trend={trendData}
            />
            <MetricCard
              title="Conversion"
              value="4.5%"
              growth="+0.5%"
              icon={Target}
              trend={trendData}
            />
          </div>

          {/* Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-3">
              <AdvancedLineChart data={lineData} title="Revenue Trend" />
            </div>
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="mb-6">
            <AdvancedPieChart data={pieData} title="Traffic Sources" />
          </div>

          {/* Clean Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Users, label: "Add User" },
                { icon: BarChart2, label: "Generate Report" },
                { icon: Settings, label: "Settings" },
                { icon: Award, label: "Achievements" }
              ].map((action, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <action.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
