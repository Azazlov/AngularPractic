"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    rl.question('Введите ваш возраст: ', (input) => {
        rl.close();
        // let age: number = Math.floor(Math.random()*100); 
        // Рандомный вариант
        let age = Number(input);
        if (age < 18) {
            console.log('Доступ запрещен');
            return;
        }
        else if (age >= 18) {
            for (let i = 1; i < 11; i++) {
                console.log(`${age} * ${i} = ${age * i}`);
            }
        }
    });
}
main();
