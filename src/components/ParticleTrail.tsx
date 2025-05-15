import { useEffect, useState, useRef } from 'react';
import './ParticleTrail.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  velocity: { x: number; y: number };
}

interface ParticleTrailProps {
  color: string;
  particleCount?: number;
}

const ParticleTrail = ({ color, particleCount = 20 }: ParticleTrailProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastUpdate = useRef(Date.now());
  const particleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate.current > 16) { // ~60fps
        createParticle(e.clientX, e.clientY);
        lastUpdate.current = now;
      }
    };

    const createParticle = (x: number, y: number) => {
      setParticles(prev => {
        const newParticles = [...prev, {
          id: particleId.current++,
          x,
          y,
          size: Math.random() * 4 + 2,
          color,
          opacity: 1,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }
        }].slice(-particleCount);

        return newParticles;
      });
    };

    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.95
          }))
          .filter(particle => particle.opacity > 0)
      );
    };

    const animationFrame = setInterval(updateParticles, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationFrame);
    };
  }, [color, particleCount]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          data-x={particle.x}
          data-y={particle.y}
          data-size={particle.size}
          data-color={particle.color}
          data-opacity={particle.opacity}
          data-glow={particle.size * 2}
          data-glow-color={`${particle.color}40`}
        />
      ))}
    </div>
  );
};

export default ParticleTrail; 