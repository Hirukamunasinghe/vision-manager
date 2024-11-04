import React from "react";
import { FaShoppingCart, FaHistory, FaLink, FaCog, FaBars } from "react-icons/fa";
import logovison from '../assets/logo 1.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#242B33] text-white p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-[80px]"
      }`}
    >
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between mb-8">
        <img src={logovison} alt="Logo Vision" className={`w-10 h-10 ${isOpen ? "" : "mx-auto"}`} />
        {isOpen && (
          <div className="flex flex-col">
            <span className="font-bold text-lg">Vision Manager</span>
            <span className="text-sm font-light text-gray-300">by Iterate.ai</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FaBars />
        </button>
      </div>

      {/* Menu Items */}
      <nav>
        <ul>
        <li className="mb-4">
  <a
    href="#"
    className="flex items-center space-x-2 p-2 rounded-lg transition duration-300 
      hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:scale-105"
  >
    <FaShoppingCart className="w-5 h-5" />
    {isOpen && <span>Dashboard</span>}
  </a>
</li>
<li className="mb-4">
  <a
    href="#"
    className="flex items-center space-x-2 p-2 rounded-lg transition duration-300 
      hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:scale-105"
  >
    <FaHistory className="w-5 h-5" />
    {isOpen && <span>History</span>}
  </a>
</li>
<li className="mb-4">
  <a
    href="#"
    className="flex items-center space-x-2 p-2 rounded-lg transition duration-300 
      hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:scale-105"
  >
    <FaLink className="w-5 h-5" />
    {isOpen && <span>Webhook</span>}
  </a>
</li>
<li className="mb-4">
  <a
    href="#"
    className="flex items-center space-x-2 p-2 rounded-lg transition duration-300 
      hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:scale-105"
  >
    <FaCog className="w-5 h-5" />
    {isOpen && <span>Settings</span>}
  </a>
</li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
