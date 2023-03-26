"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [closeBar, setCloseBar] = useState(true);
  useEffect(() => {
    console.log(scrollPosition);
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, [scrollPosition]);
  return (
    <div className="z-50 fixed top-0 w-full">
      <div
        className={`py-6 px-6 text-white ${
          scrollPosition > 90
            ? "bg-gradient-to-b from-[#0a0e17] to-transparent md:py-6"
            : "bg-transparent"
        } duration-300 flex justify-between items-center md:py-8 md:px-16`}
      >
        <Link href="/">
          <Image
            src="/da-logo.svg"
            width={500}
            height={500}
            className="w-20"
            alt="logo"
          />
        </Link>
        {/* <HiBars3BottomRight className="text-white text-3xl md:hidden" /> */}
        <div className="flex w-2/3 max-w-lg justify-end">
          {/* <a
            href="/#about"
            className="hover:text-teal-300 duration-150"
            onClick={() => setCloseBar(true)}
          >
            About
          </a>
          <a
            href="/#projects"
            className="hover:text-teal-300 duration-150"
            onClick={() => setCloseBar(true)}
          >
            Projects
          </a> */}
          <Link
            href="/blog"
            className="hover:text-teal-300 duration-150"
            onClick={() => setCloseBar(true)}
          >
            Blog
          </Link>
          {/* <a
            href="/#contact"
            className="hover:text-teal-300 duration-150"
            onClick={() => setCloseBar(true)}
          >
            Contact
          </a> */}
        </div>
      </div>
    </div>
  );
}
