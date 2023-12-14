// CanvasComponent.js
import React, { useRef, useEffect } from 'react';

const GolfViewer = ({ locations, end }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

    // Your drawing logic here
        drawCoordinates(ctx, locations, end);
    }, [locations, end]);

    const drawCoordinates = (ctx, locations, end) => {
        let progress = 0;
        let currentCoordinateIndex = 0;
      
        const animate = () => {
          // Fill the canvas with a green background
          ctx.fillStyle = 'green';
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
          // Ensure that locations is not empty or undefined
          if (locations && locations.length > 0) {
            // Interpolate between previous and current coordinates


            // TODO: FEED THE SECOND DATA INTO THE CURRENT COORD INDEX!!!!!!!!!
            const animatedCoordinate = {
              x: locations[currentCoordinateIndex].x * progress + prevCoord.x * (1 - progress),
              y: locations[currentCoordinateIndex].y * progress + prevCoord.y * (1 - progress),
            };
      
            // Draw the dot at the current animated coordinate
            ctx.fillStyle = 'white'; // Change color to your desired dot color
            ctx.beginPath();
            ctx.arc(animatedCoordinate.x * ctx.canvas.width, animatedCoordinate.y * ctx.canvas.height, 20, 0, 2 * Math.PI);
            ctx.fill();
      
            // Draw the final destination flag using the custom SVG path
            const flagSize = 30;
            const flagX = end.x * ctx.canvas.width - flagSize / 2;
            const flagY = end.y * ctx.canvas.height - flagSize;
      
            ctx.fillStyle = 'red'; // Change color to your desired color
            ctx.fillRect(flagX, flagY, flagSize, flagSize);
      
            if (progress < 1) {
              progress += 0.05; // Adjust animation speed as needed
              requestAnimationFrame(animate);
            } else {
              progress = 0;
              currentCoordinateIndex++;
      
              // If there are more coordinates, update previous coordinates for the next animation iteration
              if (currentCoordinateIndex < locations.length) {
                prevCoord = locations[currentCoordinateIndex - 1];
              } else {
                currentCoordinateIndex = 0;
                prevCoord = locations[0];
              }
      
              requestAnimationFrame(animate);
            }
          }
        };
      
        let prevCoord = locations && locations.length > 0 ? locations[0] : { x: 0, y: 0 };
        animate();
    };
      
  

  return <canvas ref={canvasRef} width={800} height={1233} />;
};

export default GolfViewer;
