import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, desc, url, image, reverse }) => {
  return (
    <div
      className={`flex justify-between my-16 flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={"/" + image}
          alt=""
          className="w-80 hover:scale-110 cursor-pointer duration-500 mx-auto"
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left flex flex-col justify-end pb-6">
        <h5 className="font-semibold mb-8 text-sm">{title}</h5>
        <p className="text-gray-300 mb-4 leading-relaxed">{desc}</p>
        <a href={url} target="_blank" className="text-teal-300 cursor-pointer">
          {url.replace("https://", "")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
