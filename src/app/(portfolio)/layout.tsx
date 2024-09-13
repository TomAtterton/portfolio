import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/ui/NavBar/NavBar';

const mono = JetBrains_Mono({ weight: ['300', '400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tom Atterton - React Native Developer',
  description:
    'Portfolio of Tom Atterton, a professional React-Native mobile developer, showcasing skills, projects, and experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
