import React from "react";
import { IoVideocam } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className="flex min-h-screen">
            <aside className="fixed h-full bg-gray-800 text-white w-64 flex flex-col gap-[350px] py-7 px-5 overflow-hidden">
                <div>
                    <a className="sidebar-brand flex items-center justify-center py-3" href="/vm/dashboard">
                        <h4 className="login-heading flex items-center text-white">
                            <svg
                                width="50"
                                height="60"
                                viewBox="0 0 79 137"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_469_12916)">
                                    <path
                                        d="M20 107.555L17.9687 106.329L15.9375 105.102C14.5156 104.284 12.4844 104.897 11.6719 106.329L0.5 137L20.8125 112.054C21.8281 110.418 21.4219 108.578 20 107.555Z"
                                        fill="#F8762E"
                                    />
                                    <path
                                        d="M57.7813 62.9791C58.1875 62.3657 58.3906 61.7522 58.7969 61.3433C75.8594 31.2851 78.5 0 78.5 0C78.5 0 53.1094 17.7896 36.0469 47.8478C35.6406 48.4612 35.4375 49.0746 35.0313 49.4836L10.0469 51.3239C6.39063 52.3463 4.35938 56.0269 5.17188 59.7075L17.9688 86.2896C16.75 89.9702 15.7344 93.4463 15.125 96.309C14.9219 97.1269 15.5313 98.1493 16.5469 98.7627L25.0781 103.67C26.0938 104.284 27.1094 104.284 27.7188 103.67C29.9531 101.625 32.3906 99.1716 34.8281 96.1045L63.875 94.0597C67.5313 93.0373 69.5625 89.3567 68.75 85.6761L57.7813 62.9791ZM31.7813 61.1388L17.7656 61.5478V61.7522L24.2656 74.2254L21.2188 79.5418L11.875 60.9343L14.1094 57.0493L34.625 56.0269L31.7813 61.1388ZM49.4531 42.3269C50.6719 40.2821 53.3125 39.4642 55.3438 40.691C57.375 41.9179 58.1875 44.5761 56.9688 46.6209C55.75 48.6657 53.1094 49.4836 51.0781 48.2567C48.8438 47.0299 48.2344 44.3716 49.4531 42.3269ZM59.6094 88.7433L39.0938 89.9702L42.1406 84.6537L56.1563 84.2448V84.0403L49.6563 71.5672L52.7031 66.2508L62.0469 84.8582L59.6094 88.7433Z"
                                        fill="#4D99E6"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_469_12916">
                                        <rect width="78" height="137" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <b className="ml-2 text-xl">Interplay <br /> Vision Manager</b>
                            <span className="logo-subtext text-sm text-gray-400">by Iterate.ai</span>
                        </h4>
                    </a>
                    <hr className="my-2 border-gray-500" />
                    <nav className="mt-4">
                        <div className="flex items-center mb-4">
                            <IoVideocam />
                            <a href="/dashboard" className="ml-2 block px-2 rounded hover:bg-gray-700">Dashboard</a>
                        </div>
                        <div className="flex items-center py-[15px]">
                            <FaLink />
                            <a href="vm/webhook/subscribe" className="ml-2 block px-2 rounded hover:bg-gray-700">Webhook List</a>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <hr className="my-2 border-gray-500" />
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
                        onClick={() => console.log("Logout")}
                    >
                        Logout
                    </button>
                    <footer className="text-center text-gray-400">
                        <span>2024 Interplay by Iterate.ai</span>
                    </footer>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
