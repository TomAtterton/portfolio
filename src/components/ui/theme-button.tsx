"use client"

import * as React from "react"
import {MoonIcon, SunIcon} from "@radix-ui/react-icons"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

export function ThemeButton() {
    const {theme = 'dark', setTheme} = useTheme()

    const isDark = theme === "dark"
    const handleToggle = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <Button onClick={handleToggle} variant="ghost" className={'h-10 w-10'}>
            {isDark ? <MoonIcon
                    className="absolute h-[1.2rem] w-[1.2rem]"/> :
                <SunIcon
                    className="absolute h-[1.2rem] w-[1.2rem]"/>}
        </Button>
    )
}
