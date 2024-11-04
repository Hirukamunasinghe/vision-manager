import React, { useState } from "react";
import DashboardCard from "../Components/DashboardCard";
import { FaVideo, FaPlayCircle, FaEye, FaUpload, FaFilter, FaPlay, FaStop, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Video from "../components/Video";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Update based on your pagination logic

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Sample video data
  const videos = [
    { id: 1, name: "Video 1" },
    { id: 2, name: "Video 2" },
    { id: 3, name: "Video 3" },
    { id: 4, name: "Video 4" },
    { id: 5, name: "Video 5" },
    { id: 6, name: "Video 6" }
  ];

  // Pagination logic
  const videosPerPage = 2; // Number of videos per page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header />

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            <DashboardCard
              title="Total Videos"
              value="4,710"
              icon={<FaVideo />}
              color="text-blue-500"
            />
            <DashboardCard
              title="Running"
              value="3,721"
              icon={<FaPlayCircle />}
              color="text-orange-500"
            />
            <DashboardCard
              title="Detection"
              value="2,149"
              icon={<FaEye />}
              color="text-yellow-500"
            />
          </div>

          {/* Action Section */}
          <div className="flex flex-col space-y-6 mt-6 bg-white p-6 rounded-lg shadow-lg">
            {/* Button Section */}
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold mb-3 text-gray-800">
                Add Video or Stream Link to Process
              </span>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  <FaVideo className="mr-2" /> Add Camera Stream
                </button>
                <button className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
                  <FaUpload className="mr-2" /> Upload Video
                </button>
              </div>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col items-center border-t border-gray-300 pt-4">
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-600 text-lg" />
                <span className="font-semibold text-gray-700">Filter Options:</span>
                <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 transition duration-200">
                  <option value="">All</option>
                  <option value="videos">Videos</option>
                  <option value="running">Running</option>
                  <option value="detection">Detection</option>
                </select>
              </div>
            </div> 
            </div>
            <div>
              <h3 className="text-2xl font-medium text-black-400 mb-4"> Running Videos</h3>
            <Video/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
