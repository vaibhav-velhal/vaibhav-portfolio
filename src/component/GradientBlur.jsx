import { useEffect, useRef } from "react";

export default function GradientBlur({
  className = "",
  numBlobs = 50,
  numCenters = 8,
  blurAmount = 60,
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const blobsRef = useRef([]);
  const orbitCentersRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const colors = [
      ["#FF1493", "#FF1493"], //Hot Pink
      ["#FF4500", "#FF4500"], //Orange Red
      ["#FFD700", "#FFD700"], //Gold
      ["#ADFF2F", "#ADFF2F"], //Green Yellow
      ["#00FFFF", "#00FFFF"], //Cyan
      ["#00BFFF", "#00BFFF"], //Sky Blue
      ["#8A2BE2", "#8A2BE2"], //Purple Violet
      ["#DA70D6", "#DA70D6"], //Orchid
    ];

    function resizeCanvas() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      canvas.style.filter = `blur(${blurAmount}px)`;
    }

    function setup() {
      blobsRef.current = [];
      orbitCentersRef.current = [];

      for (let i = 0; i < numCenters; i++) {
        orbitCentersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }

      for (let i = 0; i < numBlobs; i++) {
        const center = orbitCentersRef.current[i % numCenters];

        blobsRef.current.push({
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02,
          orbitRadius: 50 + Math.random() * 100,
          radius: 50 + Math.random() * 100,
          centerX: center.x,
          centerY: center.y,
          color: colors[i % colors.length],
        });
      }
    }

    function drawBlob(x, y, r, c1, c2) {
      const gradient = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
      gradient.addColorStop(0, c1);
      gradient.addColorStop(1, c2);

      ctx.globalAlpha = 0.7;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobsRef.current.forEach((blob) => {
        blob.angle += blob.speed;
        const x = blob.centerX + blob.orbitRadius * Math.cos(blob.angle);
        const y = blob.centerY + blob.orbitRadius * Math.sin(blob.angle);

        drawBlob(x, y, blob.radius, blob.color[0], blob.color[1]);
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    resizeCanvas();
    setup();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      setup();
    });

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}