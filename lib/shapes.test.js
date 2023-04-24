const {triangle, square, circle} = require('./shapes');
describe('Tests all Shapes', () => {
    describe("Triangle Test", () => {
        it('Affirmative test for Triangles', () => {
            //Arrange
            let title = "testTitle";
            let textColor = "black";
            let shape = "triangle";
            let shapeColor = "grey";
            let testTriangle = new triangle(title, textColor, shape, shapeColor);
            //Assert
            let result = testTriangle.render()
            expect(result).toBe(`<svg height="300" width="200" viewBox="0 0 100 100"><polygon points="50 0, 100 100, 0 100" fill="grey"/><text x="55" y="75" font-size="15" fill="black">testTitle</text></svg>`)
        })
    })
    describe("Square Test", () => {
        it('Affirmative test for Squares', () => {
            //Arrange
            let title = "testSquare";
            let textColor = "red";
            let shape = "square";
            let shapeColor = "blue";
            let testSquare = new square(title, textColor, shape, shapeColor);
            //Assert
            let result = testSquare.render()
            expect(result).toBe(`<svg height="300" width="200" viewBox="0 0 100 100"><rect width="70%" height="70%" fill="blue" x="15" y="15"/><text x="50" y="75" font-size="15" fill="red">testSquare</text></svg>`)
        })
    })
    describe("circle Test", () => {
        it('Affirmative test for circles', () => {
            //Arrange
            let title = "testcircle";
            let textColor = "black";
            let shape = "circle";
            let shapeColor = "red";
            let testcircle = new circle(title, textColor, shape, shapeColor);
            //Assert
            let result = testcircle.render()
            expect(result).toBe(`<svg height="300" width="200"><circle cx="100" cy="100" r="100" fill="red" /><text x="50" y="150" font-size="35" fill="black">testcircle</text></svg>`)
        })
    })
})
