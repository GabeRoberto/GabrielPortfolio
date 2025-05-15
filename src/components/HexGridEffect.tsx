import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './HexGridEffect.css';

interface HexGridEffectProps {
  size?: number;
}

const HexGridEffect = ({ size = 25 }: HexGridEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [hexagons, setHexagons] = useState<{ x: number; y: number; id: number }[]>([]);
  const { isDark } = useTheme();

  // Color palette for different areas
  const colors = [
    'rgba(0, 102, 255, 0.9)',  // Primary blue
    'rgba(0, 102, 255, 1)',    // Primary blue
    'rgba(0, 102, 255, 1)',    // Primary blue
  ];

  useEffect(() => {
    const createHexGrid = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const hexSize = size;
      // Calculate proper honeycomb dimensions
      const hexWidth = hexSize * Math.sqrt(3);
      const hexHeight = hexSize * 2;
      const horizontalSpacing = hexWidth;
      const verticalSpacing = hexHeight * 0.75;
      
      const rows = Math.ceil(height / verticalSpacing) + 1;
      const cols = Math.ceil(width / horizontalSpacing) + 1;
      
      const newHexagons = [];
      let id = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Calculate position with proper honeycomb offset
          const x = col * horizontalSpacing + (row % 2) * (horizontalSpacing / 2);
          const y = row * verticalSpacing;
          newHexagons.push({ x, y, id: id++ });
        }
      }
      
      setHexagons(newHexagons);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    createHexGrid();
    window.addEventListener('resize', createHexGrid);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', createHexGrid);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getColorForPosition = () => {
    return colors[1]; // Always return the same blue color
  };

  // Calculate points for hexagon with proper orientation
  const getHexPoints = (size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 - Math.PI / 6; // Rotate 30 degrees for flat-top orientation
      const x = size * Math.cos(angle);
      const y = size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${isDark ? 'hexgrid-bg-dark' : 'hexgrid-bg-light'}`}
    >
      <svg className="hexgrid-svg">
        {hexagons.map(hex => {
          const distance = getDistance(mousePosition.x, mousePosition.y, hex.x, hex.y);
          const maxDistance = size * 2;
          const opacity = Math.max(0, 1 - distance / maxDistance);
          const color = getColorForPosition();
          
          return (
            <polygon
              key={hex.id}
              points={getHexPoints(size)}
              className={`hexgrid-polygon ${opacity > 0 ? 'active' : 'inactive'}`}
              style={{
                '--x': `${hex.x}px`,
                '--y': `${hex.y}px`,
                '--size': `${size}px`,
                '--color': color,
                '--inactive-color': isDark ? '#ffffff20' : '#00000020'
              } as React.CSSProperties}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default HexGridEffect; 