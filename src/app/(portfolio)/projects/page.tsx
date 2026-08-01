import React from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import { Project } from '@/interfaces';

const Projects = () => (
  <main className="min-h-screen px-5 py-24 sm:px-8 lg:px-16">
    <section aria-labelledby="projects-title" className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">
          Selected work
        </p>
        <h1 id="projects-title" className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Mobile products for consumer brands, utilities, events, and sport.
        </h1>
        <p className="mt-5 text-base leading-8 text-foreground/70">
          A selection of projects I have contributed to across React Native, Expo, native iOS, and
          supporting product infrastructure.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => {
          const cardContent = (
            <div className="flex h-full flex-col">
              <div className="flex min-h-24 items-center border-b border-border/70 p-5">
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-md object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-foreground/70">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <span className="mt-6 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                    Visit website
                  </span>
                )}
              </div>
            </div>
          );

          const cardClasses =
            'flex h-full flex-col overflow-hidden rounded-md border border-border bg-card/80 shadow-sm transition-colors hover:border-foreground/35';

          return project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label={`Visit the ${project.title} website`}
            >
              <article className={cardClasses}>{cardContent}</article>
            </a>
          ) : (
            <article key={project.id} className={cardClasses}>
              {cardContent}
            </article>
          );
        })}
      </div>
    </section>
  </main>
);

export default Projects;
