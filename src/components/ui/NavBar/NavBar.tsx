'use client';
import { ThemeButton } from '@/components/ui/theme-button';
import Link from 'next/link';
import { DialogContactMe } from '../DialogContactMe';

const NavBar = () => (
  <div className="flex space-x-5 items-center absolute top-2 right-2 md:top-6 md:right-6">
    <Link href="/home" className="text-sm md:text-base">
      Home
    </Link>
    <Link href="/projects" className="text-sm md:text-base">
      Projects
    </Link>
    <DialogContactMe />
    <ThemeButton />
  </div>
);

export default NavBar;
