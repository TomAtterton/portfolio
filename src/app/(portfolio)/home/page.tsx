'use client';

import IconButton from '@/components/ui/icon-button';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <section className="flex flex-1 items-center justify-center px-5 py-24 text-center sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">
            Mobile architect
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Tom Atterton
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
            Architecting mobile apps and product platforms with a focus on React Native.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View projects
            </Link>
            <a
              href="mailto:hello@tomatterton.com"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background/70 px-5 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Email me
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-4 px-5 pb-6 text-center text-sm text-foreground/60 sm:flex-row sm:justify-between sm:px-8 lg:px-16">
        <p>&copy; {new Date().getFullYear()} Tom Atterton. All rights reserved.</p>
        <div className="flex flex-row gap-2">
          <IconButton icon="email" link="mailto:hello@tomatterton.com" />
          <IconButton icon="github" link="https://github.com/tomatterton" />
          <IconButton icon="linkedin" link="https://www.linkedin.com/in/tom-atterton-48a84274" />
          <IconButton icon="twitter" link="https://twitter.com/tom_atterton" />
        </div>
      </footer>
      <ParticleBackground />
    </main>
  );
}
