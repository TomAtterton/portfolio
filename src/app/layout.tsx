import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {ThemeButton} from "@/components/ui/theme-button";

const mono = JetBrains_Mono({weight: ['300', '400'], subsets: ['latin']});

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
            <div className="flex space-x-5 items-center absolute top-2 right-2 md:top-6 md:right-6">
                <a href="/" className="text-sm md:text-base">Home</a>
                <a href="/projects" className="text-sm md:text-base">Projects</a>
                <ThemeButton/>
            </div>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
