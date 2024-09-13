import React from 'react';
import ProjectsWorkedOn from '@/app/(portfolio)/projects/ProjectsWorkedOn';
import PersonalProjects from '@/app/(portfolio)/projects/PersonalProjects';

const Projects = () => (
  <main className="flex flex-col pt-20 pb-20 px-10">
    <ProjectsWorkedOn />
    <div className="border-2 rounded h-1 w-40 md:w-52 mx-auto" />
    <PersonalProjects />
  </main>
);

export default Projects;
