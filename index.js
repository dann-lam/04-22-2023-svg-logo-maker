let fs = require('fs');
let inq = require('inquirer');
let { triangle, square, circle } = require('./lib/shapes')




let questions = [
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
];
let demoAnswer = {
    title: 'SSI',
    textColor: 'red',
    shape: 'triangle',
    shapeColor: 'black'
}
//CLI will be an inquirer prompt that asks for a simple question object.

// inq.prompt(questions)
// .then((answers => {
//     //We want to take our answers and generate the code for our SVG now.
//     console.log(answers);
//     //The code is generated via classes.

//     //Once code for the svg is returned from the classes, we write it to an .svg file using FS.

// }))
console.log(demoAnswer);
let demoFunction = (input1) => {
    let output = '';
    if(input1.shape == "circle"){
        let coolcircle = new circle(input1.title, input1.textColor, input1.shape, input1.shapeColor)
        output = coolcircle.render();
    } else if (input1.shape == "square"){
        let coolsquare = new square(input1.title, input1.textColor, input1.shape, input1.shapeColor)
        output = coolsquare.render();
    } else if (input1.shape == "triangle"){
        let cooltriangle = new triangle(input1.title, input1.textColor, input1.shape, input1.shapeColor)
        output = cooltriangle.render();
    }
    fs.writeFile("./output/logo.svg", output, (err) => {
        if(err)
        console.log(err);
        else {
        console.log("File encoded!");
        }
    })
    //Save the return string as an SVG with writeFile.
    //fs writeFile svg from output.
}

demoFunction(demoAnswer);


//When all inputs are made, svg file named logo.svg is generated.

//Logo is 300x200 size
//Ideas:

//Color class can be generalized, as they both use color keyhword and hexadecimal.

//SHAPE Class should be tested with a .render method that returns a string for corresponding SVG file with the shape color.

//
