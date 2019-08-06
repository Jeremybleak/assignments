const nums = [1, 3, 5, 2, 90, 20]
const string = ["dog", "wolf", "by", "family", "eaten"]

let sTG = nums.sort(function(a,b){
return ( a - b )
})
console.log(sTG)

let gTS = nums.sort(function(a,b){
return ( b - a )
})
console.log(gTS)

let stringGTS = string.sort(function(a,b){
    return (a.length > b.length)
})
console.log(stringGTS)

let stringABC = string.sort(function(a,b){
    return (a > b)
})
console.log(stringGTS)

function byAge(arr){
    return arr 
  }
  
  console.log(byAge([
      {
          name: "Quiet Samurai",
          age: 22
      },
      {
          name: "Arrogant Ambassador",
          age: 100
      },
      {
          name: "Misunderstood Observer",
          age: 2
      },
      {
          name: "Unlucky Swami",
          age: 77
      }
  ]));
  console.log(arr)