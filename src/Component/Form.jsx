import React, { useEffect, useState } from "react";
import { updatePost, addPost } from "../Api/PostApi";

const Form = ({ updateapi, setipdateapi, refreshPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (updateapi) {
      setTitle(updateapi.title || "");
      setBody(updateapi.body || "");
    }
  }, [updateapi]);

  const handleSubmit = async () => {
    try {
      if (updateapi?.id) {
        await updatePost(updateapi.id, { title, body });
        setipdateapi({});
      } else {
        await addPost({ title, body });
      }
      setTitle("");
      setBody("");
      refreshPost();
    } catch (error) {
      console.error("Error in form submit:", error);
    }
  };

  return (
    <div className="flex gap-5 items-center justify-center">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="px-2 py-1 bg-white rounded-lg"
        />
        <input
          className="px-2 py-1 bg-white rounded-lg"
          type="text"
          placeholder="Add body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-5 py-1 rounded-lg text-white bg-[#13ad6d69] cursor-pointer"
      >
        {updateapi?.id ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default Form;
