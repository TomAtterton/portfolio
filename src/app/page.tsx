"use client"

import IconButton from "@/components/ui/icon-button";
import {ThemeButton} from "@/components/ui/theme-button";
import ParticalBackground from "../components/ui/ParticleBackground";


export default function Home() {
    return (
        <main className="flex min-h-screen h-screen flex-col justify-center">
            <div className="flex space-x-5 items-center absolute top-2 right-2 md:top-6 md:right-6">
                <ThemeButton/>
            </div>
            <div className="flex flex-col items-center gap-4 px-4 md:px-12">
                <p className='text-2xl md:text-4xl'>Tom Atterton</p>
                <p className="text-sm md:text-base italic text-wrap text-center">Passionate Software Developer currently
                    focusing on mobile
                    development specializing in React Native
                </p>
                <div className="flex flex-row space-x-5 mx-4 md:px-0">
                    <IconButton icon={'email'} link={"mailto:tpatterton@gmail.com"}/>
                    <IconButton icon={'github'} link={"https://github.com/tomatterton"}/>
                    <IconButton icon={'linkedin'} link={"https://www.linkedin.com/in/tom-atterton-48a84274"}/>
                    <IconButton icon={'twitter'} link={"https://twitter.com/tom_atterton"}/>
                </div>
            </div>
            <p className="text-sm md:text-base absolute left-5 bottom-5 opacity-50">@ 2024 Tom Atterton - All rights
                reserved. Hosted on
                Vercel.</p>
            <ParticalBackground/>
        </main>
    );
}


