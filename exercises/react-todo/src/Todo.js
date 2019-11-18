import React from 'react'

const Todo= (props)=>{
    return(
        <div className='todos'>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <h3>{props.price}</h3>
            <button onClick={() => props.deletedTodos(props.id)}>X</button>
            <img src={props.imgUrl} />
        </div>
    )
}
export default Todo


