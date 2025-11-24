import { useEffect, useRef } from 'react';

export const WaveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;
        let time = 0;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.2)'; // Fade effect
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2;

            // Create multiple waves
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `hsla(${220 + i * 30}, 80%, 60%, 0.15)`; // Blue-ish purple gradients

                for (let x = 0; x < width; x += 5) {
                    // Complex wave formula
                    const y = Math.sin(x * 0.003 + time + i) * 50 +
                        Math.sin(x * 0.01 + time * 0.5) * 20 +
                        height / 2 + (i * 40 - 60);

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            time += 0.01; // Speed of animation
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60"
        />
    );
};
