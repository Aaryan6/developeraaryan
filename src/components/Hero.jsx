"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const FadeIn = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Header() {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full bg-primary text-gray-200"
      id="/"
    >
      <motion.div
        className="flex flex-col text-center md:pl-12"
        variants={FadeIn}
        initial="initial"
        whileInView="animate"
      >
        <h1 className="text-5xl font-medium leading-normal sm:text-6xl lg:text-8xl md:leading-none">
          Hi!
          <br /> I am Aaryan Patel
        </h1>
        <p className="mt-4 text-lg font-medium md:text-2xl">
          I am a{" "}
          <span className="inline-block text-decorate">
            <Typewriter
              className="typewriter"
              words={["Full stack developer.", "Freelancer.", "Web developer."]}
              loop="true"
              typeSpeed={50}
              deleteSpeed={50}
            />
          </span>
        </p>
        <a
          href="mailto:aaryanpatel683@gmail.com"
          className="inline-block mx-auto w-fit px-4 py-3 mt-6 text-sm font-medium text-decorate bg-transparent border-2 border-decorate rounded-md transition-colors duration-300 hover:bg-decorate hover:text-gray-900"
        >
          Let&apos;s Connect
        </a>
      </motion.div>
    </section>
  );
}
