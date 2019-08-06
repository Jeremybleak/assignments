var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet){
    let totalArray = []
for(i = 0; i < people.length; i++){
    totalArray.push(people[i]+":")
    for(j = 0; j < alphabet.length; j++){
        totalArray.push(alphabet[j].toUpperCase())
    }   return totalArray
}}
console.log(forception(people, alphabet))