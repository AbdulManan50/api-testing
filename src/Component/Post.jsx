import React, { useEffect, useState } from "react";
import { getpost, detetePost } from "../Api/PostApi";

const Post = ({ setipdateapi, refresh }) => {
  const [data, setdata] = useState([]);

  const getpostdata = async () => {
    const res = await getpost();
    setdata(res.data);
  };

  useEffect(() => {
    getpostdata();
  }, [refresh]);
  const handeldeletepost = async (id) => {
    try {
      await detetePost(id);
      setdata((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handelupdatepost = (e) => {
    setipdateapi(e);
  };

  return (
    <>
      {data.map((e) => (
        <div
          key={e.id}
          className="bg-[#13ad6d69] p-2 rounded-xl border-l-[2px] border-white mb-3"
        >
          <h1 className="text-white text-xl">{e.id}</h1>
          <h1 className="text-2xl text-white">{e.title}</h1>
          <p className="text-white">{e.body}</p>
          <div className="space-x-5 pt-2 text-white ">
            <button
              onClick={() => handelupdatepost(e)}
              className="px-5 py-1 rounded-lg bg-green-500 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => handeldeletepost(e.id)}
              className="px-5 py-1 rounded-lg bg-red-500 text-white cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
