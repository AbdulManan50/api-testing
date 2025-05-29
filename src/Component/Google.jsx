import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Google = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const decoded = jwtDecode(tokenResponse.credential);
      console.log("User Info:", decoded);
      navigate("/login");
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "implicit",
  });

  return (
    <div className="">
      <button
        className="text-center mt-3 p-3 border-[2px] border-[#938f8f] inline-block mx-auto rounded-lg bg-[#7065651e] cursor-pointer"
        onClick={() => login()}
      >
        <FcGoogle size={40} />
      </button>
    </div>
  );
};

export default Google;
