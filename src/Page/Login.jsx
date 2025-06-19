import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import Google from "../Component/Google";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { user, loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && token) {
      toast.success("Login successful");
      navigate("/home");
    }
  }, [user, token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {loading && <p className="text-indigo-600 text-sm">Loading...</p>}
          {error && (
            <p className="text-red-500 text-sm">
              {typeof error === "string" ? error : "Login failed"}
            </p>
          )}

          <div>
            <label className="block mb-1 text-gray-600 font-medium">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-lg px-4 py-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-purple-400 focus-within:outline-none rounded-lg px-4 py-2 transition duration-200">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                className="w-full focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <span
                className="cursor-pointer ml-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
          >
            Log In
          </button>
        </form>
        <Google />

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
