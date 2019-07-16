var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
let newArray = vegetables.pop()
let newArrayf= fruit.shift()
var index = fruit.indexOf('orange')
let indexP = fruit.push(index)
var vegiLen = vegetables.length
let vegiNew = vegetables.push(vegiLen)
var food = fruit.concat(vegetables)
var newA= food.splice(4, 2)
var foodR = food.reverse()
var arrayFinal= foodR.join(",")



console.log(arrayFinal)