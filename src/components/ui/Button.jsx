import React from "react";

const Button = ({ children, className = "", onClick, type = "button", disabled = false, variant = "primary", size = "md", isMobile = false }) => {
  const baseStyle = "font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200 hover:text-gray-800",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {isMobile ? (
      React.Children.toArray(children).find(child => typeof child === "object")
    ) : (
      children
    )}
    </button>
  );
};

export default Button;
