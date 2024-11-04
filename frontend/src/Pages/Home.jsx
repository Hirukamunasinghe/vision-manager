import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        console.log("Login function called."); // Debugging log

        const dataForm = new FormData(document.getElementById("login_form"));
        const formData = {
            username: dataForm.get("username").trim(),
            password: dataForm.get("password").trim()
        };

        console.log("Form Data:", formData); // Log the form data

        // Check credentials directly
        if (formData.username === "dbadmin" && formData.password === "Iterate$123") {
            // Navigate to dashboard if credentials match
            navigate("/dashboard");
        } else {
            const loginAlert = document.getElementById("login_alert");
            loginAlert.hidden = false;
            loginAlert.textContent = "Invalid username or password.";
            console.log("Login failed: Invalid credentials"); // Log failure message
        }
    };

    return (
        <section className="min-h-screen flex">
            {/* Sidebar image (hidden on smaller screens) */}
            <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/login_page_side_img.png')" }}></div>

            {/* Login form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <img src="/src/assets/logo.png" alt="Logo" className="mx-auto h-16" />
                        <h3 className="text-2xl font-semibold text-gray-800 mt-4">Login!</h3>
                    </div>
                    <form id="login_form" onSubmit={login} className="space-y-6">
                        <div>
                            <label htmlFor="inputUsername" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="inputUsername"
                                placeholder="Username"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="inputPassword" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="inputPassword"
                                placeholder="Password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="customCheck1" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="customCheck1" className="ml-2 block text-sm text-gray-900">Remember password</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none"
                        >
                            LOGIN
                        </button>
                        <a
                            href="/vm/login/sso"
                            className="w-full inline-block mt-2 text-center bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 focus:outline-none"
                        >
                            SSO Login
                        </a>
                        <div
                            id="login_alert"
                            className="mt-4 text-red-600 text-center hidden"
                        ></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Home;
