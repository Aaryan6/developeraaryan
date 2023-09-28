import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="text-slate-200 text-xs text-center py-4 bg-primary">
      <div className="flex justify-between mb-4 max-w-xs mx-auto px-6 lg:hidden">
        <span>
          <a href="https://github.com/Aaryan6" target="_blank">
            <FiGithub className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105" />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/aaryanpatel6/" target="_blank">
            <FiLinkedin className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105" />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/aaryanpatel2.0/" target="_blank">
            <FiInstagram className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105" />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/aaryanpatel_06" target="_blank">
            <FiTwitter className="text-gray-300 hover:text-teal-300 text-xl cursor-pointer duration-300 hover:scale-105" />
          </a>
        </span>
      </div>
      <p>
        Designed by <span className="underline">Aaryan Patel</span>.
      </p>
    </div>
  );
};

export default Footer;
