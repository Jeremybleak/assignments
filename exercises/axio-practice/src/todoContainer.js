import React from 'react'
import axios from 'axios'
import Todo from './Todo'

class TodoContainer extends React.Component{
    constructor(){
        super()

        this.state={
            todos: []
        }
    }
    componentDidMount(){
        axios.get('https://api.vschool.io/jeremy/todo').then(response =>{
            this.setState({todos: response.data})
        })
    }
    render(){
        const todosMapped = this.state.todos.map((todo,i) => <Todo key={i} title={todo.title} description={todo.description} price={todo.price} imgUrl={todo.imgUrl} />)
        return(
            <div>
            {todosMapped}
            </div>
        )
    }
}

export default TodoContainer