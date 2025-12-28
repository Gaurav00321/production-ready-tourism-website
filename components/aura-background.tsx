"use client";

import { useEffect, useRef } from "react";

export function AuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      if (!ctx || !canvas) return;

      // Clear with very slight fade for trail effect, or just clear.
      // We want a subtle noise/grain + slow moving gradients.
      
      // Create a gradient that moves slowly
      const w = canvas.width;
      const h = canvas.height;
      
      // Premium dark/teal aura
      // const gradient = ctx.createLinearGradient(0, 0, w, h);
      // But we want it dynamic.
      
      ctx.clearRect(0, 0, w, h);
      
      // Draw subtle shifting blobs
      const cx1 = w * 0.5 + Math.cos(t * 0.0002) * w * 0.2;
      const cy1 = h * 0.5 + Math.sin(t * 0.0003) * h * 0.2;
      
      const cx2 = w * 0.5 + Math.cos(t * 0.0004 + 2) * w * 0.3;
      const cy2 = h * 0.5 + Math.sin(t * 0.0005 + 2) * h * 0.3;

      const g = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, w * 0.6);
      g.addColorStop(0, "rgba(94, 234, 212, 0.03)"); // Tealish
      g.addColorStop(1, "rgba(0,0,0,0)");
      
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, w * 0.5);
      g2.addColorStop(0, "rgba(147, 51, 234, 0.02)"); // Purple-ish accent
      g2.addColorStop(1, "rgba(0,0,0,0)");
      
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Noise overly
      // Generating noise every frame is expensive. 
      // A static noise overlay CSS is better, but let's try a very simple canvas noise if performance allows, 
      // or just stick to the gradient blobs for the 'Aura'.
      
      t += 16;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-background pointer-events-none overflow-hidden">
      {/* CSS Mesh Gradient Fallback/Overlay */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
      
      {/* Canvas for subtle movement */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-100" />
      
      {/* Noise Texture via CSS for performance */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
