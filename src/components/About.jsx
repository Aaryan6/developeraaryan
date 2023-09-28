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

const About = () => {
  return (
    <section id="about" className="bg-secondary text-white py-28 px-10">
      <div className="flex justify-between md:items-center flex-col-reverse md:flex-row max-w-4xl mx-auto">
        <motion.div
          className="md:w-1/2 max-w-lg mt-12 md:mt-0"
          variants={FadeInFromLeft}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.25 }}
        >
          <p className="text-lightdecorate font-medium text-lg">
            &gt;_ A BIT ABOUT ME
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            I am Aaryan Patel, and I’m a{" "}
            <span className="text-lightdecorate">Full Stack Developer</span> with a
            passion for bringing ideas to life.
          </p>
          <p className="text-base mt-6 leading-relaxed">
            I’m able to combine my creative and technical abilities to design,
            develop and deploy web applications that are not only visually
            appealing but also highly functional.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-96 max-w-md mx-auto lg:max-auto relative group"
          variants={FadeInFromRight}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.25 }}
        >
          <div
            className="absolute top-0 w-full group-hover:m-5 duration-300 border-2 border-lightdecorate m-8"
            style={{ aspectRatio: "3/3.5" }}
          />
          <Image
            src="/profile.jpg"
            className="w-full z-30 relative group-hover:m-2 duration-300"
            alt=""
            width={1000}
            height={1000}
            style={{ aspectRatio: "3/3.5" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
