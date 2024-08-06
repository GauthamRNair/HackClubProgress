setDocDimensions(800, 600);

function generateBuilding(x, y, width, height) {
    const turtle = new bt.Turtle().goTo([x, y]);
    turtle.down()
        .right(90).forward(width)  // Bottom side
        .left(90).forward(height)  // Right side
        .left(90).forward(width)   // Top side
        .left(90).forward(height); // Left side
    return turtle.lines();
}

function generateCity(numBuildings, cityWidth, cityHeight) {
    const buildings = [];
    const baseHeight = 50; // Minimum height for buildings
    const maxHeight = cityHeight * 0.8; // Maximum height for buildings
    const baseWidth = 30; // Minimum width for buildings
    const maxWidth = cityWidth * 0.1; // Maximum width for buildings

    for (let i = 0; i < numBuildings; i++) {
        const width = bt.randInRange(baseWidth, maxWidth);
        const height = bt.randInRange(baseHeight, maxHeight);
        const x = bt.randInRange(0, cityWidth - width);
        const y = cityHeight - height;

        buildings.push(generateBuilding(x, y, width, height));
    }

    return buildings;
}

const cityWidth = 800;
const cityHeight = 600;
const numBuildings = 50;

const city = generateCity(numBuildings, cityWidth, cityHeight);
console.log(bt.merge(bt.merge(city)));
drawLines(bt.merge(city));
