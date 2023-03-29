"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full bg-[#03070F] text-gray-200"
      id="/"
    >
      <div className="flex flex-col text-center md:pl-12">
        <h1 className="text-4xl font-bold leading-normal md:text-6xl lg:text-8xl md:leading-none">
          Hi!
          <br /> I am Aaryan Patel
        </h1>
        <p className="mt-4 text-lg font-medium md:text-2xl">
          I am a{" "}
          <span className="inline-block text-teal-500">
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
          href="mailto:aaryanpatel6211120@gmail.com"
          className="inline-block mx-auto w-fit px-4 py-3 mt-6 text-sm font-medium text-teal-500 bg-transparent border-2 border-teal-500 rounded-md transition-colors duration-300 hover:bg-teal-500 hover:text-gray-900"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}
