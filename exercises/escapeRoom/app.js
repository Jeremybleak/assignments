var readlineSync = require('readline-sync')

const options = ["Put hand in hole", "Look for key", "Open the door"]
const lessOptions = ["Put hand in hole","Look for key"]
const options1 = ["Put hand in hole", "Open the door"]
index = readlineSync.keyInSelect(options, "What action would you like to take?")
if(index === 0){
    console.log("You died!")
}else if(index === 1){
    console.log("You found the key!")
    index = readlineSync.keyInSelect(options1,"what action would you like to take?")
    if(index == 0){
        console.log('You died!')
    }else{
        console.log('YOU WON!')
    }
}else if(index === 2){
    console.log("You dont know how to lock pick!")
   index = readlineSync.keyInSelect(lessOptions, "What action would you like to take?")
    if(index === 0){
    console.log('You died!')
    }
    else{
        console.log('You done diddly found the key... about time')
        index = readlineSync.keyInSelect(options1, "what action would you like to take?")
        if(index === 0){
            console.log('Your stupidity killed you!')
        }else{
            console.log('YOU WON!')
        }
    }
}