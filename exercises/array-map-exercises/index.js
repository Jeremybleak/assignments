function doubleNumbers(arr){
    return arr.map(num => num * 2)
}
console.log(doubleNumbers([2,3,4]))

function stringItUp(arr){
    return arr.map(num => `${num}`)
}

console.log(stringItUp([1, 2, 3]))

function capitalizeNames(arr){
    return arr.map(name => name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase() )
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))


function namesOnly(arr){
    return arr.map(name => name.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function makeStrings(arr){
    return arr.map(name => name.age >=18 ? `${name.name} can go to the matrix` : `${name.name} is too young`)
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// function readyToPutInTheDOM(arr){
//     return arr.map(item =>)
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 