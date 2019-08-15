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
        axios.get('https://api.vschool.io/jeremy/todo').then(response => {
            this.setState({todos: response.data})
        })
    }
    deleteTodo= id =>{
        axios.delete(`https://api.vschool.io/jeremy/todo/${id}`).then(
            // console.log('deleted')
            this.setState(prevState => {
                const updatedTodos = prevState.todos.filter(todo => {
                    return todo._id !== id
                })
                console.log(updatedTodos)
                return {todos: updatedTodos}
            })
        )
    }

    render(){
        let todosMapped = this.state.todos.map((todo) =>{
        return(
         <Todo key={todo._id} title={todo.title} description={todo.description} price={todo.price} imgUrl={todo.imgUrl} id={todo._id} deletedTodos={this.deleteTodo}/>
        )
    })
        return(
            <div className='to'>
                {todosMapped}
            </div>
        )
    }
}

export default TodoContainer