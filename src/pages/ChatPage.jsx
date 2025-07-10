import React, { useState, useRef, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import ChatInput from '../components/chat/ChatInput';
import ChatMessage from '../components/chat/ChatMessage';

// Chat Page Component
const ChatPage = ({ setCurrentPage }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: "9:33 PM"
    },
    {
      id: 2,
      message: "Hi! Can you help me analyze my business data?",
      isUser: true,
      timestamp: "9:34 PM"
    },
    {
      id: 3,
      message: "Absolutely! I can help you with data analysis, visualization, and insights. What specific data would you like to explore?",
      isUser: false,
      timestamp: "9:34 PM"
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        message: "I understand you're looking for help with that. Let me analyze your request and provide you with the best possible assistance.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Chat Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">AI Assistant</h2>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.message}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="max-w-4xl mx-auto w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;