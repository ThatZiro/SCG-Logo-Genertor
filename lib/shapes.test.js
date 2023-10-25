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