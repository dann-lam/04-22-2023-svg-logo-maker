let inq = require('inquirer');
let fs = require('fs');
let { triangle, square, circle } = require('./shapes')


class cli {
    constructor(){

    }
    run(){
        return inq.prompt([
            //First prompt:
            //Text, three characters
            {
                type: "input",
                message: "Input three characters.",
                name: "title"
            },
            //Second prompt:
            //TEXT Color
            //Text, color keyword or hexademial num.
            {
                type: "input",
                message: "Logo Text Color - input color keyword or hexadecimal",
                name: "textColor"
            },
            //Third prompt:
            //List, three choices: circle, triangle, square
            {
                type: "list",
                message: "Choose a shape.",
                name: "shape",
                choices: ["circle", "triangle", "square"]
            },
            //Fourth prompt:
            //SHAPE Color
            //Color keyword or hexadecimal number.
            {
                type: "input",
                message: "Shape Color - input color keyword or hexadecimal",
                name: "shapeColor"
            },
        ])
        .then((answers => {
            let output = '';
            if(answers.shape == "circle"){
                let coolcircle = new circle(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                output = coolcircle.render();
            } else if (answers.shape == "square"){
                let coolsquare = new square(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                output = coolsquare.render();
            } else if (answers.shape == "triangle"){
                let cooltriangle = new triangle(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                output = cooltriangle.render();
            }
            fs.writeFile("./output/logo.svg", output, (err) => {
                if(err)
                console.log(err);
                else {
                console.log("File encoded!");
                }
            })
        }))
    }
}

module.exports = { cli }
