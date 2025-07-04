import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true,
          },
        },
        particles: {
          color: { value: "#374151" }, // Tailwind gray-700
          links: {
            color: "#374151",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "out" },
          },
          number: {
            value: 45,
            density: { enable: true, area: 900 },
          },
          opacity: { value: 0.25 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;