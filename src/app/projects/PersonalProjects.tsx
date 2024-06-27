import Image from 'next/image';
import React from 'react';

const projectData = [
  {
    title: 'Recipe Vault',
    description: `Unleash the power to store, search, and filter recipes seamlessly. Effortlessly plan meals and generate shopping lists with my upcoming app. Perfect for all cooking levels, Recipe Vault promises a delightful experience.\n\nStay tuned! 👩‍🍳 #ComingSoon`,
    icon: '/recipe_vault.png',
    screenshots: [
      '/screenshots/recipe_vault/home.webp',
      '/screenshots/recipe_vault/search.webp',
      '/screenshots/recipe_vault/edit.webp',
      '/screenshots/recipe_vault/detail.webp',
    ],
    technologies: [
      'React',
      'React-Native',
      'Expo',
      'Expo-SQlite',
      'Supabase',
      'Reanimated',
      'React Navigation',
      'Skia',
      'Zustand',
    ],
  },
  {
    title: 'Advent Calendar',
    description:
      'Introducing my Advent Calendar app – a minimalist countdown to Christmas where each day reveals an image or GIF surprise. Share the festive experience by customizing and exchanging calendars with friends. Stay tuned for potential updates.',
    icon: '/puurfect_advent_icon.png',
    technologies: ['React', 'React-Native', 'Expo', 'Redux', 'React Navigation', 'Supabase'],
  },
];

const PersonalProjects = () => {
  return (
    <>
      {projectData.map((project, index) => {
        const screenshots = project.screenshots;
        return (
          <div key={index} className={'px-6 md:px-12 pt-10 '}>
            <div className="flex flex-col md:flex-row text-wrap gap-10 pb-10">
              <Image
                className={'w-30 h-30 md:w-40 md:h-40 rounded-3xl'}
                src={project.icon}
                loading={'lazy'}
                placeholder={'blur'}
                blurDataURL={project.icon}
                alt={`Icon for ${project.title}`}
                width={100}
                height={100}
              />
              <div>
                <p className={' text-xl md:text-2xl'}>{project.title}</p>
                <p
                  className={'whitespace-pre-line text-sm md:text-base pt-6 break-normal text-wrap'}
                >
                  {project.description}
                </p>
                <p className={' text-lg md:text-xl opacity-80 font-bold pt-6 italic'}>
                  {'Technologies Used'}
                </p>
                <div className={'flex flex-row flex-wrap pt-2'}>
                  {project.technologies.map((_, i) => (
                    <p
                      key={i}
                      className={'text-s md:text-base pt-1 pr-2 md:pr-5'}
                    >{`${_}${i !== project.technologies.length - 1 ? ',' : ''}`}</p>
                  ))}
                </div>
                {(screenshots?.length || 0) > 0 && (
                  <div className={'overflow-auto overscroll-x-auto flex flex-row gap-5 pt-10 '}>
                    {screenshots?.map((_, index) => (
                      <Image
                        placeholder={'blur'}
                        loading={'lazy'}
                        key={index}
                        className={'w-36 md:w-60 rounded-3xl'}
                        src={_}
                        alt={`Screenshots for ${project.title}}`}
                        blurDataURL={_}
                        height={800}
                        width={400}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="border-2 rounded h-1 w-40 md:w-52 mx-auto" />
          </div>
        );
      })}
    </>
  );
};

export default PersonalProjects;
