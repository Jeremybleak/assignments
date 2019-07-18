let form = document.travel
let button = document.getElementById('submit')
button.addEventListener("click", function(e){
    e.preventDefault()
    let diet = form.restrict
     const dietArray = []
    for( i = 0; i < diet.length; i++){
       if(diet[i].checked){
            dietArray.push(diet[i].value)
       }
       console.log(dietArray[i])
    }    
    alert(`First name: ${form.fName.value}\nLast name: ${form.lName.value}\nAge: ${form.age.value}\nGender: ${form.gender.value}\nGoing to: ${form.travel.value}\nDietary Restsrictions: ${dietArray}`)
})


