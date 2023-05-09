"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Hero";
import Projects from "@/components/Projects";
import SideEmail from "@/components/SideEmail";
import SideIcons from "@/components/SideIcons";
import Skills from "@/components/Skills";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <main className={poppins.className}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SideIcons />
      <SideEmail />
    </main>
  );
}
