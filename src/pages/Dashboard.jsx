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
  LayoutDashboard,
  BarChart2,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  ArrowLeft,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  Activity,
  DollarSign,
  ShoppingCart,
  Calendar,
  Globe,
  Zap,
  Target,
  Award,
  Settings,
  RefreshCw,
  MoreHorizontal,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui";
import MetricCard from "../components/charts/MetricCard";
import Sidebar from "../components/layout/Sidebar";
import useIsMobile from "../hooks/useIsMobile";

const AdvancedBarChart = ({ data, title }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-500">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-500">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
            <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

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
        bgClassName="bg-gray-200"
      >
        <div className="p-6 space-y-6 overflow-y-auto h-full rounded-2xl bg-gray-100 shadow-lg m-2">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {isMobile && (
                <button
                  onClick={() => setMobileOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors bg-white shadow"
                >
                  <Menu className="w-4 h-4 text-gray-700" />
                </button>
              )}

              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.history.back()}
                isMobile={isMobile}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              isMobile={isMobile}
            >
              <RefreshCw
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>

          {/* Dashboard Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Dashboard Overview
                </span>
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening with your business.
              </p>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <MetricCard
              title="Total Users"
              value="12.4K"
              growth="+8.2%"
              icon={Users}
              color="from-blue-500 to-blue-600"
              trend={trendData}
            />
            <MetricCard
              title="Revenue"
              value="$54.2K"
              growth="+3.2%"
              icon={DollarSign}
              color="from-green-500 to-green-600"
              trend={trendData}
            />
            <MetricCard
              title="Sessions"
              value="8.1K"
              growth="-1.1%"
              icon={Activity}
              color="from-purple-500 to-purple-600"
              trend={trendData}
            />
            <MetricCard
              title="Conversion"
              value="4.5%"
              growth="+0.5%"
              icon={Target}
              color="from-orange-500 to-orange-600"
              trend={trendData}
            />
          </div>

          {/* Line Chart */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 lg:col-span-3">
              <AdvancedLineChart data={lineData} title="Revenue Trend" />
            </div>
          </div>

          {/* Pie + Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AdvancedPieChart data={pieData} title="Traffic Sources" />
            </div>
            <ActivityFeed />
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Users,
                  label: "Add User",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: BarChart2,
                  label: "Generate Report",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Settings,
                  label: "Settings",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Award,
                  label: "Achievements",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((action, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
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
