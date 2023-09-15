"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const FadeInFromLeft = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const FadeInFromRight = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const ProjectCard = ({ title, desc, url, image, reverse }) => {
  return (
    <div
      className={`flex justify-between my-20 flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <motion.div
        className={`rounded-2xl overflow-hidden h-[13rem]`}
        variants={reverse ? FadeInFromRight : FadeInFromLeft}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.25 }}
      >
        <Image
          src={"/projects/" + image}
          alt=""
          className="w-80 h-full object-cover hover:scale-110 cursor-pointer duration-500 mx-auto"
          width={900}
          height={700}
        />
      </motion.div>
      <motion.div
        className={`md:w-1/2 mt-8 md:mt-0 text-center md:text-left flex flex-col justify-end pb-6`}
        variants={reverse ? FadeInFromRight : FadeInFromLeft}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.25 }}
      >
        <h5 className="font-semibold mb-8 text-sm">{title}</h5>
        <p className="text-gray-300 mb-4 leading-relaxed">{desc}</p>
        <a href={url} target="_blank" className="text-teal-300 cursor-pointer">
          {url.replace("https://", "")}
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
