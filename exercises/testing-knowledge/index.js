Arr = [5, 6, 0.9, 12, 0.4]
function returnWholeNumbers (){
for(i = 0; i < Arr.length; i++){
    if(Arr[i] % 1 === 0){
        return Arr
    }
}
}

console.log(returnWholeNumbers())
function poop (Arr){

let count = 0
for(let i = 0; i < Arr.length; i++){
    if(Arr[i] % 1 === 0){
        count ++
    }else {
        count + 0
    }
console.log(count);
}
}

console.log(poop(
    Arr
))
