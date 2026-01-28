import { useRef, useState } from "react";

export function HoverZoomImage({
  src,
  alt,
  zoomEnabled,
  onDeactivate,
}: {
  src: string;
  alt: string;
  zoomEnabled: boolean;
  onDeactivate: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgPos, setBgPos] = useState("50% 50%");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomEnabled || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setBgPos(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={onDeactivate}
      className="relative w-full h-full overflow-hidden rounded-lg"
      style={
        zoomEnabled
          ? {
              backgroundImage: `url(${src})`,
              backgroundPosition: bgPos,
              backgroundRepeat: "no-repeat",
              backgroundSize: "220%",
              cursor: "zoom-out",
            }
          : {}
      }
    >
      {!zoomEnabled && (
        <img src={src} alt={alt} className="object-contain w-full h-full" />
      )}
    </div>
  );
}
