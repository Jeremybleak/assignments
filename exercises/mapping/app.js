const numArray = [1, 2, 3, 4, 5]

const doubleNums = (arr) => {
    return arr.map(num => {
       return num * 2
    })
}

console.log(doubleNums(numArray))


function doubleNums1(arr){
    return arr.map(num =>{
        return num * 2
    })
}
console.log(doubleNums1([2,55,33]))

function doubleNumbers(arr){
    return arr.map(num => num * 2)
}

console.log(doubleNumbers([2,55,33]))
