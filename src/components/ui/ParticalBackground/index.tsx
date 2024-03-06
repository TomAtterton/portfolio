import {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {options} from "./options";


const ParticalBackground = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => loadSlim(engine)).then(() => {
            setInit(true);
        });
    }, []);

    return init && <Particles
        id="tsparticles"
        options={options}
    />
}


export default ParticalBackground;
