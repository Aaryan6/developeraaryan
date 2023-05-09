"use client";
import Image from "next/image";
import React from "react";
import "animate.css";

const Skills = () => {
  return (
    <div className="px-4 py-16">
      <h3 className="font-semibold text-slate-200 uppercase text-xl tracking-wider text-center mb-8">
        Skills
      </h3>
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto wow animate__animated animate__fadeInUp">
        <Image
          src="/html.png"
          alt=""
          className="cursor-pointer w-10 md:w-16 hover:scale-90 duration-300"
          width={65}
          height={65}
        />
        <Image
          src="/css.png"
          alt=""
          className="cursor-pointer w-10 md:w-16 hover:scale-90 duration-300"
          width={65}
          height={65}
        />
        <Image
          src="/js.png"
          alt=""
          className="cursor-pointer w-10 md:w-14 hover:scale-90 duration-300"
          width={60}
          height={60}
        />
        <Image
          src="/python.png"
          alt=""
          className="cursor-pointer w-10 md:w-14 hover:scale-90 duration-300"
          width={60}
          height={60}
        />
        <Image
          src="/react.png"
          alt=""
          className="cursor-pointer w-10 md:w-16 hover:scale-90 duration-300"
          width={60}
          height={60}
        />
        <Image
          src="/nextjs.png"
          alt=""
          className="cursor-pointer w-10 md:w-16 hover:scale-90 duration-300"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default Skills;
