import Image from 'next/image';
import React from 'react';

const projectsWorkedOn = [
  {
    id: 1,
    icon: '/adidas_confirmed.webp',
    title: 'Adidas Confirmed',
  },
  {
    id: 2,
    icon: '/ace_hardware.webp',
    title: 'Ace Hardware',
  },
  {
    id: 3,
    icon: '/basic_fit.webp',
    title: 'Basic Fit',
  },
  {
    id: 4,
    icon: '/slimming_world.webp',
    title: 'Slimming World',
  },
  {
    id: 5,
    icon: '/q_dance.webp',
    title: 'Q-Dance',
  },
  {
    id: 6,
    icon: '/mclaren.webp',
    title: 'Mclaren',
  },
];

const ProjectsWorkedOn = () => {
  return (
    <>
      <p
        className={'text-xl md:text-3xl text-center text-gray-500 pt-12'}
      >{`Some of the projects I've worked on`}</p>
      <div className="flex flex-wrap gap-10 justify-center pt-12 pb-12">
        {projectsWorkedOn.map((project, index) => {
          return (
            <div
              key={project.id}
              className="flex flex-col text-wrap items-center text-center w-28 md:w-48"
            >
              <Image
                className={'w-20 h-20 md:w-40 md:h-40 rounded-3xl hover:animate-spin'}
                src={project.icon}
                loading={'lazy'}
                placeholder={'blur'}
                blurDataURL={project.icon}
                alt={`Icon for ${project.title}`}
                width={100}
                height={100}
              />
              <p className={'text-l pt-4 md:text-2xl'}>{project.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsWorkedOn;
