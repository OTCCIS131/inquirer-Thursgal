var chalk = require('chalk');
var inquirer = require('inquirer');

var correct = false;

class Pizza {
  constructor(si, eCheese, sau, mTop, vTop, piNum) {
    this.size = si;
    this.extraCheese = eCheese;
    this.sauce = sau;
    this.mToppings = mTop
    this.vToppings = vTop;
    this.pieceNum = piNum;
  }
  display() {
      if (this.extraCheese == "Yes") {
          console.log("Your order is: A " + chalk.green(this.size) + chalk.magenta(" pizza with extra cheese, ") + chalk.blue(this.sauce) + " sauce," + 
            chalk.yellow(this.mToppings) + "," + chalk.cyan(this.vToppings) + " and cut into " + chalk.red(this.pieceNum) + " pieces.");
      }
      else {
        console.log("Your order is: A " + chalk.green(this.size) + chalk.magenta(" pizza with no extra cheese, ") + chalk.blue(this.sauce) + " sauce," + 
            chalk.yellow(this.mToppings) + "," + chalk.cyan(this.vToppings) + " and cut into " + chalk.red(this.pieceNum) + " pieces.");
      }
  }
}
console.log(chalk.bold.rgb(10, 100, 200)('Welcome to Joe\'s Crab Shack™! What kinda pizza could I get for ya?'));
console.log(chalk.italic.rgb(100, 50, 50)('Please call us at 867-5309!'));
let questions = [{
    name: "size",
    type: "list",
    message: "What size pizza would you like?",
    choices: ["Small", "Medium", "Large", "X-Large"]    
} , {
    name: "extraCheese",
    type: "list",
    message: "Would you like extra cheese?",
    choices: ["Yes", "No"]
} , {
    name: "sauce",
    type: "list",
    message: "What kind of sauce would you like?",
    choices: ["Red", "White", "No"]
} , {
    name: "mTops",
    type: "checkbox",
    message: "What meats would you like?",
    choices: [" Pepperoni", " Sausage", " Hamburger"]
} , {
    name: "vTops",
    type: "checkbox",
    message: "What vegetables would you like?",
    choices: [" Onions", " Peppers", " Mushrooms", " Spinach", " Olives"]
} , {
    name: "pieces",
    type: "list",
    message: "How many pieces would you like it cut into?",
    choices: ["6", "8", "12"]
}]
let finalize = [{
    name: "answer",
    type: "list",
    message: "Is this correct?",
    choices: ["Yes", "No"]
}]

const myPizza = new Pizza();

inquirer.prompt(questions).then(function(answers){
    myPizza.size = answers.size, myPizza.extraCheese = answers.extraCheese, myPizza.sauce = answers.sauce, myPizza.mToppings = answers.mTops, 
    myPizza.vToppings = answers.vTops, myPizza.pieceNum = answers.pieces;
    myPizza.display();

    inquirer.prompt(finalize).then(function(theAnswer){
        if (theAnswer.answer == "Yes") {
            console.log("Your order has been submitted.");
        }
        else {
            console.log("Please retry order.");
        }
    })
});