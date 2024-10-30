import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faLink, faExclamationTriangle, faPlus, faCamera, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const HeadDashboard = () => {
    const [videoType, setVideoType] = useState('video');
    const [videoLink, setVideoLink] = useState('');
    const [fps, setFps] = useState('default');
    const [fileName, setFileName] = useState('No file selected');
    const [storeVideo, setStoreVideo] = useState(false);
    const [friendlyName, setFriendlyName] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    
    const handleVideoTypeChange = (e) => setVideoType(e.target.value);
    const handleVideoLinkChange = (e) => setVideoLink(e.target.value);
    const handleFileUpload = (e) => setFileName(e.target.files[0]?.name || 'No file selected');
    const handleStoreVideoToggle = () => setStoreVideo(!storeVideo);
    const handleFriendlyNameChange = (e) => setFriendlyName(e.target.value);
    const handleModelChange = (e) => setSelectedModel(e.target.value);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-5">
            <a className="sidebar-brand d-flex align-items-center justify-content-center py-3" href="/vm/dashboard">
                <h4 className="login-heading flex items-center text-white">
                    <svg width="50" height="60" viewBox="0 0 79 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_469_12916)">
                            <path
                                d="M20 107.555L17.9687 106.329L15.9375 105.102C14.5156 104.284 12.4844 104.897 11.6719 106.329L0.5 137L20.8125 112.054C21.8281 110.418 21.4219 108.578 20 107.555Z"
                                fill="#F8762E"
                            ></path>
                            <path
                                d="M57.7813 62.9791C58.1875 62.3657 58.3906 61.7522 58.7969 61.3433C75.8594 31.2851 78.5 0 78.5 0C78.5 0 53.1094 17.7896 36.0469 47.8478C35.6406 48.4612 35.4375 49.0746 35.0313 49.4836L10.0469 51.3239C6.39063 52.3463 4.35938 56.0269 5.17188 59.7075L17.9688 86.2896C16.75 89.9702 15.7344 93.4463 15.125 96.309C14.9219 97.1269 15.5313 98.1493 16.5469 98.7627L25.0781 103.67C26.0938 104.284 27.1094 104.284 27.7188 103.67C29.9531 101.625 32.3906 99.1716 34.8281 96.1045L63.875 94.0597C67.5313 93.0373 69.5625 89.3567 68.75 85.6761L57.7813 62.9791ZM31.7813 61.1388L17.7656 61.5478V61.7522L24.2656 74.2254L21.2188 79.5418L11.875 60.9343L14.1094 57.0493L34.625 56.0269L31.7813 61.1388ZM49.4531 42.3269C50.6719 40.2821 53.3125 39.4642 55.3438 40.691C57.375 41.9179 58.1875 44.5761 56.9688 46.6209C55.75 48.6657 53.1094 49.4836 51.0781 48.2567C48.8438 47.0299 48.2344 44.3716 49.4531 42.3269ZM59.6094 88.7433L39.0938 89.9702L42.1406 84.6537L56.1563 84.2448V84.0403L49.6563 71.5672L52.7031 66.2508L62.0469 84.8582L59.6094 88.7433Z"
                                fill="#4D99E6"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_469_12916">
                                <rect width="78" height="137" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <b className="ml-2 text-xl">Interplay <br /> Vision Manager</b>
                    <span className="logo-subtext text-sm text-gray-400">by Iterate.ai</span>
                </h4>
            </a>
                <hr className="my-2 border-gray-500" />
                <nav>
                    <a href="/vm/dashboard" className="block py-2.5 px-4 rounded hover:bg-gray-700">Dashboard</a>
                    <a href="/vm/webhook/subscribe" className="block py-2.5 px-4 rounded hover:bg-gray-700">Webhook List</a>
                </nav>
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
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white p-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Dashboard</h1>
                
                {/* Video Input Section */}
                <div className="bg-gray-50 shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Add Video or Stream Link to Process</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Input Type</label>
                            <select value={videoType} onChange={handleVideoTypeChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                                <option value="video">Video (MP4, AVI, MKV...)</option>
                                <option value="stream">Camera Stream (RTSP, HTTP, HTTPS)</option>
                                <option value="image">Image (BMP, JPEG, PNG etc.)</option>
                            </select>
                        </div>

                        {videoType === 'stream' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Video Link</label>
                                <input
                                    type="text"
                                    value={videoLink}
                                    onChange={handleVideoLinkChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                    placeholder="rtsp://example.com/test.sdp"
                                />
                            </div>
                        )}

                   

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Upload Video</label>
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                accept="video/*"
                                className="hidden"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer mt-1 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow">
                                Click here to upload
                            </label>
                            <p className="mt-2 text-sm text-gray-500">{fileName}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Store Processed Video Stream</label>
                            <input
                                type="checkbox"
                                checked={storeVideo}
                                onChange={handleStoreVideoToggle}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Friendly Name</label>
                            <input
                                type="text"
                                value={friendlyName}
                                onChange={handleFriendlyNameChange}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                placeholder="Eg: Video_front_door"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Model</label>
                            <select value={selectedModel} onChange={handleModelChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                                <option value="model1">Model 1</option>
                                <option value="model2">Model 2</option>
                                <option value="model3">Model 3</option>
                            </select>
                        </div>

                        <button type="submit" className="mt-6 w-52 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded shadow">
                            Process
                        </button>
                    </form>
                </div>

                {/* Status Section */}
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                        Status
                    </h2>
                </div>
            </main>

            {/* Scroll to Top Button */}
            <button className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600">
                <FontAwesomeIcon icon={faAngleUp} />
            </button>
        </div>
    );
};

export default HeadDashboard;
