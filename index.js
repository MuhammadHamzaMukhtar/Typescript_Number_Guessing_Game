#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let play = false;
let score = 0;
(async () => {
    await showBanner("Guessing Game", 'This game is created by Hamza Mukhtar', 'green');
})();
async function guessingNumber() {
    let randomNumber = Math.ceil((Math.random() * 4) + 10);
    const answer = await inquirer.prompt([
        {
            name: "userNumber",
            type: "number",
            message: "Guess a number",
        },
    ]);
    if (answer.userNumber === randomNumber) {
        score += 10;
        console.log(chalk.green("You guess a right number"));
        console.log(chalk.yellow(`Your scores are ${score}`));
        play = true;
    }
    else {
        console.log(chalk.red("Try Again!"));
        play = false;
    }
}
do {
    setTimeout(() => {
        guessingNumber();
    }, 1000);
} while (play);
