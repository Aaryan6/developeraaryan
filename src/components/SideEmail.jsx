"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeInFromRight = {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const SideEmail = () => {
  return (
    <motion.div
      className="fixed flex-col -right-8 bottom-0 items-center z-30 hidden lg:flex"
      variants={FadeInFromRight}
      initial="initial"
      animate="animate"
      transition={{ delay: 0.25 }}
    >
      <span className="text-gray-200 tracking-wider rotate-90 text-xs mb-32 hover:text-teal-300 duration-200">
        aaryanpatel683@gmail.com
      </span>
      <div className="w-0.5 h-24 bg-teal-300" />
    </motion.div>
  );
};

export default SideEmail;
