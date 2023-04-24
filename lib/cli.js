let inq = require('inquirer');
let fs = require('fs');
let { triangle, square, circle } = require('./shapes');

//CLI Class,
class cli {
    constructor(){

    }
    run(){
        //There is probably a better way of feeding in our questions, this works for now.
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
        //should have way of checking inputs. If user inputs  invalid values then our SVG will borked.
        .then((answers => {
            //Checks if the title length is 3 or not.
            if(answers.title.length !== 3){
                throw new Error("Dude the title length has to be 3 chars long.");
            }

            let output = '';
            //Check which shape was put in, which will feed our answers to their respective class.
            if(answers.shape == "circle"){
                let coolcircle = new circle(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                //save our string to "output"
                output = coolcircle.render();
            } else if (answers.shape == "square"){
                let coolsquare = new square(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                output = coolsquare.render();
            } else if (answers.shape == "triangle"){
                let cooltriangle = new triangle(answers.title, answers.textColor, answers.shape, answers.shapeColor)
                output = cooltriangle.render();
            }
            //write output to svg
            fs.writeFile("./output/logo.svg", output, (err) => {
                if(err)
                console.log(err);
                else {
                console.log("File encoded!");
                }
            })
        }))
        //Error catcher, should kick the user out of doing something silly.
        //In future versions, we could prompt the user to fix their errors about 3x before kicking them out entirely.
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
          });
    }
}
//Export to index.js
module.exports = { cli }
