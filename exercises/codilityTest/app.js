let solution = (S,K) => {
    let howManyWeeks = K/7
    const week = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
    for(i=0; i < howManyWeeks; i++){
        week.push('Mon','Tue','Wed','Thur','Fri','Sat','Sun')
    }
    let dayOfWeek = week.indexOf(S)
    let newDay = dayOfWeek + K
    console.log(week[newDay])
    return week[newDay]
}



solution('Sun', 10)