"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Moment from "react-moment";

const BlogCard = ({ blog }) => {
  const router = useRouter();

  // function for truncate letters less than 280
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="max-w-4xl mx-1 md:mx-auto flex md:flex-row flex-col text-slate-50 py-6 pl-0 cursor-pointer px-10 rounded-2xl bg-[#070E1D] bg-opacity-0 hover:bg-opacity-50 duration-200"
      onClick={() => router.push(`/blog/${blog._id}`)}
    >
      <div className="p-6 md:p-10">
        <p>
          <Moment format="D MMMM YYYY" withTitle>
            {blog.createdAt}
          </Moment>
        </p>
      </div>
      <div className="flex-1 pl-6 md:px-0">
        <h1 className="text-xl md:text-2xl font-medium">{blog.title}</h1>
        <p className="text-sm mt-2 text-gray-600 leading-6">
          {truncate(blog.description, 220)}
        </p>
        <button className="text-sm mt-3 underline rounded-sm">Read more</button>
      </div>
    </div>
  );
};

export default BlogCard;
