'use client';
import { ThemeButton } from '@/components/ui/theme-button';
import Link from 'next/link';

const NavBar = () => (
  <nav
    aria-label="Primary"
    className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-md border border-border/60 bg-background/75 p-1 shadow-sm backdrop-blur md:right-6 md:top-6 md:gap-3"
  >
    <Link
      href="/home"
      className="rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-base"
    >
      Home
    </Link>
    <Link
      href="/projects"
      className="rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-base"
    >
      Projects
    </Link>
    <a
      href="mailto:hello@tomatterton.com"
      className="rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-base"
    >
      Contact
    </a>
    <ThemeButton />
  </nav>
);

export default NavBar;
