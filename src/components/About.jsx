import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0e17] text-white py-28 px-10">
      <div className="flex justify-between md:items-center flex-col-reverse md:flex-row max-w-4xl mx-auto">
        <div className="md:w-1/2 max-w-lg mt-12 md:mt-0">
          <p className="text-teal-300 font-medium text-lg">
            &gt;_ A BIT ABOUT ME
          </p>
          <p className="mt-6 leading-relaxed text-lg">
            I am Aaryan Patel, and I’m a{" "}
            <span className="text-teal-300">Full Stack Developer</span> with a
            passion for bringing ideas to life.
          </p>
          <p className="text-base mt-6 leading-relaxed">
            I’m able to combine my creative and technical abilities to design,
            develop and deploy web applications that are not only visually
            appealing but also highly functional.
          </p>
        </div>
        <div className="w-full md:w-96 max-auto">
          <Image
            src="/myimage.png"
            className="w-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
