
 //main class that describes our shapes
class shape {
    constructor (title, textColor, shape, shapeColor){
    this.title = title,
    this.textColor = textColor,
    this.shape = shape,
    this.shapeColor = shapeColor
    }
    render() {
    throw new Error ("Don't render it from here!");
    }
}
//triangle extension with triangl specific svg code.
class triangle extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){
        return `<svg height="300" width="200" viewBox="0 0 100 100"><polygon points="50 0, 100 100, 0 100" fill="${this.shapeColor}"/><text x="55" y="75" font-size="15" fill="${this.textColor}">${this.title}</text></svg>`
    }
}
//square extension with specific svg code.
class square extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){
        console.log(`Rendering a ${this.shape}`);
        return `<svg height="300" width="200" viewBox="0 0 100 100"><rect width="70%" height="70%" fill="${this.shapeColor}" x="15" y="15"/><text x="50" y="75" font-size="15" fill="${this.textColor}">${this.title}</text></svg>`
    }
}
//circle extension with specific svg code.
class circle extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){
        console.log(`Rendering a ${this.shape}`);
        return `<svg height="300" width="200"><circle cx="100" cy="100" r="100" fill="${this.shapeColor}" /><text x="50" y="150" font-size="35" fill="${this.textColor}">${this.title}</text></svg>`
    }
}



module.exports = {
     triangle, square, circle
}
