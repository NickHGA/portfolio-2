import { useEffect, useRef } from 'react';

export function DotWave() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        // Settings
        const dotSpacing = 35; // Slightly more spaced
        const dotSize = 2; // More visible
        const waveAmplitude = 25; // More pronounced wave
        const waveFrequency = 0.005; // Wider wave
        const waveSpeed = 0.03;
        const sweepSpeed = 0.005; // Speed of the left-to-right sweep

        let time = 0;
        let sweep = 0;

        const getDotColor = (opacity: number) => {
            const isDark = document.documentElement.classList.contains('dark') ||
                document.documentElement.getAttribute('data-theme') === 'dark';
            return isDark ? `rgba(255, 255, 255, ${opacity * 0.8})` : `rgba(129, 79, 49, ${opacity * 0.7})`;
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const rows = Math.ceil(canvas.height / dotSpacing);
            const cols = Math.ceil(canvas.width / dotSpacing);

            const offsetX = (canvas.width % dotSpacing) / 2;
            const offsetY = (canvas.height % dotSpacing) / 2;

            // Calculate current sweep position
            const sweepCenter = (Math.sin(sweep) + 1) / 2;
            const sweepRange = 1.4;
            const currentSweepX = (sweepCenter * sweepRange - (sweepRange - 1) / 2) * canvas.width;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * dotSpacing + offsetX;
                    const baseY = j * dotSpacing + offsetY;

                    // Distance from sweep center affects amplitude and opacity
                    const distToSweep = Math.abs(x - currentSweepX);
                    // sweepFactor is 1 at center, 0 at 30% of screen width away
                    const sweepFactor = Math.max(0, 1 - distToSweep / (canvas.width * 0.3));

                    if (sweepFactor > 0) {
                        // Wave calculation
                        const wave = Math.sin(x * waveFrequency + time) * waveAmplitude * sweepFactor;

                        ctx.beginPath();
                        ctx.fillStyle = getDotColor(sweepFactor);
                        const size = dotSize * (0.5 + sweepFactor * 1.5);
                        ctx.arc(x, baseY + wave, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            time += waveSpeed;
            sweep += sweepSpeed;
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
            className="absolute inset-0 pointer-events-none z-0"
            style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 95%)' }}
        />
    );
}
