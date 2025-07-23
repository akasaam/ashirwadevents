'use client';

import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  color: string;
}

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let petals: Petal[] = [];

    const colors = ['rgba(229, 57, 53, 0.6)', 'rgba(255, 182, 193, 0.4)', 'rgba(255, 255, 255, 0.7)'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPetal = (): Petal => {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 1 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    const initPetals = () => {
      petals = [];
      const petalCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < petalCount; i++) {
        const petal = createPetal();
        petal.y = Math.random() * canvas.height;
        petals.push(petal);
      }
    };

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Create gradient for petal
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petal.size);
      gradient.addColorStop(0, petal.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      
      // Draw petal shape
      ctx.ellipse(0, 0, petal.size, petal.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Add a subtle border
      ctx.strokeStyle = `rgba(229, 57, 53, ${petal.opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    };

    const updatePetal = (petal: Petal) => {
      petal.x += petal.vx;
      petal.y += petal.vy;
      petal.rotation += petal.rotationSpeed;

      // Reset petal when it goes off screen
      if (petal.y > canvas.height + 20) {
        petal.y = -20;
        petal.x = Math.random() * canvas.width;
      }

      if (petal.x < -20) {
        petal.x = canvas.width + 20;
      } else if (petal.x > canvas.width + 20) {
        petal.x = -20;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add subtle gradient background
      const backgroundGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      backgroundGradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)');
      backgroundGradient.addColorStop(0.5, 'rgba(229, 57, 53, 0.01)');
      backgroundGradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw petals
      petals.forEach(petal => {
        updatePetal(petal);
        drawPetal(petal);
      });

      // Occasionally add new petals
      if (Math.random() < 0.005) {
        petals.push(createPetal());
      }

      // Remove excess petals to maintain performance
      if (petals.length > 50) {
        petals.splice(0, petals.length - 50);
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initPetals();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initPetals();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-container"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default CanvasBackground;