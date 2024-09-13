import React from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import { Project } from '@/interfaces';

const Projects = () => (
  <main className="flex flex-col pt-20 pb-20 px-10">
    <section aria-labelledby="projects-title" className="py-12">
      <h2 id="projects-title" className="text-3xl font-bold text-gray-800 dark:text-white">
        {"A selection of projects I've worked on"}
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {
          "Here are some of the projects I've contributed to, showcasing my experience in mobile development using React Native and other technologies."
        }
      </p>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project: Project) => {
          const cardContent = (
            <div className="flex flex-col h-full">
              {/* Project Image */}
              <div className="p-4 flex">
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  width={64}
                  height={64}
                  className="object-contain rounded-lg"
                />
              </div>
              {/* Project Details */}
              <div className="px-4 pb-4 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-2 py-1 rounded bg-gray-200 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Hide 'Visit Website' if no link */}
                {project.link && (
                  <div className="mt-4">
                    <span className="text-blue-600 dark:text-blue-400 hover:underline">
                      Visit Website
                    </span>
                  </div>
                )}
              </div>
            </div>
          );

          const cardClasses =
            'rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition duration-300';

          return project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className={`${cardClasses} hover:scale-105 hover:shadow-lg`}>{cardContent}</div>
            </a>
          ) : (
            <div key={project.id} className={cardClasses}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  </main>
);

export default Projects;
