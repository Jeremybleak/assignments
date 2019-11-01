const numArray = [1, 2, 3, 4, 5]

const doubleNums = () => {
    return numArray.map(num => {
       return num * 2
    })
}

console.log(doubleNums())