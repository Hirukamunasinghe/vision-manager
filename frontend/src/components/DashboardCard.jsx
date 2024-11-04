import React from "react";

const DashboardCard = ({ title, value, icon, color, isSidebarOpen }) => {
  return (
    <div
      className={`p-4 bg-white shadow-lg rounded-lg flex flex-col items-center transition-all duration-300 
        ${isSidebarOpen ? 'w-60' : 'max-w-sm w-60'}  // Set a max width for better appearance
        border border-gray-300 hover:shadow-2xl hover:bg-gray-100 ease-in-out cursor-pointer 
        transform hover:scale-105 hover:opacity-90`}
    >
      <div className="flex items-center space-x-2 mb-2">
        <div className={`text-2xl ${color}`}>{icon}</div>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
};

export default DashboardCard;
