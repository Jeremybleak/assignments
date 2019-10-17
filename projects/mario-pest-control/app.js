
let button = document.getElementById("button")
let newArray= document.getElementById('total')
button.addEventListener('click', function(e){
    e.preventDefault()
    let num1 = Number(document.getElementById("goomba").value) *5
    let num2 = Number(document.getElementById('bomb').value) * 7
    let num3 = Number(document.getElementById('cheep').value) * 11
    newArray.innerHTML= (num1 + num2 + num3)
})