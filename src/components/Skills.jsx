"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { FullStack, Techs, skills } from "@/data";

const FadeIn = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <div className="px-4 py-16 bg-[#031729]">
      <h3 className="font-semibold text-slate-200 uppercase text-xl tracking-wider text-center mb-8">
        Skills
      </h3>
      <div className="max-w-5xl mx-auto text-white flex flex-col md:flex-row items-center justify-evenly pt-6">
        <div className="rounded-lg w-full max-w-sm mb-8 md:mb-0">
          <h2 className="text-lg font-medium text-center text-emerald-400 bg-[#162e44] py-2 rounded-md">
            Full Stack
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-5">
            {FullStack.map((lang, i) => (
              <motion.div
                key={i}
                className="w-full h-24 py-4 rounded-md grid place-items-center bg-[#162e44] hover:scale-105 duration-150"
                variants={FadeIn}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.05 * (i + 1) }}
              >
                <Image
                  src={"/languages/" + lang.image}
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 mb-2"
                />
                <span>{lang.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-sm md:max-w-xs">
          <h2 className="text-lg font-medium text-center text-emerald-400 bg-[#162e44] py-2 rounded-md">
            Frameworks & Libraries
          </h2>
          <div className="grid grid-cols-2 gap-3 mt-5">
            {Techs.map((lang, i) => (
              <motion.div
                key={i}
                className="w-full h-11 rounded-md grid place-items-center bg-[#162e44] hover:scale-105 duration-150"
                variants={FadeIn}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.05 * (i + 1) }}
              >
                <span className="">{lang.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* <motion.div
        className="flex flex-wrap items-center justify-between max-w-4xl mx-auto"
        variants={FadeDown}
        initial="initial"
        whileInView="animate"
      >
        {skills.map((skill, i) => (
          <Image
            src={"/" + skill}
            alt=""
            className="cursor-pointer w-10 md:w-16 hover:scale-90 duration-300"
            width={65}
            height={65}
            key={i}
          />
        ))}
      </motion.div> */}
    </div>
  );
};

export default Skills;
