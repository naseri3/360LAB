import { useState } from "react";

export default function CharacterViewer({ images }) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const total = images.length;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (Math.abs(diff) > 15) {
      setFrameIndex(prev =>
        (prev + (diff > 0 ? 1 : -1) + total) % total
      );
      setStartX(e.clientX);
    }
  };

  return (
    <img
      src={images[frameIndex]}
      alt="character"
      className="character-image"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      draggable={false}
    />
  );
}