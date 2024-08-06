// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = Math.min(imageHeight, imageWidth);
const height = Math.min(imageHeight, imageWidth);

setDocDimensions(width*0.5, height*0.5);

// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];

// add the polyline to the final lines
finalLines.push(polyline);

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
