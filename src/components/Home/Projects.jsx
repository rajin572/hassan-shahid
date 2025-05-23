import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { TProjects } from "@/types";
import Link from "next/link";

import React from "react";

const Projects = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/project", {
    next: {
      revalidate: 30,
    },
  });

  const projectData = await res.json();

  return (
    <div className="py-20 ">
      <div className="mt-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Projects
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          Top Rated Projects
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div className="grid grid-cols-1 justify-items-center items-center gap-5 mt-20">
          {projectData.map((project, i) =>
            i % 2 === 0 ? (
              <ProjectCard key={project?._id} projects={project} />
            ) : (
              <ProjectCard
                key={project?._id}
                projects={project}
                className="lg:order-last"
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
