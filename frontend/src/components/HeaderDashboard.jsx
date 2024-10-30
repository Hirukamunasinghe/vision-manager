import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faLink, faExclamationTriangle, faPlus, faCamera, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

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
            <Sidebar/>
            {/* Main Content */}
            <main className="flex-1 bg-white p-10">
                <h1 className="text-4xl font-extrabold text-gray-600 mb-6">Dashboard</h1>
                
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
