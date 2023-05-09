"use client";
import React from "react";
import "animate.css";

const SideEmail = () => {
  return (
    <div className="fixed flex-col -right-8 bottom-0 items-center z-30 hidden lg:flex wow animate__animated animate__backInRight">
      <span className="text-gray-200 tracking-wider rotate-90 text-xs mb-32 hover:text-teal-300 duration-200">
        aaryanpatel683@gmail.com
      </span>
      <div className="w-0.5 h-24 bg-teal-300" />
    </div>
  );
};

export default SideEmail;
