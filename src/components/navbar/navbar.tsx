import React, { useState, useEffect } from "react";
import skren from '../../assets/Screen.png';
import { FaSun, FaMoon } from "react-icons/fa"; // Quyosh va oy ikonkalari

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme o'zgartirishni saqlash (localStorage)
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Left Side - Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={skren} alt="Logo" className="w-6 h-6" />
          <span className="text-2xl font-semibold text-white">DOML</span>
        </a>

        {/* Middle - Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <span>Product</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Team
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Enterprise
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <span>Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Marketplace
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <span>Pricing</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right Side - Search and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search DOML"
              className="w-64 py-2 pl-4 pr-10 text-sm text-gray-300 bg-gray-800 border border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg
              className="absolute w-4 h-4 text-gray-400 right-3 top-1/2 transform -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M0.826619 3.59131C0.826619 1.93834 2.16661 0.598347 3.81958 0.598347H13.4719C15.1248 0.598347 16.4648 1.93834 16.4648 3.59131V14.366C16.4648 16.0189 15.1248 17.3589 13.4719 17.3589H3.81958C2.16661 17.3589 0.826619 16.0189 0.826619 14.366V3.59131Z"
                stroke="#515868"
                strokeWidth="1.19718"
              />
              <line
                x1="6.39769"
                y1="14.3911"
                x2="9.76477"
                y2="4.85106"
                stroke="#7A7D86"
                strokeWidth="1.19718"
              />
            </svg>
          </div>

          {/* Dark Mode Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-white hover:text-gray-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <FaMoon className="w-6 h-6" />
            ) : (
              <FaSun className="w-6 h-6" />
            )}
          </button>

          {/* Buttons */}
          <button className="px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-gray-900">
            Sign in
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-500 rounded-lg hover:bg-gray-800">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
