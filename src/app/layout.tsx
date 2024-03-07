

import type {Metadata} from "next";
import {DM_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const mono = DM_Mono({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
    title: "Tom Atterton - React Native Developer",
    description: "Portfolio of Tom Atterton, a professional React-Native mobile developer, showcasing skills, projects, and experiences.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={mono.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
