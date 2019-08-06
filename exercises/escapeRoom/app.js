var readlineSync = require('readline-sync')

const options = ["Put hand in hole", "Look for key", "Open the door"]
const lessOptions = ["Put hand in hole","Look for key"]
// const options1 = ["Put hand in hole", "Open the door"]
const options2 = ["Put hand in hole","Open the door","Swallow the key"]
const options3 = ["Put hand in hole","Try to throw up","Wait for key to come out"]
const options4 = ["Put hand in hole","Try to throw up again", "Wait for key to come out","Eat your clothes"]
const options5 = ["Breathe in the water(this will kill you.. duh)", "Put you mouth around the hole", "Wait"]
index = readlineSync.keyInSelect(options, "What action would you like to take?")

if(index === 0){
    console.log("You couldnt be more stupid! The miniature lion that lives in this hole bit your arm off, and watched as you slowly bled out. You died!")
}else if(index === 1){
    console.log("You found the key! See that wasnt too hard")
    index = readlineSync.keyInSelect(options2,"What action would you like to take?")
    if(index === 0){
        console.log('Why would you do that afer you grabbed the key? the door is right there! Anyways when you reached your hand in the hole you touched a live wire that electricuted you to your death. You died!')
    }else if(index === 1){
        console.log('You opened the door.... I guess that means you win... YOU WON!')
    }else if(index === 2){
        console.log('You swallowed the key!')
        index = readlineSync.keyInSelect(options3, "What action would you like to take?")
        if(index === 0){
            console.log('YOU DIED!')
        }else if(index === 1){
            console.log("it failed!")
            index= readlineSync.keyInSelect(options4,"What action would you like to take?")
            if(index === 0){
                console.log('Why would you swallow a perfectly good key and then stick your hand in a hole? YOU DIED')
            }else if(index === 1){
                console.log('The key came up, but got lodged in your throat making you fight for air, with every breath shorter than the last, YOU DIED')
            }else if(index === 2){
                console.log('The room slowly started filling up with water from the hole!')
                index = readlineSync.keyInSelect(options5,"What action would you like to take?")
                if(index===0){
                    console.log('you drowned!')
                }else if(index === 1){
                    console.log('You filled up with water just like a water ballon, that being said you popped like one too. YOU DIED!')
                }else if(index === 2){
                    console.log('Your patience saved you! The water pressure broke the door down,leading to your sweet escape! YOU WON!')
                }
            }else if(index === 3){
                console.log('You choked on your clothes and died! YOU DIED!')
            }
        }
        else if(index=== 2){
            console.log('You waited for what seemed like three days until you finally died of dehydration. YOU DIED')
    }
    }
}else if(index === 2){
    console.log("The door is locked! You dont know how to lock pick!")
   index = readlineSync.keyInSelect(lessOptions, "What action would you like to take?")
    if(index === 0){
    console.log('Not the smartest move. You died!')
    }else{
        console.log('You done diddly found the key... about time')
        index = readlineSync.keyInSelect(options2, "What action would you like to take?")
        if(index === 0){
            console.log('Your stupidity killed you! YOU DIED!')
        }else if(index === 1){
            console.log('You opened the door to find another empty room, except this room doesnt have anymore doors you doubled your living space though! Thats a win in my books, YOU WON!')
        }else if(index === 2){
            console.log('You swallowed the key!')
            index = readlineSync.keyInSelect(options3, "What action would you like to take?")
            if(index === 0){
                console.log('Your hand got stuck in the hole, and you had to sit there with your belly full of key and die of dehydration. YOU DIED!')
            }else if(index === 1){
                console.log("it failed!")
                index= readlineSync.keyInSelect(options4,"What action would you like to take?")
                if(index === 0){
                    console.log('Why would you swallow a perfectly good key and then stick your hand in a hole? YOU DIED')
                }else if(index === 1){
                    console.log('The key came up, but got lodged in your throat making you fight for air, with every breath shorter than the last, YOU DIED')
                }else if(index === 2){
                    console.log('The room slowly started filling up with water from the hole!')
                    index = readlineSync.keyInSelect(options5,"What action would you like to take?")
                    if(index===0){
                        console.log('You dont know how to swim and you drowned!')
                    }else if(index === 1){
                        console.log('You filled up with water just like a water ballon, that being said you popped like one too. YOU DIED!')
                    }else if(index === 2){
                        console.log('Your patience saved you! The water pressure broke the door down,leading to your sweet escape! YOU WON!')
                    }
                }else if(index === 3){
                    console.log('You choked on your clothes and died! YOU DIED!')
                }
            }
            else if(index=== 2){
                console.log('You waited for what seemed like three days until you finally died of dehydration. YOU DIED')
        }
    }
}
}