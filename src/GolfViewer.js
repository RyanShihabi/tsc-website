import React, { useRef, useEffect } from 'react';

const GolfViewer = ({ locations, end }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        drawCoordinates(ctx, locations, end);
    }, [locations, end]);

    const drawCoordinates = (ctx, locations, end) => {
        let progress = 0;
        let currentCoordinateIndex = 0;
      
        const animate = () => {
          ctx.fillStyle = 'green';
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

          if (locations && locations.length > 0) {
            const animatedCoordinate = {
              x: locations[currentCoordinateIndex].x * progress + prevCoord.x * (1 - progress),
              y: locations[currentCoordinateIndex].y * progress + prevCoord.y * (1 - progress),
            };
      
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(animatedCoordinate.x * ctx.canvas.width, animatedCoordinate.y * ctx.canvas.height, 5, 0, 2 * Math.PI);
            ctx.fill();

            const flagSize = 10;
            const flagX = end.x * ctx.canvas.width - flagSize / 2;
            const flagY = end.y * ctx.canvas.height - flagSize;
      
            ctx.fillStyle = 'red';
            ctx.fillRect(flagX, flagY, flagSize, flagSize);
      
            if (progress < 1) {
              progress += 0.05;
              requestAnimationFrame(animate);
            } else {
              progress = 0;
              currentCoordinateIndex++;

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

  return <canvas ref={canvasRef} />;
};

export default GolfViewer;
