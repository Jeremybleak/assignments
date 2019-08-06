var readlineSync = require('readline-sync')
// let num1 = num1.value
// let num2 = num2.value
// var add = num1 + num2
// var multiply = num1 * num2
// var subtract = num1 - num2
// var divide = num1 / num2
const options = ["Add", "Subtract", "Multiply", "Divide"]

index = readlineSync.keyInSelect (options,"what would you like to do?")
if(index === 0){
    let add1 = readlineSync.question("Whats the first number you want me to add? ")
    let add2 = readlineSync.question("Whats the second number you want me to add? ")
    let total = Number(add1) + Number(add2)
    console.log("Your total is: " + total)
}else if(index=== 1){
    let sub1 = readlineSync.question("Whats the fist number you want me to subtract? ")
    let sub2 = readlineSync.question("Whats the second number you want me to subtract? ")
    let total = Number(sub1) - Number(sub2)
    console.log("Your total is: " + total)
}else if(index === 2){
    let mult1 = readlineSync.question("Whats the first number you want me to multiply? ")
    let mult2 = readlineSync.question("Whats the second number you want me to multiply? ")
    let total = Number(mult1) * Number(mult2)
    console.log("Your total is: " + total)
}else if(index === 3){
    let divide1 = readlineSync.question("Whats the first number you want me to divide? ")
    let divide2 = readlineSync.question("Whats the second number you want me to divide? ")
    let total = Number(divide1) / Number(divide2)
    console.log("Your total is: " + total)
}