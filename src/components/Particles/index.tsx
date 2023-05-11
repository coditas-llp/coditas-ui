import React from "react";
import pJS from './particle'
const config = require('./config.json')

interface IParticleProps {
    config?: any
    id?: string;
}

const Particles = (props: IParticleProps) => {

    const init = () => {
        pJS((props.id || 'main'), config)
        const doc = document.getElementById((props.id || 'main'))
        console.log('>> doc', doc);
        if (doc) {
            window.particlesJS.load('main', config, function () {
                console.log('callback - particles.js config loaded');
            });
        }
    }

    React.useEffect(() => {
        init()

    })
    return <div id="main" />
}

export default Particles