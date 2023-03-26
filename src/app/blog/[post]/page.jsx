"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./post.module.css";
import Moment from "react-moment";

const BlogPost = ({ params }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/post?id=${params.post}`);
      console.log(res.data);
      setBlog(res.data);
    };
    fetchBlog();
  }, [params.post]);

  return (
    <div className="max-w-3xl mx-auto pt-5 px-5 text-slate-200">
      <div className="pt-24 pb-6">
        <h1 className="font-semibold leading-snug md:leading-relaxed">
          {blog.title}
        </h1>
        <h6 className="mt-4 text-slate-300 tracking-wide">
          <Moment format="D MMMM YYYY" withTitle>
            {blog.createdAt}
          </Moment>
        </h6>
      </div>
      <hr />
      <div
        className={`${styles.container} py-6`}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPost;
