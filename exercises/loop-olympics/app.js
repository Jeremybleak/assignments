// preliminaries

// for(i = 0; i < 10; i++){
//     console.log(i)
// }
// for(i = 9; i > 0; i--){
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// bronze

// var myArray = []

// for(i = 0; i < 10; i++){
//     myArray.push([i])
// }

// console.log(myArray)

// for(i = 0; i < 101; i++){
//     if(i % 2 === 0){
//     console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for(i = 0; i < fruit.length; i++){
//    if(i % 2 === 0){
//        myArray.push(fruit[i])
//    }
// }
// console.log(myArray)

// silver
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for(i=0;i < peopleArray.length;i++){
//       console.log(peopleArray[i].name)
//   }
// arrayNames = [];
// arrayOcc = [];

// for(i = 0; i < peopleArray.length; i++){
//     if(peopleArray[i].name){
//         arrayNames.push(peopleArray[i].name)
        
//     }if(peopleArray[i].occupation){
//         arrayOcc.push(peopleArray[i].occupation)
//     }
// }
// console.log(arrayNames)
// console.log(arrayOcc)

// arrayNames2 = [];
// arrayOcc2 = [];

// for(i = 0; i < peopleArray.length; i++) {
//     if(i % 2 === 0){
//         arrayNames2.push(peopleArray[i].name)
//     }if(i % 2 === 1){
//         arrayOcc2.push(peopleArray[i].occupation)
//     }
// }
// console.log(arrayNames2)
// console.log(arrayOcc2)

// gold

const grid = []

for(i = 0; i < 3; i++){
    for(j=0; j < i; j++){
        grid.push([j, j, j])
    }
}
console.log(grid)