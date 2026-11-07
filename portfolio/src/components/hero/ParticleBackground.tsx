
import type { CSSProperties } from "react";

const particles = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  x: `${(index * 37 + 13) % 100}%`,
  y: `${(index * 61 + 7) % 100}%`,
  delay: `${(index % 8) * -0.7}s`,
  duration: `${5 + (index % 6)}s`,
  size: `${2 + (index % 3)}px`,
}));

function ParticleBackground() {
  return (
    <div className="particle-background" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={
            {
              left: particle.x,
              top: particle.y,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default ParticleBackground;
