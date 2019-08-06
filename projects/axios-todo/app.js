// "https://api.vschool.io/jeremy/todo"
display()
function display(update){
    axios.get("https://api.vschool.io/jeremy/todo").then(res =>{
        if(update){
            document.getElementById('list').innerHTML = ''
        }
        res.data.forEach(toDo=>{
            let li = document.createElement('li')
            let pic = document.createElement('img')
            pic.setAttribute("class","img")
            pic.src = toDo.imgUrl
            li.textContent = toDo.title
            let check = document.createElement('input')
            check.setAttribute('type', "checkbox")
            let del = document.createElement('button')
            del.setAttribute ('id',"del")
            del.textContent = "X"
            del.addEventListener('click', function(){
                deleting(toDo)
            })
            check.addEventListener('click', function(){
            putting(toDo)
            })
            if(toDo.completed === true){
                check.checked = true
                li.style.textDecoration = "line-through"
            }
            document.getElementById('list').appendChild(li)
            li.appendChild(check)
            li.appendChild(del)
            li.appendChild(pic)
        })
})
}

document.addTodo.addEventListener('submit', function(event){
    event.preventDefault()
    let newToDo= {
        title: document.addTodo.title.value,
        description: document.addTodo.description.value,
        price: document.addTodo.price.value,
        imgUrl: document.addTodo.imgUrl.value,
    }
    addTodo.title.value = ""
    addTodo.description.value = ""
    addTodo.price.value = ""
    addTodo.imgUrl.value = ""
    posting(newToDo)
})


function posting(newToDo){
    axios.post("https://api.vschool.io/jeremy/todo", newToDo).then(res =>{
         display('update')
    })
}

function putting(toDo){
axios.put(`https://api.vschool.io/jeremy/todo/${toDo._id}`, {completed: !toDo.completed} ).then(res =>{
    display('update')
})
}
function deleting(toDo){
axios.delete(`https://api.vschool.io/jeremy/todo/${toDo._id}`).then(res =>{
    display('update')
})
}
