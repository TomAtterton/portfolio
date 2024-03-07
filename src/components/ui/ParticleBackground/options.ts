import type {ISourceOptions} from "@tsparticles/engine";

const AMOUNT = 30;
const DISTANCE = 200;

const options: ISourceOptions = {
    fpsLimit: 120,

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
        },
        modes: {
            grab: {
                distance: DISTANCE,
                line_linked: {
                    opacity: 1,
                },
            },
        },
    },
    particles: {
        links: {
            distance: DISTANCE,
            enable: true,
            opacity: 0.6,
            width: 2,
        },

        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: AMOUNT,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 5,
            },
        },
    },
    responsive: [
        {
            maxWidth: 800,
            options: {
                particles: {
                    number: {
                        value: 70,
                    },
                }
            }
        }
    ],
    detectRetina: true,
}
export {options};
