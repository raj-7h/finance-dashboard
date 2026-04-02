import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const base =
    "rounded-xl font-medium transition-all duration-200 flex items-center justify-center w-full sm:w-auto active:scale-95";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-3 py-2 text-sm md:px-4",
    lg: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
