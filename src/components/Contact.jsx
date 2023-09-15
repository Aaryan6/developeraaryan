"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-slate-200 py-20 px-10 flex flex-col text-center bg-[#031729]"
    >
      <motion.h3
        className="font-semibold text-4xl"
        variants={FadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        Get In Touch
      </motion.h3>
      <motion.p
        className="max-w-lg mx-auto mt-6"
        variants={FadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        I am currently looking for any opportunity to work as a freelancer and
        intern by remote work. My inbox is always open, whether you have any
        work just message me.
      </motion.p>
      <motion.a
        href="mailto:aaryanpatel6211120@gmail.com"
        variants={FadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.3, duration: 0.3 }}
        className="text-teal-300 border-2 border-teal-300 py-2 px-4 mt-6 w-fit mx-auto text-sm rounded-md duration-300 hover:bg-teal-500 hover:text-gray-900"
      >
        Say Hello👋
      </motion.a>
    </div>
  );
};

export default Contact;
