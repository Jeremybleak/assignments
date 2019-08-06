let redBox = document.getElementById("red-box")

redBox.addEventListener("mousemove", function(e){
    this.textContent = `x= ${e.pageX} y= ${e.pageY}`
})