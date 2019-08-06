// make the box disapear when the user clicks it
let redBox = document.getElementById("red-box")

redBox.addEventListener('click', function(){
    this.style.backgroundColor = "Red"
})