import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-gray-600 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 cursor-pointer"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <Link to="/" >
              <span
                href="#"
                className="text-indigo-600 hover:underline font-medium"
              >
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
