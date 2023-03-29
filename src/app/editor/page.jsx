"use client";
import React, { useRef, useState } from "react";
import axios from "axios";

import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Editor = () => {
  const editor = useRef(null);
  const title = useRef(null);
  const category = useRef(null);
  const desc = useRef(null);
  const tags = useRef(null);
  const [content, setContent] = useState("");

  const handlePost = async () => {
    await axios.post("/api/blog", {
      title: title.current.value,
      content: content,
      category: category.current.value,
      tags: tags.current.value.split(","),
      description: desc.current.value,
    });
  };

  return (
    <div className="max-w-6xl flex flex-col lg:flex-row mx-auto p-5 pt-24">
      <div className="flex-1">
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          config={{
            theme: "dark",
            height: "36rem",
            style: {
              background: "#03070F",
              color: "#fafafa",
            },
          }}
        />
      </div>
      <div className="ml-4 flex flex-col text-slate-100 w-auto lg:w-64 mt-4 lg:mt-0">
        <label className="mb-2 font-medium">Title</label>
        <input
          type="text"
          placeholder="Blog title"
          ref={title}
          className="bg-slate-100 bg-opacity-10 p-3 py-2 rounded-sm outline-none border-2 border-slate-800 w-full"
        />
        <label className="my-2 font-medium">Category</label>
        <input
          type="text"
          placeholder="Write category"
          ref={category}
          className="bg-slate-100 bg-opacity-10 p-3 py-2 rounded-sm outline-none border-2 border-slate-800 w-full"
        />
        <label className="my-2 font-medium">Tags</label>
        <input
          type="text"
          placeholder="Tags (with commas)"
          ref={tags}
          className="bg-slate-100 bg-opacity-10 p-3 py-2 rounded-sm outline-none border-2 border-slate-800 w-full"
        />
        <label className="my-2 font-medium">Description</label>
        <input
          type="text"
          placeholder="Description"
          ref={desc}
          className="bg-slate-100 bg-opacity-10 p-3 py-2 rounded-sm outline-none border-2 border-slate-800 w-full"
        />
        <button
          className="py-2 px-3 mt-3 text-sm w-full rounded-sm uppercase tracking-wide font-semibold bg-indigo-400 text-indigo-800 cursor-pointer"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Editor;
