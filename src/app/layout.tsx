import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const mono = JetBrains_Mono({ weight: ['300', '400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tom Atterton - Mobile Architect',
  description:
    'Portfolio of Tom Atterton, a mobile architect focused on React Native apps and product platforms.',
  openGraph: {
    title: 'Tom Atterton - Mobile Architect',
    description:
      'Mobile architect focused on React Native apps and product platforms.',
    url: 'https://tomatterton.com',
    siteName: 'Tom Atterton',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
