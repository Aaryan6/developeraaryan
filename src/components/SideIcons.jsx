import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const SideIcons = () => {
  return (
    <div className="fixed hidden lg:flex flex-col left-16 bottom-0 items-center z-30">
      <div className="flex flex-col justify-between h-44 mb-10">
        <span>
          <a href="https://github.com/Aaryan6" target="_blank">
            <FiGithub className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105 hover:-translate-y-1" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/aaryanpatel6/" target="_blank">
            <FiLinkedin className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105 hover:-translate-y-1" />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/aaryanpatel2.0/" target="_blank">
            <FiInstagram className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105 hover:-translate-y-1" />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/aaryanpatel_06" target="_blank">
            <FiTwitter className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105 hover:-translate-y-1" />
          </a>
        </span>
      </div>
      <div className="w-0.5 h-24 bg-teal-300" />
    </div>
  );
};

export default SideIcons;
