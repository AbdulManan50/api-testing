import React, { useState } from "react";
import Post from "./Component/Post";
import Form from "./Component/Form";

export default function App() {
  const [updateapi, setipdateapi] = useState({});
  const [refresh, setRefresh] = useState(false); 

  const refreshPost = () => {
    setRefresh(prev => !prev);
  };

  return (
    <>
      <div className="bg-[#212221e0] min-h-screen">
        <div className="w-[90%] mx-auto gap-5 pt-20">
          <Form updateapi={updateapi} setipdateapi={setipdateapi} refreshPost={refreshPost} />
          <div className="grid grid-cols-3 gap-5 pt-20">
            <Post updateapi={updateapi} setipdateapi={setipdateapi} refresh={refresh} />
          </div>
        </div>
      </div>
    </>
  );
}


