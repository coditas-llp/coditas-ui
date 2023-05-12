import React from "react";
import config from './config.json'

interface IParticleProps {
    config: any
    id?: string;
}

const Particles = (props: IParticleProps) => {

    const init = () => {
        const doc = document.getElementById((props.id || 'main'))
        if (doc) {
            try {
                window.particlesJS.load((props.id || 'main'), (props.config || config), function () {
                    console.log('callback - particles.js config loaded');
                });
            } catch (error) {
                console.error(`The Particle.js is missing in the module, please add  ==> require('coditas-ui/dist/components/Particles/particle') <== to the file you want to use Particles`)
            }
        }
    }

    React.useEffect(() => {
        init()
    })
    return <div id="main" />
}

export default Particles