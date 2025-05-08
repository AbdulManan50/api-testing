import React, { useState } from "react";
import { singup } from "../Services/Singup/Index";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Singup = () => {
  const [userName, setUsername] = useState("");
  const [emial, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [error, seterror] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showpassword, setshowpassword] = useState(false);

  const handelsumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await singup({
        username: userName,
        email: emial,
        password,
      });
      console.log("login succesful ", response);
      setSuccess;
    } catch (err) {
      console.error("Signup Error:", err);
      seterror;
    }
  };

  

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handelsumbit} className="space-y-5">
            {error && (
              <p className="text-xl text-red-500">
                Signup Failed. Please try again.
              </p>
            )}
            {success && (
              <p className="text-xl text-green-500">sing up successful</p>
            )}
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-gray-600 font-medium"
              >
                Username
              </label>
              <input
                value={userName}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                id="username"
                className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-medium"
              >
                Email
              </label>
              <div>
                <input
                  value={emial}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-gray-600 font-medium"
              >
                Password
              </label>
              <div className="w-full border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none rounded-lg px-4 py-2 transition duration-200 flex items-center">
                <input
                  value={password}
                  onChange={(e) => {
                    Setpassword(e.target.value);
                  }}
                  type={showpassword ? "password" : "text"}
                  id="password"
                  className="w-full"
                  placeholder="Create a password"
                  required
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  {showpassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
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
            <Link to="/login">
              <span
                href="#"
                className="text-purple-600 hover:underline font-medium"
              >
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Singup;
