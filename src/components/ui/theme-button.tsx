'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeButton() {
  const { theme = 'dark', setTheme } = useTheme();

  const isDark = theme === 'dark';
  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      onClick={handleToggle}
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="h-10 w-10"
    >
      {isDark ? (
        <MoonIcon aria-hidden="true" className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunIcon aria-hidden="true" className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
