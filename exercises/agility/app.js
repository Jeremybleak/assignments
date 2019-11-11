// Ball Clock
const ballClock = ballCount => {
    const minLimit = 4
    const fiveLimit = 11
    const hourLimit = 11
    let min = 0
    let five = 0
    let hour = 0
    let halfDay = 0
    const clockBalls = {
        ballQueue: [],
        fiveTrack: [],
        hourTrack: []
    }
    const {ballQueue, fiveTrack, hourTrack} = clockBalls
    for (let i = 1; i <= ballCount; i++){
        ballQueue.push(i)
    }
    const startingQueue = [...ballQueue]
    const qLen = ballQueue.length;
    do {
        if(min > minLimit){
            min = 0
            five++
            const used = ballQueue.splice(qLen - 5, 5)
            fiveTrack.push(used.shift())
            ballQueue.push(used.reverse())
        }
        if(five > fiveLimit){
            five = 0
            hour++
            const used = ballQueue.splice(qLen - 12, 12)
            hourTrack.push(used.shift())
            ballQueue.push(used.reverse())
        }
        if(hour > hourLimit){
            hour = 0
            halfDay++
        }
    } while(ballQueue.join('') !== startingQueue.join(''))
    
}





console.log(ballClock(30)) // 15 days
console.log(ballClock(45)) // 378 days
// between 27 --- 127
// Display ball Count, Number of Days, Duration of Computation
// Minute holds 4, 5th ball rolls to 5 min indicator, the rest roll back in reverse order
// 5 min holds 11, 12th ball rolls to Hour indicator, the rest roll back in reverse order
// hour track holds 11, 12th ball rolls tips and and empties all 12 balls
// How long until all the balls are back in their original position
// There is one queue for all of the balls where they get dumped

