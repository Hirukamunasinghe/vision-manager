import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

const HeaderDashboard = () => {
    const [videoType, setVideoType] = useState('video');
    const [videoLink, setVideoLink] = useState('');
    const [fileName, setFileName] = useState('No file selected');
    const [storeVideo, setStoreVideo] = useState(false);
    const [friendlyName, setFriendlyName] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [fps, setFps] = useState('');
    const [capturedImage, setCapturedImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const handleVideoTypeChange = (e) => setVideoType(e.target.value);
    const handleFileUpload = (e) => setFileName(e.target.files[0]?.name || 'No file selected');
    const handleFriendlyNameChange = (e) => setFriendlyName(e.target.value);
    const handleModelChange = (e) => setSelectedModel(e.target.value);
    const handleStoreVideoToggle = () => setStoreVideo((prevStoreVideo) => !prevStoreVideo);
    const handleVideoLinkChange = (e) => setVideoLink(e.target.value);
    const handleFpsChange = (e) => setFps(e.target.value);

    useEffect(() => {
        if (videoType === 'stream' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((err) => console.error("Error accessing camera: ", err));
        } else if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    }, [videoType]);

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            setCapturedImage(imageData); // Set the captured image as base64 data
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar className="w-64" />

            {/* Main Content */}
            <main className="flex-1 ml-64 p-10 bg-white">
                <h1 className="text-4xl font-extrabold text-gray-600 mb-6">Dashboard</h1>
                
                {/* Video Input Section */}
                <div className="bg-gray-50 shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Add Video or Stream Link to Process</h2>
                    <form className="space-y-4">
                        <div className="flex items-center space-x-6 w-full">
                            {/* Input Type */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700">Input Type</label>
                                <select
                                    value={videoType}
                                    onChange={handleVideoTypeChange}
                                    className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                >
                                    <option value="video">Video (MP4, AVI, MKV...)</option>
                                    <option value="stream">Camera Stream (RTSP, HTTP, HTTPS)</option>
                                    <option value="image">Image (BMP, JPEG, PNG etc.)</option>
                                </select>
                            </div>

                            {/* Upload Video */}
                            {videoType === 'video' && (
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-700 mt-4 ml-6">Upload Video</label>
                                    <div className="flex items-center space-x-4 p-2">
                                        <input
                                            type="file"
                                            onChange={handleFileUpload}
                                            accept="video/*"
                                            className="hidden"
                                            id="file-upload"
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer bg-blue-500 text-white py-2 px-3 rounded-md shadow hover:bg-blue-600 transition duration-150"
                                        >
                                            Click to Upload
                                        </label>
                                        <p className="text-sm text-gray-500">{fileName}</p>
                                    </div>
                                </div>
                            )}

                            {/*_ Store Processed Video Stream */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-700">Store Processed Video Stream</label>
                                <button
                                    onClick={handleStoreVideoToggle}
                                    className={`w-14 h-7 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 font-medium text-white ${
                                        storeVideo ? 'bg-blue-500' : 'bg-gray-500'
                                    }`}
                                >
                                    {storeVideo ? 'On' : 'Off'}
                                </button>
                            </div>
                        </div>

                        {/* Conditional Inputs for Camera Stream */}
                        {videoType === 'stream' && (
                            <>
                                {/* Video Link */}
                                <div className="mt-4">
                                    <label className="text-sm font-medium text-gray-700">Video Link</label>
                                    <input
                                        type="text"
                                        value={videoLink}
                                        onChange={handleVideoLinkChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                        placeholder="Enter stream URL (e.g., RTSP, HTTP, HTTPS)"
                                    />
                                </div>

                                {/* FPS Selection */}
                                <div className="mt-4">
                                    <label className="text-sm font-medium text-gray-700">Frames per Second (FPS)</label>
                                    <input
                                        type="number"
                                        value={fps}
                                        onChange={handleFpsChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                        placeholder="Enter FPS (e.g., 30)"
                                    />
                                </div>

                                {/* Live Camera Feed Preview */}
                                <div className="mt-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Live Camera Feed</h3>
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        className="w-full h-64 bg-gray-200 rounded-lg shadow"
                                    ></video>
                                    <button
                                        onClick={captureImage}
                                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                    >
                                        Capture Image
                                    </button>
                                    <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
                                </div>
                            </>
                        )}

                        {/* Conditional Rendering of Friendly Name and Select Model */}
                        {videoType !== 'stream' && (
                            <div className="flex space-x-4">
                                {/* Friendly Name */}
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">Friendly Name</label>
                                    <input
                                        type="text"
                                        value={friendlyName}
                                        onChange={handleFriendlyNameChange}
                                        className="mt-1 block w-80 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                        placeholder="Eg: Video_front_door"
                                        required
                                    />
                                </div>

                                {/* Select Model */}
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700">Select Model</label>
                                    <select
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        className="mt-1 block w-30 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                                    >
                                        <option value="model1">Model 1</option>
                                        <option value="model2">Model 2</option>
                                        <option value="model3">Model 3</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Process Button */}
                        {videoType !== 'stream' && (
                            <button
                                type="submit"
                                className="mt-6 w-52 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded shadow"
                            >
                                Process
                            </button>
                        )}
                    </form>
                </div>

                {/* Captured Image Display */}
                {capturedImage && (
                    <div className="mt-8 bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Captured Image</h2>
                        <img src={capturedImage} alt="Captured" className="w-full h-auto rounded-md" />
                    </div>
                )}

                {/* Status Section */}
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                    <h2 className="flex items-center text-xl font-semibold text-gray-800">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-yellow-500" />
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

export default HeaderDashboard;
