import React, { useState } from "react";
import { singup } from "../Services/Singup/Index";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { singupcheema } from "../Services/Scheema/Index";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = singupcheema.safeParse({ username, email, password });

    if (!result.success) {
      const Formerror = result.error.format();
      setErrors({
        username: Formerror.username?._errors[0],
        email: Formerror.email?._errors[0],
        password: Formerror.password?._errors[0],
      });
      return;
    }
    setErrors({});

    console.log("result", result);
    try {
      const response = await singup({
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err);
      errors(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form noValidate onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-gray-600 font-medium"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
              placeholder="Enter your username"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-600 font-medium"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-gray-600 font-medium"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-purple-400 focus-within:outline-none rounded-lg px-4 py-2 transition duration-200">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full focus:outline-none"
                placeholder="Create a password"
                required
              />
              <span
                className="cursor-pointer ml-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
