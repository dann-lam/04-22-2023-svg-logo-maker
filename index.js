

let { cli } = require('./lib/cli')

let runner = new cli();

runner.run();





//Scratch area
//---------------------------------------------------
//CLI will be an inquirer prompt that asks for a simple question object.
    //We want to take our answers and generate the code for our SVG now.

    //The code is generated via classes.

    //Once code for the svg is returned from the classes, we write it to an .svg file using FS.

//When all inputs are made, svg file named logo.svg is generated.
//Logo is 300x200 size
//Ideas:
//Color class can be generalized, as they both use color keyhword and hexadecimal.
//SHAPE Class should be tested with a .render method that returns a string for corresponding SVG file with the shape color.
