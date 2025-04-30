
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // loads tsparticles package bundle, it's the easiest method for getting everything ready

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // console.log(container); // Optional: Log container details
    }, []);

    const options = {
        background: {
            color: {
                value: "transparent", // Make background transparent
            },
        },
        fpsLimit: 60, // Keep FPS limit reasonable
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Change mode to grab or bubble for interaction
                },
                onClick: {
                    enable: true,
                    mode: "push", // Push particles on click
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140, // Increase grab distance slightly
                    line_linked: { // Use line_linked instead of links
                        opacity: 0.3, // Make grab lines more subtle
                    }
                },
                bubble: { // Example bubble effect (alternative to grab)
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 4, // Push fewer particles on click
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff", // Keep particles white
            },
            links: { // Use links instead of line_linked for main connections
                color: "#ffffff",
                distance: 150, // Keep link distance
                enable: true,
                opacity: 0.15, // Make links more subtle
                width: 1,
            },
            collisions: {
                enable: false, // Disable collisions for smoother flow
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { // Use outModes instead of out_mode
                    default: "out", // Particles disappear when going out
                },
                random: true, // More random movement
                speed: 0.5, // Slow down particle speed significantly
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000, // Increase area for lower density
                },
                value: 40, // Reduce number of particles
            },
            opacity: {
                value: 0.3, // Make particles more subtle
                 anim: { // Add subtle opacity animation
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            shape: {
                type: "circle", // Keep circle shape
            },
            size: {
                value: { min: 1, max: 3 }, // Keep size small
                 anim: { // Add subtle size animation
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false
                }
            },
        },
        detectRetina: true, // Enable retina detection
    };


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0 // Ensure it's behind content
            }}
        />
    );
};

export default ParticleBackground;
