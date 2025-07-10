import React from "react";
import { 
  Button, 
  FeatureCard, 
  CTASection, 
  TestimonialCard, 
  Footer,
  StatsSection
} from "../components/ui";
import Layout from "../components/layout/Layout";
import { LayoutDashboard, BarChart2, MessageCircle, Menu, X, ChevronRight, Sparkles, Shield, TrendingUp, Users, Star, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-600 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Now with AI Chat Assistant</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              AI Dashboard
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Visualize data. Chat smart. Make decisions.
            <span className="block mt-2 text-lg text-gray-500">
              Transform your business intelligence with AI-powered insights
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">
              Get Started Free
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>50K+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make data-driven decisions with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="Real-time Analytics" 
              desc="Monitor live metrics and KPIs with beautiful, interactive visualizations that update in real-time." 
            />
            <FeatureCard 
              icon={MessageCircle}
              title="AI Chat Assistant" 
              desc="Ask questions in natural language. Your AI assistant analyzes data and provides instant insights." 
            />
            <FeatureCard 
              icon={Shield}
              title="Enterprise Security" 
              desc="Bank-grade security with end-to-end encryption, SSO, and compliance with industry standards." 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Loved by Teams
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Mitchell" 
              role="Data Analyst at TechCorp"
              quote="This dashboard completely transformed how our team analyzes data. The AI insights are incredible!" 
              rating={5}
            />
            <TestimonialCard 
              name="John Davis" 
              role="CEO at StartupXYZ"
              quote="Simple, powerful, and intuitive. My team adopted it in minutes, not weeks." 
              rating={5}
            />
            <TestimonialCard 
              name="Emily Chen" 
              role="Product Manager"
              quote="The real-time analytics helped us increase our conversion rate by 40% in just two months." 
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Landing;