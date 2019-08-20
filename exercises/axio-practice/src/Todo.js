import React from 'react'

const Todo =(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <img src={props.imgUrl} alt=""/>
        </div>
    )
}

export default Todo