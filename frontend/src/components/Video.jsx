import React from "react";

// Video Card Component
function VideoCard({ videoUrl, videoName, isPlaying }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64 m-4">
      {/* Video Thumbnail */}
      <div className="relative w-full h-40">
        <img
          src={videoUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Video Details */}
      <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">{videoName}</p>
          <button className="flex items-center space-x-2 mt-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Stop</span>
          </button>
        </div>
        <div>
          <div
            className={`w-4 h-4 rounded-full ${
              isPlaying ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Main Component for Video Card Grid
export default function Video() {
  const videos = [
    {
      videoUrl: "https://via.placeholder.com/200x150", // Replace with actual video thumbnail URL
      videoName: "Video Name/Url",
      isPlaying: true,
    },
    {
      videoUrl: "https://via.placeholder.com/200x150", // Replace with actual video thumbnail URL
      videoName: "Video Name/Url",
      isPlaying: true,
    },
    {
      videoUrl: "https://via.placeholder.com/200x150", // Replace with actual video thumbnail URL
      videoName: "Video Name/Url",
      isPlaying: true,
    },
  ];

  return (
    <div className="flex justify-center">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          videoUrl={video.videoUrl}
          videoName={video.videoName}
          isPlaying={video.isPlaying}
        />
      ))}
    </div>
  );
}
