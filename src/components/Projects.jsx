import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#0a0e17] py-16 px-10 text-slate-200">
      <h3 className="text-center font-semibold tracking-wider uppercase mb-8">
        Projects
      </h3>
      <div className="max-w-4xl mx-auto">
        <ProjectCard
          title="APNICLASS"
          desc="This is a platform website for my college,Here we upload our class
          notes, assignments, and other stuffs.I build this website using the
          MERN stack &#40;ReactJs, ExpressJs, NodeJs, MongoDB&#41; and Firebase."
          url="apniclass.live"
          reverse={false}
          image="ap.png"
        />
        <ProjectCard
          title="MADHAV MASAALA - ECOMMERCE"
          desc="An e-commerce site for a local shop of red chilli masala, I made this site for my client as a freelancer. I build this site using Nextjs, MongoDB & Stripe."
          url="madhavmasaala.vercel.app"
          reverse={true}
          image="mm.png"
        />
        <ProjectCard
          title="STACKOVERFLOW CLONE"
          desc="I build a Stackoverflow clone website in a internship, additionally I integrated a chatbot that can answers all the programming questions and also build a social community page for StackOverflow users, there they can post images and videos."
          reverse={false}
          image="soc.png"
          url="stackoverflow-clone-aaryan.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
