// Import the necessary functions and classes from the Blot toolkit
// const { Turtle, bt } = blotToolkit;

// Function to draw a star with the given number of points, size, and center
function drawStar(points, size, center) {
  const [cx, cy] = center; // Center coordinates of the star
  const step = Math.PI / points; // Angle step between star points

  // Create a new turtle instance
  const starTurtle = new bt.Turtle().up().goTo([cx, cy - size]).down();

  for (let i = 0; i < points * 2; i++) {
    const angle = i * step;
    const radius = i % 2 === 0 ? size : size / 2;
    const x = cx + Math.sin(angle) * radius;
    const y = cy - Math.cos(angle) * radius;
    starTurtle.goTo([x, y]);
  }

  // Complete the star shape by connecting the last point to the first
  starTurtle.goTo([cx, cy - size]);

  return starTurtle.lines();
}

// Set document dimensions
setDocDimensions(800, 600);

// Parameters for the star
const points = 5; // Number of star points
const size = 50; // Size of the star
const center = [400, 300]; // Center of the star

// Draw the star and get the polylines
const starPolylines = drawStar(points, size, center);

// Draw the star polylines on the canvas
drawLines(starPolylines, { stroke: 'black', width: 2 });
