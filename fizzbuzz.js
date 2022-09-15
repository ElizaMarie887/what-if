const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Enter any number 1-100: "))

if (num1 % 15 === 0){
    console.log("FizzBuzz!")
}else if(num1 % 3 === 0){
    console.log("Fizz")
}else if(num1 % 5 === 0){
    console.log("Buzz")
}