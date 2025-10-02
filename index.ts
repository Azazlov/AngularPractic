import * as readline from 'readline';



function main(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    rl.question('Введите ваш возраст: ', (input: string) => {
        rl.close();

        // let age: number = Math.floor(Math.random()*100); 
        // Рандомный вариант

        let age:number = Number(input);
        
        if (age < 18){
            console.log('Доступ запрещен')
            return
        }
        else if (age >= 18){
            for (let i: number = 1; i < 11; i++){
                console.log(`${age} * ${i} = ${age*i}`)
            }
        }
    });
}
// main();

function calculate(num1: number, num2: number, oper: string): number{
    const operators: string = '+-*/'
    switch (operators.indexOf(oper)){
        case 0: return num1+num2;
        case 1: return num1-num2;
        case 2: return num1*num2;
        case 3: return num1/num2;
        default: return 0
    }
}

console.log(calculate(4, 5, '*'))