import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const Projects = () => {
  const [bigView, setView] = useState(false);
  return (
    <div id="projects" className="bg-secondary py-16 px-10 text-slate-200">
      <h3 className="text-center font-semibold tracking-wider uppercase mb-8">
        Projects
      </h3>
      <div className="max-w-4xl mx-auto">
        {projects.slice(0, bigView ? projects.length : 3).map((projects, i) => (
          <ProjectCard
            title={projects.title}
            desc={projects.desc}
            url={projects.url}
            reverse={i % 2 != 0}
            image={projects.image}
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {bigView ? (
          <button
            onClick={() => setView(false)}
            className="underline cursor-pointer text-teal-300"
          >
            View less
          </button>
        ) : (
          <button
            onClick={() => setView(true)}
            className="underline cursor-pointer text-teal-300"
          >
            View more
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
