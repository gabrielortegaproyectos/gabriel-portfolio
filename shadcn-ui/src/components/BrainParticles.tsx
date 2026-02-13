import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type BrainParticlesProps = {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  interactive?: boolean;
  particleColor?: string;
  lineColor?: string;
};

export const BrainParticles = ({
  className,
  particleCount = 60,
  connectionDistance = 100,
  interactive = true,
  particleColor = '#8b5cf6',
  lineColor = '139, 92, 246',
}: BrainParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const mouseDistance = 150;

    const mouse = { x: -1000, y: -1000 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (attraction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (interactive && dist < mouseDistance) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (mouseDistance - dist) / mouseDistance;
            const attractionStrength = 0.05;
            
            p.vx += forceDirectionX * force * attractionStrength;
            p.vy += forceDirectionY * force * attractionStrength;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${1 - dist / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Limit speed
      particles.forEach(p => {
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 2;
        if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [connectionDistance, interactive, lineColor, particleColor, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'w-full h-full bg-transparent rounded-md',
        interactive ? 'cursor-crosshair' : 'cursor-default',
        className
      )}
    />
  );
};
