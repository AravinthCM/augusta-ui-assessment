import React from "react";
import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold">AI Dashboard</span>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Empowering businesses with intelligent data visualization and AI-driven insights.
        </p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">API</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>© {new Date().getFullYear()} AI Dashboard. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

