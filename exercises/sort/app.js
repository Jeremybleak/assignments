const arr = [1, 44, 32, 100, 5]

const sortArray = (arr) => {
    const sortyMcSort = arr.sort(function(a, b){
        return b - a
    })
    return sortyMcSort
}


console.log(sortArray(arr))

