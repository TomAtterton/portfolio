'use client';

import { useMemo } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { options } from './options';
import { useTheme } from 'next-themes';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

const ParticleScene = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const particleOptions: ISourceOptions = useMemo(() => {
    return {
      ...options,
      particles: {
        ...options.particles,
        color: {
          value: isDark ? '#ffffff' : '#000000',
        },
        links: {
          ...(options?.particles?.links || {}),
          color: isDark ? '#ffffff' : '#000000',
        },
      },
    };
  }, [isDark]);

  return (
    <Particles
      className="absolute left-0 top-0 h-full w-full z-[-1]"
      options={particleOptions}
    />
  );
};

const ParticleBackground = () => (
  <ParticlesProvider init={initParticles}>
    <ParticleScene />
  </ParticlesProvider>
);

export default ParticleBackground;
