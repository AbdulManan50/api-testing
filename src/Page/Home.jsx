import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const naviaget = useNavigate()

  const handelLogout = () => {
    localStorage.removeItem("token");
    naviaget("/login")
  }


  return (
    <div className="w-full h-screen bg-black flex flex-col justify-around items-center">
      <h1 className="text-5xl font-bold text-white text-center">Home</h1>
      <button onClick={handelLogout} className="px-5 py-2 text-white bg-red-500 rounded-2xl cursor-pointer" >Log Out</button>
    </div>
  );
};

export default Home;
