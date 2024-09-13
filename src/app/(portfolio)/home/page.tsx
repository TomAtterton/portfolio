'use client';

import IconButton from '@/components/ui/icon-button';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-12">
        <h1 className="text-2xl md:text-4xl">Tom Atterton</h1>
        <p className="text-sm md:text-base italic text-center break-words mt-4">
          Freelance Software Developer focused on mobile development with React Native, providing
          efficient and reliable solutions for clients.
        </p>
        <p className="text-xs md:text-base mt-2">Get in touch with me below.</p>
        <div className="flex flex-row space-x-4 md:space-x-5 mt-4">
          <IconButton icon="email" link="mailto:hello@tomatterton.com" />
          <IconButton icon="github" link="https://github.com/tomatterton" />
          <IconButton icon="linkedin" link="https://www.linkedin.com/in/tom-atterton-48a84274" />
          <IconButton icon="twitter" link="https://twitter.com/tom_atterton" />
        </div>
      </div>
      <footer className="text-xs md:text-base opacity-50 text-center mb-4">
        &copy; {new Date().getFullYear()} Tom Atterton - All rights reserved. Hosted on Vercel.
      </footer>
      <ParticleBackground />
    </main>
  );
}
