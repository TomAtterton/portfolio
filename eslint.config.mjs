import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  {
    ignores: ['.next/**', '.next-stale-*/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...nextVitals,
  ...nextTypescript,
];

export default config;
