'use client';
import { useEffect, useRef } from 'react';

const NODE_COUNT = 30;
const CONNECTION_DIST = 150;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = document.documentElement.scrollHeight;
    let nodes: Node[] = [];
    let animationId: number;

    const resize = () => {
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.2 + 0.6,
        opacity: Math.random() * 0.22 + 0.06,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.05;
            ctx.strokeStyle = `rgba(10,10,10,${alpha})`;
            ctx.lineWidth = 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(10,10,10,${n.opacity})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }
    };

    const animate = () => {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createNodes();
    animate();

    const handleResize = () => {
      resize();
      nodes.forEach(n => {
        n.x = Math.random() * width;
        n.y = Math.random() * height;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="neural-canvas" aria-hidden="true" />;
}