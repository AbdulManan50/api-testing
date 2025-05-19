import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-around items-center">
      <h1 className="text-5xl font-bold text-white text-center">Home</h1>
      <button 
        onClick={handleLogout} 
        className="px-5 py-2 text-white bg-red-500 rounded-2xl cursor-pointer hover:bg-red-600 transition-colors"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
