let box = document.getElementById('djBox')
let button = document.getElementById('clear')
let buttonR = document.getElementById('reset')

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = 'blue'
})
box.addEventListener("mousedown", function(){
    box.style.backgroundColor = 'red'
})
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = 'yellow'
})
box.addEventListener("dblclick", function(){
    box.style.backgroundColor = 'green'
})
window.addEventListener("scroll", function(){
    box.style.backgroundColor = 'orange'
})
buttonR.addEventListener('click', function(){
    box.style.backgroundColor = 'black'
})