import { useState, useEffect } from 'react';
import './CoordinateCursor.css';

export const CoordinateCursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`coordinate-cursor ${isVisible ? 'visible' : ''}`}>
      {/* Horizontal line */}
      <div
        className="crosshair-line horizontal"
        style={{ top: `${coords.y}px` }}
      />
      
      {/* Vertical line */}
      <div
        className="crosshair-line vertical"
        style={{ left: `${coords.x}px` }}
      />

      {/* Coordinate text */}
      <div
        className="coordinate-text"
        style={{
          left: `${coords.x + 15}px`,
          top: `${coords.y + 15}px`,
        }}
      >
        x: {coords.x}, y: {coords.y}
      </div>
    </div>
  );
};
