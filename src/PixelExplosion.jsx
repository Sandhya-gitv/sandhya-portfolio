
import { useEffect, useRef } from "react";
import "./PixelExplosion.css";

const COLORS = ["#22d3ee", "#67e8f9", "#14b8a6", "#ffffff"];

export default function PixelExplosion() {
  const layerRef = useRef(null);
  const lastBurstRef = useRef(0);
  const lastTrailRef = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    function createPixel(x, y, isBurst = false) {
      const pixel = document.createElement("span");
      pixel.className = "pixel-particle";

      const angle = Math.random() * Math.PI * 2;
      const distance = isBurst
        ? 35 + Math.random() * 105
        : 8 + Math.random() * 28;

      pixel.style.left = `${x}px`;
      pixel.style.top = `${y}px`;
      pixel.style.width = `${3 + Math.random() * 6}px`;
      pixel.style.height = pixel.style.width;
      pixel.style.background =
        COLORS[Math.floor(Math.random() * COLORS.length)];

      pixel.style.setProperty(
        "--dx",
        `${Math.cos(angle) * distance}px`
      );
      pixel.style.setProperty(
        "--dy",
        `${Math.sin(angle) * distance}px`
      );

      const duration = isBurst
        ? 450 + Math.random() * 450
        : 250 + Math.random() * 250;

      pixel.style.setProperty("--duration", `${duration}ms`);
      layer.appendChild(pixel);

      pixel.addEventListener(
        "animationend",
        () => pixel.remove(),
        { once: true }
      );
    }

    function handleMove(event) {
      const now = performance.now();

      // Limit trail particles for smooth performance.
      if (now - lastTrailRef.current < 35) return;
      lastTrailRef.current = now;

      createPixel(event.clientX, event.clientY);
    }

    function handleClick(event) {
      if (event.button !== 0) return;

      const now = performance.now();
      if (now - lastBurstRef.current < 70) return;
      lastBurstRef.current = now;

      for (let i = 0; i < 22; i++) {
        createPixel(event.clientX, event.clientY, true);
      }
    }

    document.addEventListener("pointermove", handleMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="pixel-explosion-layer"
      aria-hidden="true"
    />
  );
}
