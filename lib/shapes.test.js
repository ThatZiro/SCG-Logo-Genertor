const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    test('should generate the correct SVG', () => {

        const test = {
            background: 'PURPLE',
            shape: 'Triangle',
            text: 'TXT',
            color: 'GREEN'
          };
          const triangle = new Triangle(test);
        const expectedSVG = `<svg width="100" height="100">
    <polygon points="50,5 95,95 5,95" stroke="black" stroke-width="1" fill="PURPLE" />
    <text x="50%" y="50%" font-size="24px" font-weight="bold" text-anchor="middle" dy="1em" fill="GREEN">TXT</text>
</svg>`

    expect(triangle.innerHTML()).toBe(expectedSVG);
    })
})

describe('Square', () => {
    test('should generate the correct SVG', () => {

        const test = {
            background: 'RED',
            shape: 'Square',
            text: 'STP',
            color: 'WHITE'
          };
          const square = new Square(test);
        const expectedSVG = `<svg width="100" height="100">
    <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="1" fill="RED" />
    <text x="50%" y="50%" font-size="24px" font-weight="bold" text-anchor="middle" dy=".3em" fill="WHITE">STP</text>
</svg>`

    expect(square.innerHTML()).toBe(expectedSVG);
    })
})


describe('Circle', () => {
    test('should generate the correct SVG', () => {

        const test = {
            background: 'GREEN',
            shape: 'CIRCLE',
            text: 'GO',
            color: 'WHITE'
          };
          const circle = new Circle(test);
        const expectedSVG = `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="GREEN" />
    <text x="50%" y="50%" font-size="24px" font-weight="bold" text-anchor="middle" dy=".3em" fill="WHITE">GO</text>
</svg>`

    expect(circle.innerHTML()).toBe(expectedSVG);
    })
})