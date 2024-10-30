import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Webhook = () => {
    const [latestId, setLatestId] = useState(0);
    const [subscriptions, setSubscriptions] = useState([]);
    const [webhookUrl, setWebhookUrl] = useState("");
    const [videoFriendlyName, setVideoFriendlyName] = useState("");
    const [videoHotspot, setVideoHotspot] = useState("");

    const handleAddSubscription = () => {
        if (webhookUrl && videoFriendlyName) {
            const newId = latestId + 1;
            const newSubscription = {
                id: newId,
                username: "Guest", // Placeholder for username
                webhook: webhookUrl,
                friendlyName: videoFriendlyName,
                hotspot: videoHotspot,
            };

            setSubscriptions([...subscriptions, newSubscription]);
            setLatestId(newId);

            // Clear fields
            setWebhookUrl("");
            setVideoFriendlyName("");
            setVideoHotspot("");
        } else {
            alert("All fields are required!");
        }
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-grow ml-64 p-4"> {/* Added ml-64 to shift content */}
                <h2 className="text-4xl font-extrabold text-gray-600 mb-6">Webhook Subscriptions</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="form-group">
                        <label htmlFor="video_friendly_name" className="block mb-1">Video Friendly Name:</label>
                        <select
                            className="form-select border rounded-lg p-2 w-full"
                            id="video_friendly_name"
                            value={videoFriendlyName}
                            onChange={(e) => setVideoFriendlyName(e.target.value)}
                        >
                            <option value=""></option>
                            {/* Add options here as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="video_hotspot" className="block mb-1">Hotspot ID:</label>
                        <select
                            className="form-select border rounded-lg p-2 w-full"
                            id="video_hotspot"
                            value={videoHotspot}
                            onChange={(e) => setVideoHotspot(e.target.value)}
                        >
                            <option value=""></option>
                            {/* Add options here as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="webhook" className="block mb-1">Webhook URL:</label>
                        <input
                            type="text"
                            className="border rounded-lg p-2 w-full"
                            required
                            id="webhook"
                            value={webhookUrl}
                            onChange={(e) => setWebhookUrl(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={handleAddSubscription}
                    >
                        Add Subscription
                    </button>
                </div>
                <hr className="my-4" />
                <div className="card shadow mb-4 mt-4">
                    <div className="py-3 bg-gray-100 rounded-t-lg">
                        <h6 className="m-0 font-semibold text-lg text-gray-800">Webhook List&nbsp;</h6>
                    </div>
                    <div className="card-body">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">ID</th>
                                    <th className="py-2 px-4 border-b text-left">User</th>
                                    <th className="py-2 px-4 border-b text-left">Webhook URL</th>
                                    <th className="py-2 px-4 border-b text-left">Video Friendly Name</th>
                                    <th className="py-2 px-4 border-b text-left">Video Hotspot</th>
                                    <th className="py-2 px-4 border-b text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscriptions.map((subscription) => (
                                    <tr key={subscription.id}>
                                        <td className="py-2 px-4 border-b">{subscription.id}</td>
                                        <td className="py-2 px-4 border-b">{subscription.username}</td>
                                        <td className="py-2 px-4 border-b">{subscription.webhook}</td>
                                        <td className="py-2 px-4 border-b">{subscription.friendlyName}</td>
                                        <td className="py-2 px-4 border-b">{subscription.hotspot}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-red-500 text-white px-2 py-1 rounded-lg">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Webhook;
