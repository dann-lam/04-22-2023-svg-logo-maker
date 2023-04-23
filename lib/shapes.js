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

class triangle extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){

    }
}

class square extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){
        console.log(`Rendering a ${this.shape}`);
        return `<svg height="300" width="200" viewBox="0 0 100 100">
        <rect width="70%" height="70%" fill="${this.shapeColor}" x="15" y="15"/>
        <text x="25" y="75" font-size="35" fill="${this.textColor}">"${this.title}"</text>
      </svg>`
    }
}

class circle extends shape {
    constructor(title, textColor, shape, shapeColor) {
        super (title, textColor, shape, shapeColor)
    }
    render(){
        console.log(`Rendering a ${this.shape}`);
        return `<svg height="300" width="200">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="0" y="150" font-size="35" fill="${this.textColor}">"${this.title}"</text>
      </svg>`
    }
}

module.exports = {
    triangle, square, circle
}
