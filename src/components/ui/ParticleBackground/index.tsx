"use client"

import {useEffect, useMemo} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {options} from "./options";
import {useTheme} from "next-themes";
import {ISourceOptions} from "@tsparticles/engine";


const ParticleBackground = () => {

    useEffect(() => {
        initParticlesEngine((engine) => loadSlim(engine))
    }, []);
    const {theme} = useTheme()

    const isDark = theme === "dark"

    const particleOptions: ISourceOptions = useMemo(() => {
        return {
            ...options,
            particles: {
                ...options.particles,
                color: {
                    value: isDark ? "#ffffff" : "#000000"
                },
                links: {
                    ...options?.particles?.links || {},
                    color: isDark ? "#ffffff" : "#000000"
                }
            }
        }
    }, [isDark])

    return <Particles
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        options={particleOptions}
    />
}


export default ParticleBackground;
