import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        

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
