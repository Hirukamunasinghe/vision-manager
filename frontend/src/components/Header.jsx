import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-2 pl-10 rounded-full shadow-sm focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1114 3a7.5 7.5 0 012.65 14.65z" />
          </svg>
        </div>

        {/* Notification Icon */}
        <button className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-200">
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
        </button>

        {/* Profile Icon */}
        <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-500 transition duration-200" />
      </div>
    </header>
  );
};

export default Header;
