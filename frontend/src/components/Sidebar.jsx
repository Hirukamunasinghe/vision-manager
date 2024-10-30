import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faLink } from '@fortawesome/free-solid-svg-icons';
import logvision from '../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-white w-64 h-screen fixed flex flex-col justify-between py-7 px-5 overflow-y-auto">
                <div>
                    <a className="sidebar-brand d-flex align-items-center justify-content-center py-3" href="/vm/dashboard">
                        <h4 className="login-heading flex items-center text-white">
                            <svg width="50" height="60" viewBox="0 0 79 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG content */}
                            </svg>
                            <img src={logvision} alt="Logo" />
                        </h4>
                    </a>
                    <hr className="my-2 border-gray-500" />
                    <nav>
                        <a href="/dashboard" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
                            <FontAwesomeIcon icon={faVideo} className="w-5 h-5 mr-2 text-gray-300 hover:text-white" />
                            Interplay Vision Manager
                        </a>
                        <a href="vm/webhook/subscribe" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
                            <FontAwesomeIcon icon={faLink} className="w-5 h-5 mr-2 text-gray-300 hover:text-white" />
                            Webhook List
                        </a>
                        <hr className="my-2 border-gray-500" />
                    </nav>
                </div>

                <div>
                    <hr className="my-2 border-gray-500" />
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full mt-4"
                        onClick={() => console.log("Logout")}
                    >
                        Logout
                    </button>
                    <footer className="text-center text-gray-400 mt-4">
                        <span>2024 Interplay by Iterate.ai</span>
                    </footer>
                </div>
            </aside>

         
        </div>
    );
};

export default Sidebar;
