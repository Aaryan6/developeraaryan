"use client";
import BlogCard from "@/components/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blog");
      setBlogs(res.data);
      return;
    };
    fetchBlogs();
  }, []);

  return (
    <div className={`${poppins.className} bg-[#03070F] text-slate-100`}>
      <div className="h-72 md:h-96 grid place-items-center text-slate-200 font-semibold tracking-wide text-8xl bg-gradient-to-br from-indigo-900 to-blue-600 via-indigo-800">
        <h1>BLOG</h1>
      </div>
      {blogs.length ? (
        <div className="max-w-7xl mx-auto py-6">
          {blogs?.map((post) => {
            return <BlogCard key={post._id} blog={post} />;
          })}
        </div>
      ) : (
        <div className="text-white p-20 text-center">Loading...</div>
      )}
    </div>
  );
}
