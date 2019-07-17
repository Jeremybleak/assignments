let button = document.getElementById('buttonAdd')
let divAdd = document.getElementById("addDiv")

button.addEventListener("click", function(e){
e.preventDefault()
    var firstAdd = Number(document.getElementById("add1").value)
    var secondAdd = Number(document.getElementById('add2').value)
    let total = firstAdd + secondAdd
    
    divAdd.innerHTML = total
})
let button2 = document.getElementById('buttonSub')
let divSub = document.getElementById("subDiv")

button2.addEventListener("click", function(e){
e.preventDefault()
    var firstSub = Number(document.getElementById("sub1").value)
    var secondSub = Number(document.getElementById('sub2').value)
    let total = firstSub - secondSub
    
    divSub.innerHTML = total
})
let button3 = document.getElementById('buttonMulti')
let divMulti = document.getElementById("multiDiv")

button3.addEventListener("click", function(e){
e.preventDefault()
    var firstMulti = Number(document.getElementById("multi1").value)
    var secondMulti = Number(document.getElementById('multi2').value)
    let total = firstMulti * secondMulti
    
    divMulti.innerHTML = total
})