"use client"

import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {options} from "./options";
import {useTheme} from "next-themes";
import {ISourceOptions} from "@tsparticles/engine";


const ParticalBackground = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => loadSlim(engine)).then(() => {
            setInit(true);
        });
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

    return init && <Particles
        id="tsparticles"
        options={particleOptions}
    />
}


export default ParticalBackground;
