

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var computer = 0;

// for(i = 0; i < officeItems.length; i++){
//     console.log(officeItems[i])
//     if(officeItems[i] === "computer"){
//         computer++
//     }
// }
// console.log(computer)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18){
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} Is not old enough to see Mad Max`)
    } else{
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} Is old enough to watch Mad Max`)
    }
}