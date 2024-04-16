#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = "true";
console.log(chalk.cyan.bold("\n \t Welcome to To-Do-List App \n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.magenta("Enter your Today's Task :"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.yellow(`${addTask.task} Task added in your To-Do-List`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.green("Do you want to add more Task?"),
            default: "false"
        }
    ]);
    condition = addMoreTask.addMore;
}
console.log(chalk.blue.bold("\n Your updated To-do-List: \n"), todoList);
