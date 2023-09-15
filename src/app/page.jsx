"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Hero";
import Projects from "@/components/Projects";
import SideEmail from "@/components/SideEmail";
import SideIcons from "@/components/SideIcons";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
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
