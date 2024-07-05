#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    {
        message: "Choose a operation",
        type: "list",
        name: "operation",
        choices: ["Additon", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditions
if (answer.operation === "Additon") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operation === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Select a valid operation");
}
